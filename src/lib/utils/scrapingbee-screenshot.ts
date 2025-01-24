import { ScrapingBeeClient } from 'scrapingbee';
import * as dotenv from 'dotenv';

dotenv.config();

export async function screenshotElement(
  url: string,
  selector: string,
  options?: {
    width?: number;
    height?: number;
    wait?: number;
  },
): Promise<Buffer | void> {
  console.log('Taking screenshot with ScrapingBee...', url, selector);

  try {
    if (!process.env.SCRAPINGBEE_API_KEY) {
      throw new Error('SCRAPINGBEE_API_KEY is not set');
    }

    const client = new ScrapingBeeClient(process.env.SCRAPINGBEE_API_KEY);

    // Set default options
    const width = options?.width ?? 2400;
    const height = options?.height ?? 2000;
    const wait = options?.wait ?? 3000;

    const requestOptions = {
      url: url,
      params: {
        screenshot: true,
        screenshot_selector: selector,
        window_height: Number(height),
        window_width: Number(width),
        wait: wait,
        wait_for: selector, // Wait for the selector to be present
      },
      headers: {
        'user-agent': 'ScrapingBee/1.0',
      },
    };

    const response = await client.get(requestOptions);

    if (response.data) {
      console.log('Screenshot taken');
      return Buffer.from(response.data);
    } else {
      console.log('Could not take screenshot');
    }
  } catch (error) {
    console.error('Screenshot error:', error);
  }
}
