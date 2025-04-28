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

// Export the type definitions so they can be imported elsewhere
export type FontVariantResponse = {
  name: string;
  imageUrl: string;
  weight: number;
  style: string;
  family: string;
  url: string;
};

export type FontResponse = {
  fontId: number;
  fontFamily: string;
  category: string;
  kind: string;
  variants: FontVariantResponse[];
};

// --- Helper type for indexing data structure ---
// Define this here or in a shared types file
export interface FontIndexData {
  id: string; // Typesense document ID (string version of fontId)
  fontId: number;
  fontFamily: string;
  category: string;
  kind: string;
  hasImageUrl: boolean;
  // Add other fields needed for indexing
}

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
    // Filter fonts first: only include those with at least one variant having an image URL
    const fontsWithImages = fonts.filter(
      (font) =>
        font.variants &&
        font.variants.some(
          (variant) => variant.imageUrl && variant.imageUrl.trim() !== '',
        ),
    );

    // Now map the filtered fonts
    return fontsWithImages.map((font) => {
      const processedVariants = font.variants.map((variant) => ({
        name: variant.name,
        imageUrl: variant.imageUrl || '', // Ensure empty string if null
        weight: +variant.weight,
        style: variant.style,
        family: font.family.name,
        url: variant.fontUrl,
      }));
      return {
        fontId: font.id,
        fontFamily: font.family.name,
        category: font.category.name,
        kind: font.kind.name,
        variants: processedVariants, // All variants are returned for the matching font
      };
    });
  }
  // --- End of Private Helpers ---

  // --- Get Font By Single ID ---
  async getFontById(id: number): Promise<FontResponse> {
    const font = await this.db.font.findUniqueOrThrow({
      where: { id },
      include: {
        family: true,
        category: true,
        kind: true,
        variants: true,
      },
    });
    // Format the single font using the helper (needs an array)
    const formatted = this._formatFonts([font]);
    return formatted[0]; // Return the single formatted font
  }
  // --- End Get Font By Single ID ---

  // --- Get Fonts By List of IDs ---
  async getFontsByIds(ids: number[]): Promise<FontResponse[]> {
    if (!ids || ids.length === 0) {
      return []; // Return empty array if no IDs provided
    }
    const fonts = await this.db.font.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        family: true,
        category: true,
        kind: true,
        variants: true,
      },
      // Optionally add orderBy if needed
    });
    // Format the results using the existing helper
    return this._formatFonts(fonts);
  }
  // --- End Get Fonts By List of IDs ---

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

  // --- Add Helper for Indexing Data ---
  // Called by FontSearchService or an indexing script
  async getAllFontsForIndexing(): Promise<FontIndexData[]> {
    // Fetch data needed for Typesense index
    const fontsFromDb = await this.db.font.findMany({
      include: {
        family: true,
        category: true,
        kind: true,
        // Include variants now to check for imageUrl
        variants: {
          select: {
            imageUrl: true, // Only select the imageUrl field
          },
        },
      },
    });

    // Transform to the structure needed by Typesense
    return fontsFromDb.map((font) => {
      // Determine if any variant has an image URL
      const hasImage = font.variants.some(
        (variant) => variant.imageUrl && variant.imageUrl.trim() !== '',
      );

      return {
        id: font.id.toString(), // String ID for Typesense
        fontId: font.id,
        fontFamily: font.family.name,
        category: font.category.name,
        kind: font.kind.name,
        hasImageUrl: hasImage, // Set the boolean field
        // Map other fields as needed for your Typesense schema
      };
    });
  }
  // --- End Helper for Indexing ---

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
