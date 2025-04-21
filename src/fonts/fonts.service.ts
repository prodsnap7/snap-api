import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios'; // Make sure axios is imported
import { FastifyReply } from 'fastify'; // Import FastifyReply
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

  async getAllFonts(page: number): Promise<{
    fonts: FontResponse[];
    nextPage: number | null;
    hasNextPage: boolean;
  }> {
    const pageSize = 30;
    const skipAmount = page ? (page - 1) * pageSize : 0;
    const takeAmount = page ? pageSize : undefined;

    const totalFontsCount = await this.db.font.count();

    const fonts = await this.db.font.findMany({
      include: {
        family: true,
        category: true,
        kind: true,
        variants: true,
      },
      skip: skipAmount,
      take: takeAmount,
    });

    // --- Reverted to simple mapping ---
    const formattedFonts = fonts.map((font) => {
      const processedVariants = font.variants.map((variant) => {
        // Just return the original variant data
        return {
          name: variant.name,
          imageUrl: variant.imageUrl || '',
          weight: +variant.weight,
          style: variant.style,
          family: font.family.name,
          url: variant.fontUrl, // Return the original font URL
          // No dataUrl fetching/encoding
        };
      });

      return {
        fontFamily: font.family.name,
        category: font.category.name,
        kind: font.kind.name,
        variants: processedVariants,
      };
    });
    // --- End of reverted section ---

    const hasNextPage = page
      ? skipAmount + formattedFonts.length < totalFontsCount
      : false;

    return {
      fonts: formattedFonts,
      nextPage: hasNextPage ? page + 1 : null,
      hasNextPage,
    };
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
