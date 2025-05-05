import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PuppeteerService } from './puppeteer.service';
import puppeteer from 'puppeteer';

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
      await page.goto(url, { waitUntil: 'networkidle0' });

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
      const screenshotBuffer = await element.screenshot();
      console.log('Screenshot completed');

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
      if (page) {
        await this.puppeteerService.releasePage(page);
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
