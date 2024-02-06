import { chromium } from 'playwright'; // You can also import { firefox } or { webkit } depending on the browser you want to use
import * as dotenv from 'dotenv';

dotenv.config();

export async function screenshotElement(
  url: string,
  selector: string,
): Promise<Buffer | void> {
  console.log('Taking screenshot...', url, selector);
  try {
    // Uncomment and modify the following line if you want to use browserless.io with Playwright
    // const browser = await chromium.connectOverCDP(`wss://chrome.browserless.io?token=${process.env.BROWSERLESS_IO_API_KEY}`);

    // For local execution
    // const browser = await chromium.launch({
    //   headless: true, // set to true for headless mode
    // });
    const browser = await chromium.connect(
      'wss://chrome.browserless.io/playwright?token=' +
        process.env.BROWSERLESS_IO_API_KEY,
    );
    const context = await browser.newContext({
      viewport: { width: 2400, height: 2000 },
    }); // Set custom viewport size if needed
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

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
    console.error(error);
    return;
  }
}
