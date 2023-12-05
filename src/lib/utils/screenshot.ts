import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';

dotenv.config();

export async function screenshotElement(
  url: string,
  selector: string,
): Promise<Buffer | void> {
  console.log("Taking screenshot...");
  try {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_IO_API_KEY}`,
  });
  // const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  // const element = await page.waitForSelector(selector);
  const element = await page.$(selector);
  if (!element) {
    throw new Error("Could not find element");
  }

  const screenshotBuffer = await element.screenshot();
  if (screenshotBuffer) {
    console.log("Screenshot taken");
    return screenshotBuffer;
  } else {
    console.log("Could not take screenshot");
  }

  await browser.close();
  } catch (error) {
    console.log(error);
  }

}
