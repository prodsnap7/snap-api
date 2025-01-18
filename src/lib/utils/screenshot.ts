import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';

dotenv.config();

export async function screenshotElement(
  url: string,
  selector: string,
): Promise<Buffer | void> {
  console.log('Taking screenshot...', url, selector);
  try {
    // const browser = await puppeteer.connect({
    //   browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_IO_API_KEY}`,
    // });
    const browser = await puppeteer.launch({
      headless: 'new',
      defaultViewport: null,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    page.setViewport({ width: 2400, height: 2000 });
    // Explicitly wait for images within the selector to be loaded.
    await page.waitForFunction(
      (selector) => {
        const images = Array.from(
          document.querySelector(selector).querySelectorAll('img'),
        );
        return images.every(
          (image) => image.complete && image.naturalHeight !== 0,
        );
      },
      {},
      selector,
    );

    // wait for 1 second
    const element = await page.waitForSelector(selector, { timeout: 10000 });
    if (!element) {
      throw new Error('Could not find element');
    }

    const screenshotBuffer = await element.screenshot();
    if (screenshotBuffer) {
      console.log('Screenshot taken');
      return screenshotBuffer;
    } else {
      console.log('Could not take screenshot');
    }

    await browser.close();
  } catch (error) {
    console.log(error);
  }
}
