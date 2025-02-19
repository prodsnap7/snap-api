// disable eslint
/* eslint-disable */
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const { PrismaService } = require('../dist/prisma/prisma.service');
const { CloudinaryService } = require('../dist/uploads/cloudinary.service');
const { config } = require('dotenv');
const generateFontImage = require('./generate-font-img');

config();

async function processVariant(cloudinary, variant, fontFamily) {
  try {
    console.log(
      `Processing variant: ${fontFamily} - ${variant.name} (URL: ${variant.fontUrl})`,
    );
    const imgBuffer = await generateFontImage(
      fontFamily,
      variant.name,
      variant.fontUrl,
    );

    if (!imgBuffer) {
      console.error(
        `Failed to generate image for ${fontFamily} - ${variant.name}`,
      );
      return null;
    }

    const res = await cloudinary.uploadPhotoFromStream(
      imgBuffer,
      `prodsnap-fonts/${fontFamily}-${variant.name}`,
    );

    console.log(`Successfully processed ${fontFamily} - ${variant.name}`);
    return res.url;
  } catch (error) {
    console.error(`Error processing variant ${fontFamily} - ${variant.name}:`);
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
    return null;
  }
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);
  const cloudinary = app.get(CloudinaryService);

  try {
    console.log('Fetching fonts with missing images...');
    const fonts = await prisma.font.findMany({
      include: {
        variants: {
          where: {
            imageUrl: null,
          },
        },
        family: true,
      },
    });

    const variants = fonts.flatMap((font) =>
      font.variants.map((variant) => ({
        ...variant,
        fontFamily: font.family.name,
      })),
    );

    console.log(`Processing ${variants.length} variants...`);

    for (const variant of variants) {
      if (!variant || typeof variant !== 'object') {
        console.warn('Skipping invalid variant:', variant);
        continue;
      }

      try {
        const imageUrl = await processVariant(
          cloudinary,
          variant,
          variant.fontFamily,
        );

        if (imageUrl) {
          await prisma.fontVariant.update({
            where: { id: variant.id },
            data: { imageUrl },
          });
        }

        if ((variants.indexOf(variant) + 1) % 10 === 0) {
          console.log(
            `Processed ${variants.indexOf(variant) + 1}/${variants.length} variants`,
          );
        }
      } catch (error) {
        const variantInfo = variant
          ? `${variant.family} - ${variant.style}`
          : 'unknown variant';
        console.error(`Error processing variant ${variantInfo}:`);
        console.error('Error details:', error.message);
        console.error('Stack trace:', error);
      }
    }
  } catch (error) {
    console.error('Bootstrap error:', error);
    process.exit(1);
  } finally {
    await app.close();
  }
}

bootstrap();
