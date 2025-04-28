import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module'; // Adjust path if needed
import { FontsService } from '../src/fonts/fonts.service';
import { FontSearchService } from '../src/fonts/font-search.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('IndexFontsScript');
  logger.log('--- Starting Font Indexing Script ---');

  // Create a standalone application context to access services
  const appContext = await NestFactory.createApplicationContext(AppModule);

  const fontsService = appContext.get(FontsService);
  const fontSearchService = appContext.get(FontSearchService);

  try {
    // 1. Get all font data formatted for indexing
    logger.log('Fetching fonts from database...');
    const fontsToIndex = await fontsService.getAllFontsForIndexing();
    logger.log(`Retrieved ${fontsToIndex.length} fonts to index.`);

    if (fontsToIndex.length === 0) {
      logger.log('No fonts found in the database to index.');
      await appContext.close();
      return;
    }

    // 2. Index the data into Typesense
    logger.log('Sending data to Typesense for indexing...');
    await fontSearchService.indexAllFonts(fontsToIndex); // Use the method from FontSearchService

    logger.log('--- Font Indexing Script Finished Successfully ---');
  } catch (error) {
    logger.error('--- Font Indexing Script Failed ---');
    logger.error(error);
  } finally {
    // Close the context gracefully
    await appContext.close();
  }
}

bootstrap();
