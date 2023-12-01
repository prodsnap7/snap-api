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

  async getAllFonts(
    page: number,
  ): Promise<{ fonts: FontResponse[]; nextPage: number }> {
    const fonts = await this.db.font.findMany({
      include: {
        family: true, // Include details from the Family model
        category: true, // Include details from the Category model
        kind: true, // Include details from the Kind model
        variants: true, // Include details from the Variant model
      },
      skip: (page - 1) * 30,
      take: 30,
    });

    // Format the results to match the desired object structure
    const formattedFonts = fonts.map((font) => ({
      fontFamily: font.family.name,
      category: font.category.name,
      kind: font.kind.name,
      variants: font.variants.map((variant) => ({
        name: variant.name,
        imageUrl: variant.imageUrl,
      })),
    }));

    return {
      fonts: formattedFonts,
      nextPage: +page + 1,
    };
  }
}
