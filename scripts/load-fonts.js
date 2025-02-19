// disable eslint
/* eslint-disable */
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const { PrismaService } = require('../dist/prisma/prisma.service');
const { config } = require('dotenv');
const { default: axios } = require('axios');

config();

async function fetchFonts() {
  const res = await axios.get(
    'https://www.googleapis.com/webfonts/v1/webfonts?key=' +
      process.env.GOOGLE_API_KEY,
  );
  return res.data.items;
}

async function upsertCategories(prisma, fonts) {
  const uniqueCategories = [...new Set(fonts.map((f) => f.category))];
  console.log('Upserting categories...');

  await prisma.$transaction(
    uniqueCategories.map((name) =>
      prisma.category.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  return prisma.category.findMany();
}

async function upsertKinds(prisma, fonts) {
  const uniqueKinds = [...new Set(fonts.map((f) => f.kind))];
  console.log('Upserting kinds...');

  await prisma.$transaction(
    uniqueKinds.map((name) =>
      prisma.kind.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  return prisma.kind.findMany();
}

async function upsertFamilies(prisma, fonts) {
  const uniqueFamilies = [...new Set(fonts.map((f) => f.family))];
  console.log('Upserting families...');

  await prisma.$transaction(
    uniqueFamilies.map((name) =>
      prisma.family.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  return prisma.family.findMany();
}

function processFontVariants(font) {
  return font.variants.map((variant) => {
    const { style, weight } = parseVariantStyleAndWeight(variant);
    const fontUrl = font.files[variant];

    return {
      name: variant,
      imageUrl: null,
      style,
      weight,
      fontUrl,
    };
  });
}

function parseVariantStyleAndWeight(variant) {
  let style = 'normal';
  let weight = '400';

  if (variant === 'italic') {
    style = 'italic';
  } else if (variant.match(/^\d+$/)) {
    weight = variant;
  } else if (variant !== 'regular') {
    const match = variant.match(/(\d+)(italic)/);
    if (match) {
      weight = match[1];
      style = 'italic';
    }
  }

  return { style, weight };
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);

  try {
    // Validate data model first
    console.log('Validating data model...');
    try {
      await prisma.font.findFirst({
        where: {
          AND: [{ familyId: 1 }, { categoryId: 1 }, { kindId: 1 }],
        },
      });
      console.log('✓ Data model validation successful');
    } catch (error) {
      console.error('Data model validation failed:', error);
      return;
    }

    console.log('Fetching fonts from Google API...');
    const fonts = await fetchFonts();
    const totalFonts = fonts.length;
    const totalVariants = fonts.reduce(
      (sum, font) => sum + font.variants.length,
      0,
    );
    console.log(
      `Found ${totalFonts} fonts with ${totalVariants} total variants`,
    );

    console.log('\nStarting database operations...');
    console.time('Database operations');

    // Batch upsert all categories, kinds, and families first
    console.log('\nUpserting reference tables...');
    console.time('Reference tables');
    const [categories, kinds, families] = await Promise.all([
      upsertCategories(prisma, fonts),
      upsertKinds(prisma, fonts),
      upsertFamilies(prisma, fonts),
    ]);
    console.timeEnd('Reference tables');
    console.log(`✓ Categories: ${categories.length}`);
    console.log(`✓ Kinds: ${kinds.length}`);
    console.log(`✓ Families: ${families.length}`);

    // Create lookup maps for faster access
    const categoryMap = Object.fromEntries(categories.map((c) => [c.name, c]));
    const kindMap = Object.fromEntries(kinds.map((k) => [k.name, k]));
    const familyMap = Object.fromEntries(families.map((f) => [f.name, f]));

    // Process fonts in batches
    const BATCH_SIZE = 50;
    let processedFonts = 0;
    let processedVariants = 0;

    console.log('\nProcessing fonts and variants...');
    console.time('Font processing');

    for (let i = 0; i < fonts.length; i += BATCH_SIZE) {
      const batch = fonts.slice(i, i + BATCH_SIZE);
      const batchVariantCount = batch.reduce(
        (sum, font) => sum + font.variants.length,
        0,
      );

      console.time(`Batch ${i / BATCH_SIZE + 1}`);

      // Process each font in the batch
      for (const font of batch) {
        // Find existing font
        const existingFont = await prisma.font.findFirst({
          where: {
            AND: [
              { familyId: familyMap[font.family].id },
              { categoryId: categoryMap[font.category].id },
              { kindId: kindMap[font.kind].id },
            ],
          },
        });

        if (existingFont) {
          // Update existing font
          await prisma.variant.deleteMany({
            where: { fontId: existingFont.id },
          });

          await prisma.font.update({
            where: { id: existingFont.id },
            data: {
              subsets: font.subsets,
              variants: {
                create: processFontVariants(font),
              },
            },
          });
        } else {
          // Create new font
          await prisma.font.create({
            data: {
              family: { connect: { id: familyMap[font.family].id } },
              category: { connect: { id: categoryMap[font.category].id } },
              kind: { connect: { id: kindMap[font.kind].id } },
              subsets: font.subsets,
              variants: { create: processFontVariants(font) },
            },
          });
        }
      }

      console.timeEnd(`Batch ${i / BATCH_SIZE + 1}`);

      processedFonts += batch.length;
      processedVariants += batchVariantCount;

      console.log(
        `Progress: ${processedFonts}/${totalFonts} fonts (${Math.round((processedFonts / totalFonts) * 100)}%)`,
        `and ${processedVariants}/${totalVariants} variants (${Math.round((processedVariants / totalVariants) * 100)}%)`,
      );
    }

    console.timeEnd('Font processing');
    console.timeEnd('Database operations');
    console.log('\nOperation completed successfully!');
    console.log(
      `Final count: ${processedFonts} fonts and ${processedVariants} variants processed`,
    );
  } catch (error) {
    console.error('Fatal error:', error);
    if (error.code) console.error('Error code:', error.code);
    if (error.meta) console.error('Error metadata:', error.meta);
  } finally {
    await app.close();
  }
}

bootstrap();
