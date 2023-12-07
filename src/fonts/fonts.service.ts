import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

type FontResponse = {
  fontFamily: string;
  category: string;
  kind: string;
  variants: {
    name: string;
    imageUrl: string;
  }[];
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
    const skipAmount = (page - 1) * pageSize;

    // Fetch the total count of fonts from the database
    const totalFontsCount = await this.db.font.count();

    // Fetch the fonts with pagination
    const fonts = await this.db.font.findMany({
      include: {
        family: true, // Include details from the Family model
        category: true, // Include details from the Category model
        kind: true, // Include details from the Kind model
        variants: true, // Include details from the Variant model
      },
      skip: skipAmount,
      take: pageSize,
    });

    // Format the results to match the desired object structure
    const formattedFonts = fonts.map((font) => ({
      fontFamily: font.family.name,
      category: font.category.name,
      kind: font.kind.name,
      variants: font.variants.map((variant) => ({
        name: variant.name,
        imageUrl: variant.imageUrl,
        weight: +variant.weight,
        style: variant.style,
        family: font.family.name,
        url: variant.fontUrl,
      })),
    }));

    // Determine if there is a next page
    const hasNextPage = skipAmount + pageSize < totalFontsCount;

    return {
      fonts: formattedFonts,
      nextPage: hasNextPage ? page + 1 : null, // Return null if no next page
      hasNextPage, // Include hasNextPage in the response
    };
  }
}
