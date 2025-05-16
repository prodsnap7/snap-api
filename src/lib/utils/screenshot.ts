import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PuppeteerService } from './puppeteer.service';
import puppeteer from 'puppeteer';
import * as fs from 'fs';

dotenv.config();

@Injectable()
export class ScreenshotService {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  async screenshotElement(
    url: string,
    selector: string,
  ): Promise<Buffer | void> {
    console.log('Taking screenshot...', url, selector);
    let page = null;

    try {
      page = await this.puppeteerService.getPage();
      console.log('Navigating to URL:', url);

      // Set a reasonable navigation timeout
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000, // 30 seconds timeout
      });

      await page.setViewport({ width: 4000, height: 4000 });
      console.log('Page loaded successfully');

      // Explicitly wait for images within the selector to be loaded.
      try {
        await page.waitForFunction(
          (selector) => {
            const element = document.querySelector(selector);
            if (!element) return false;

            const images = Array.from(element.querySelectorAll('img'));
            return (
              images.length === 0 ||
              images.every(
                (image: HTMLImageElement) =>
                  image.complete && image.naturalHeight !== 0,
              )
            );
          },
          { timeout: 15000 },
          selector,
        );
        console.log('Images loaded successfully');
      } catch (imgError) {
        console.log(
          'Image loading timed out, continuing anyway:',
          imgError.message,
        );
        // Continue execution even if image loading times out
      }

      console.log('Looking for element with selector:', selector);
      const element = await page.waitForSelector(selector, { timeout: 10000 });
      if (!element) {
        throw new Error('Could not find element');
      }

      console.log('Taking element screenshot');
      const screenshotBuffer = await element.screenshot({ type: 'png' });
      console.log('Screenshot completed');

      // Release the page before processing the buffer to minimize resource usage time
      if (page) {
        const pageToRelease = page;
        page = null; // Set to null so we don't try to release it again in finally block
        await this.puppeteerService
          .releasePage(pageToRelease)
          .catch((err) =>
            console.error(
              'Error releasing page after screenshot:',
              err.message,
            ),
          );
      }

      if (screenshotBuffer) {
        console.log('Screenshot taken successfully');
        return Buffer.from(screenshotBuffer);
      } else {
        console.log('Could not take screenshot');
        return null;
      }
    } catch (error) {
      console.error('Screenshot error:', error);
      throw error;
    } finally {
      // Only release the page if it hasn't been released yet
      if (page) {
        try {
          await this.puppeteerService.releasePage(page);
        } catch (releaseError) {
          console.error(
            'Error in finally block when releasing page:',
            releaseError.message,
          );
          // Don't rethrow this error as it would mask the original error
        }
      }
    }
  }
}

// Export a function that uses the service for backward compatibility
export async function screenshotElement(
  url: string,
  selector: string,
): Promise<Buffer | void> {
  // This is a compatibility function that will be used by existing code
  // until it can be refactored to use dependency injection
  console.warn(
    'Using deprecated screenshotElement function. Please migrate to ScreenshotService.',
  );

  try {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    page.setViewport({ width: 2400, height: 2000 });
    // Explicitly wait for images within the selector to be loaded.
    await page.waitForFunction(
      (selector) => {
        const element = document.querySelector(selector);
        if (!element) return false;

        const images = Array.from(element.querySelectorAll('img'));
        return images.every(
          (image: HTMLImageElement) =>
            image.complete && image.naturalHeight !== 0,
        );
      },
      {},
      selector,
    );

    const element = await page.waitForSelector(selector, { timeout: 10000 });
    if (!element) {
      throw new Error('Could not find element');
    }

    const screenshotBuffer = await element.screenshot();
    if (screenshotBuffer) {
      console.log('Screenshot taken');
      return Buffer.from(screenshotBuffer);
    } else {
      console.log('Could not take screenshot');
    }

    await browser.close();
  } catch (error) {
    console.log(error);
  }
}
