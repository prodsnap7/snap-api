import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios'; // Make sure axios is imported
import { FastifyReply } from 'fastify'; // Import FastifyReply
import { Prisma, Font } from '@prisma/client'; // Import Prisma namespace for types and Font type
// No axios needed here anymore

// Helper function (can be kept or moved to utils)
const getMimeType = (url: string): string => {
  if (url.endsWith('.woff2')) return 'font/woff2';
  if (url.endsWith('.woff')) return 'font/woff';
  if (url.endsWith('.ttf')) return 'font/ttf';
  if (url.endsWith('.otf')) return 'font/otf';
  return 'application/octet-stream'; // Default fallback
};

// Revert variant response type
type FontVariantResponse = {
  name: string;
  imageUrl: string;
  weight: number;
  style: string;
  family: string;
  url: string;
  // Removed dataUrl
};

type FontResponse = {
  fontFamily: string;
  category: string;
  kind: string;
  variants: FontVariantResponse[];
};

@Injectable()
export class FontsService {
  constructor(private readonly db: PrismaService) {}

  // --- Private Helper Function ---
  private async _fetchAndFormatFonts(params: {
    where: Prisma.FontWhereInput;
    skip: number;
    take: number;
    page: number;
  }): Promise<{
    fonts: FontResponse[];
    nextPage: number | null;
    hasNextPage: boolean;
  }> {
    const { where, skip, take, page } = params;

    // Fetch total count matching the criteria
    const totalFontsCount = await this.db.font.count({ where });

    // Fetch the fonts matching the criteria with pagination
    const fonts = await this.db.font.findMany({
      where,
      include: {
        family: true,
        category: true,
        kind: true,
        variants: true,
      },
      skip,
      take,
      // Consider adding a consistent orderBy here if needed
      // orderBy: { family: { name: 'asc' } }
    });

    // Format the results
    const formattedFonts = this._formatFonts(fonts);

    const hasNextPage = skip + formattedFonts.length < totalFontsCount;

    return {
      fonts: formattedFonts,
      nextPage: hasNextPage ? page + 1 : null,
      hasNextPage,
    };
  }

  // --- Private Formatting Helper ---
  private _formatFonts(
    fonts: (Font & {
      family: { name: string };
      category: { name: string };
      kind: { name: string };
      variants: {
        name: string;
        imageUrl: string | null;
        weight: string;
        style: string;
        fontUrl: string;
      }[];
    })[],
  ): FontResponse[] {
    return fonts.map((font) => {
      const processedVariants = font.variants.map((variant) => ({
        name: variant.name,
        imageUrl: variant.imageUrl || '',
        weight: +variant.weight, // Keep the conversion here
        style: variant.style,
        family: font.family.name,
        url: variant.fontUrl,
      }));
      return {
        fontFamily: font.family.name,
        category: font.category.name,
        kind: font.kind.name,
        variants: processedVariants,
      };
    });
  }
  // --- End of Private Helpers ---

  async getAllFonts(page: number): Promise<{
    fonts: FontResponse[];
    nextPage: number | null;
    hasNextPage: boolean;
  }> {
    const pageSize = 30;
    const skipAmount = page ? (page - 1) * pageSize : 0;
    // Fetch all if page is not provided (or handle differently if needed)
    const takeAmount = page ? pageSize : undefined;

    return this._fetchAndFormatFonts({
      where: {},
      skip: skipAmount,
      take: takeAmount,
      page: page || 1, // Pass page number
    });
  }

  async searchFonts(params: {
    searchQuery: string;
    page?: number; // Make page optional for search
  }): Promise<{
    fonts: FontResponse[];
    nextPage: number | null;
    hasNextPage: boolean;
  }> {
    const { searchQuery, page = 1 } = params;
    const pageSize = 30;
    const skipAmount = (page - 1) * pageSize;

    // Prepare search query (ensure Prisma client supports 'search')
    const formattedQuery = searchQuery.split(' ').filter(Boolean).join(' & ');
    const where: Prisma.FontWhereInput = {
      family: {
        name: {
          search: formattedQuery,
          mode: 'insensitive',
        },
      },
    };

    // Add comments about preview features and indexing if needed
    // ...

    return this._fetchAndFormatFonts({
      where,
      skip: skipAmount,
      take: pageSize,
      page: page,
    });
  }

  // --- New Proxy Method ---
  async proxyFont(url: string, res: FastifyReply): Promise<void> {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: 15000, // Set a reasonable timeout (e.g., 15 seconds)
      });

      // Determine Content-Type
      const contentType = response.headers['content-type'] || getMimeType(url);

      // Set headers for the client response
      res.header('Content-Type', contentType);
      res.header('Cache-Control', 'public, max-age=31536000'); // Cache aggressively
      // Content-Length is set automatically by Fastify when sending a Buffer

      // Send the font data buffer
      res.status(200).send(response.data);
    } catch (error) {
      console.error(`Error proxying font URL ${url}:`, error.message);
      // Avoid sending response if headers were already sent (though less likely here)
      if (!res.sent) {
        // Check error type for more specific status codes if possible
        const statusCode = error.response?.status || 500;
        res.status(statusCode).send(`Error fetching font: ${error.message}`);
      }
    }
  }
  // --- End of New Proxy Method ---
}
