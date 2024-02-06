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
    //   browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_IO_API_KEY}&--window-size=2400,2000`,
    //   defaultViewport: null,
    // });
    const browser = await puppeteer.launch({
      headless: 'new',
      defaultViewport: null,
    });
    const page = await browser.newPage();
    page.setViewport({ width: 2400, height: 2000 });
    await page.goto(url, { waitUntil: 'networkidle0' });

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
