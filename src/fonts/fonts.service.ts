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

  // Cache for getAllFonts results
  private fontsCache: Map<
    number,
    {
      fonts: FontResponse[];
      nextPage: number | null;
      hasNextPage: boolean;
      timestamp: number;
    }
  > = new Map();

  // Cache TTL in milliseconds (5 minutes)
  private readonly CACHE_TTL = 5 * 60 * 1000;

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

    // Add image URL condition to the where clause
    const whereWithImages = {
      ...where,
      variants: {
        some: {
          imageUrl: {
            not: null,
          },
          AND: [
            {
              imageUrl: {
                not: '',
              },
            },
          ],
        },
      },
    };

    // Perform these queries in parallel for better performance
    const [totalFontsCount, fonts] = await Promise.all([
      // Only count fonts that have variants with images
      this.db.font.count({
        where: whereWithImages,
      }),

      // Optimize the query to only fetch fonts with image URLs in variants
      this.db.font.findMany({
        where: whereWithImages,
        include: {
          family: {
            select: {
              name: true,
            },
          },
          category: {
            select: {
              name: true,
            },
          },
          kind: {
            select: {
              name: true,
            },
          },
          variants: {
            select: {
              name: true,
              imageUrl: true,
              weight: true,
              style: true,
              fontUrl: true,
            },
          },
        },
        skip,
        take,
        orderBy: {
          family: {
            name: 'asc',
          },
        },
      }),
    ]);

    // Format the results - we've already filtered for fonts with images
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
    // No need to filter since we're already filtering in the query
    return fonts.map((font) => {
      const processedVariants = font.variants
        .filter((variant) => variant.imageUrl && variant.imageUrl.trim() !== '') // Only include variants with images
        .map((variant) => ({
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
        variants: processedVariants, // Only include variants with images
      };
    });
  }
  // --- End of Private Helpers ---

  // --- Get Font By Single ID ---
  async getFontById(id: number): Promise<FontResponse> {
    const font = await this.db.font.findUniqueOrThrow({
      where: { id },
      include: {
        family: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        kind: {
          select: {
            name: true,
          },
        },
        variants: {
          select: {
            name: true,
            imageUrl: true,
            weight: true,
            style: true,
            fontUrl: true,
          },
          where: {
            AND: [{ imageUrl: { not: null } }, { imageUrl: { not: '' } }],
          },
        },
      },
    });

    // Format the single font
    return {
      fontId: font.id,
      fontFamily: font.family.name,
      category: font.category.name,
      kind: font.kind.name,
      variants: font.variants.map((variant) => ({
        name: variant.name,
        imageUrl: variant.imageUrl || '',
        weight: +variant.weight,
        style: variant.style,
        family: font.family.name,
        url: variant.fontUrl,
      })),
    };
  }
  // --- End Get Font By Single ID ---

  // --- Get Fonts By List of IDs ---
  async getFontsByIds(ids: number[]): Promise<FontResponse[]> {
    if (!ids || ids.length === 0) {
      return []; // Return empty array if no IDs provided
    }

    // Add a cache for getFontsByIds to handle repeated requests with the same IDs
    const cacheKey = ids.sort().join(',');
    const cachedFonts = this.getFontsByIdsCache.get(cacheKey);
    if (cachedFonts && Date.now() - cachedFonts.timestamp < this.CACHE_TTL) {
      return cachedFonts.fonts;
    }

    const fonts = await this.db.font.findMany({
      where: {
        id: {
          in: ids,
        },
        variants: {
          some: {
            imageUrl: {
              not: null,
            },
            AND: [
              {
                imageUrl: {
                  not: '',
                },
              },
            ],
          },
        },
      },
      include: {
        family: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        kind: {
          select: {
            name: true,
          },
        },
        variants: {
          select: {
            name: true,
            imageUrl: true,
            weight: true,
            style: true,
            fontUrl: true,
          },
        },
      },
      orderBy: {
        family: {
          name: 'asc',
        },
      },
    });

    // Use the shared formatter for consistency
    const formattedFonts = this._formatFonts(fonts);

    // Cache the results
    this.getFontsByIdsCache.set(cacheKey, {
      fonts: formattedFonts,
      timestamp: Date.now(),
    });

    return formattedFonts;
  }
  // --- End Get Fonts By List of IDs ---

  // Add a cache for getFontsByIds
  private getFontsByIdsCache = new Map<
    string,
    {
      fonts: FontResponse[];
      timestamp: number;
    }
  >();

  async getAllFonts(page: number): Promise<{
    fonts: FontResponse[];
    nextPage: number | null;
    hasNextPage: boolean;
  }> {
    // Check if we have a cached result for this page
    if (this.fontsCache.has(page)) {
      const cachedResult = this.fontsCache.get(page);
      // Check if the cache is still valid
      if (Date.now() - cachedResult.timestamp < this.CACHE_TTL) {
        return {
          fonts: cachedResult.fonts,
          nextPage: cachedResult.nextPage,
          hasNextPage: cachedResult.hasNextPage,
        };
      }
    }

    const pageSize = 30;
    const skipAmount = page ? (page - 1) * pageSize : 0;
    // Fetch all if page is not provided (or handle differently if needed)
    const takeAmount = page ? pageSize : undefined;

    // Perform the database query and formatting
    const result = await this._fetchAndFormatFonts({
      where: {},
      skip: skipAmount,
      take: takeAmount,
      page: page || 1, // Pass page number
    });

    // Cache the result with a timestamp
    this.fontsCache.set(page, {
      ...result,
      timestamp: Date.now(),
    });

    return result;
  }

  // Method to invalidate cache when fonts are updated
  invalidateFontsCache(): void {
    this.fontsCache.clear();
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
