import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import puppeteer, { Browser, Page } from 'puppeteer';

@Injectable()
export class PuppeteerService implements OnModuleInit, OnModuleDestroy {
  private browser: Browser;
  private pagePool: Page[] = [];
  private readonly MAX_PAGES = 5; // Adjust based on memory limits

  async onModuleInit() {
    await this.initialize();
  }

  async onModuleDestroy() {
    await this.close();
  }

  private async initialize() {
    try {
      console.log('Initializing Puppeteer browser...');
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
        ],
      });
      console.log('Puppeteer browser initialized successfully');

      // Pre-warm the pool with a couple of pages
      await this.ensureMinimumPages(2);
    } catch (error) {
      console.error('Failed to initialize Puppeteer:', error);
      throw error;
    }
  }

  private async ensureMinimumPages(count: number) {
    while (this.pagePool.length < count) {
      const page = await this.browser.newPage();
      this.pagePool.push(page);
    }
  }

  async getPage(): Promise<Page> {
    if (!this.browser || !this.browser.connected) {
      await this.initialize();
    }

    if (this.pagePool.length > 0) {
      return this.pagePool.pop();
    }

    return this.browser.newPage();
  }

  async releasePage(page: Page) {
    if (this.pagePool.length < this.MAX_PAGES) {
      // Reset page state for reuse
      await page.goto('about:blank');
      await page.setViewport({ width: 1280, height: 800 });
      this.pagePool.push(page);
    } else {
      await page.close();
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}
