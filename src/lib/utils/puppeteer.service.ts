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

      if (this.browser) {
        try {
          // Check if browser is already connected
          if (this.browser.connected) {
            console.log('Browser already connected, reusing existing instance');
            return;
          }

          // If browser exists but isn't connected, close it properly
          console.log('Browser exists but disconnected, closing...');
          await this.browser.close().catch(() => {});
        } catch (e) {
          console.error('Error checking browser connection:', e.message);
        }
      }

      // Launch a new browser
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-features=site-per-process', // Helps with frame detachment issues
        ],
        // Auto-reconnect if disconnected
        handleSIGINT: true,
        handleSIGTERM: true,
        handleSIGHUP: true,
      });

      // Handle disconnection
      this.browser.on('disconnected', () => {
        console.log('Browser disconnected, will reinitialize on next request');
        this.pagePool = []; // Clear the page pool
      });

      console.log('Puppeteer browser initialized successfully');

      // Pre-warm the pool with a couple of pages
      await this.ensureMinimumPages(2);
    } catch (error) {
      console.error('Failed to initialize Puppeteer:', error);
      this.browser = null;
      throw error;
    }
  }

  private async ensureMinimumPages(count: number) {
    try {
      if (!this.browser || !this.browser.connected) {
        await this.initialize();
      }

      while (this.pagePool.length < count) {
        const page = await this.browser.newPage();

        // Configure page for better performance
        await page.setRequestInterception(true).catch(() => {});
        page.on('request', (request) => {
          // Block unnecessary resources to improve performance
          const resourceType = request.resourceType();
          if (['image', 'media', 'font'].includes(resourceType)) {
            request.continue();
          } else if (['stylesheet', 'script'].includes(resourceType)) {
            request.continue();
          } else {
            request.continue();
          }
        });

        this.pagePool.push(page);
      }
    } catch (e) {
      console.error('Error ensuring minimum pages:', e.message);
    }
  }

  async getPage(): Promise<Page> {
    try {
      if (!this.browser || !this.browser.connected) {
        await this.initialize();
      }

      // Check if we have available pages in the pool
      while (this.pagePool.length > 0) {
        const page = this.pagePool.pop();

        // Verify the page is still usable
        try {
          if (!page.isClosed()) {
            return page;
          } else {
            console.log('Found closed page in pool, discarding');
          }
        } catch (e) {
          console.log('Error checking page status, creating new page instead');
        }
      }

      // Create a new page if none available in pool
      console.log('No pages available in pool, creating new page');
      return this.browser.newPage();
    } catch (error) {
      console.error(
        'Error getting page, reinitializing browser:',
        error.message,
      );
      await this.initialize();
      return this.browser.newPage();
    }
  }

  async releasePage(page: Page) {
    try {
      // First check if the page is still connected
      if (!page.isClosed()) {
        if (this.pagePool.length < this.MAX_PAGES) {
          try {
            // Reset page state for reuse - but with proper error handling
            await page.goto('about:blank', { timeout: 5000 }).catch(() => {
              // If navigation fails, we'll close the page instead
              console.log(
                'Failed to reset page to about:blank, closing instead',
              );
              return page.close().catch(() => {
                /* ignore close errors */
              });
            });

            await page.setViewport({ width: 1280, height: 800 }).catch(() => {
              /* ignore viewport errors */
            });
            this.pagePool.push(page);
          } catch (e) {
            // If any other error occurs during reset, close the page
            console.error('Error resetting page, closing instead:', e.message);
            await page.close().catch(() => {
              /* ignore close errors */
            });
          }
        } else {
          // If we don't need the page for the pool, close it
          await page.close().catch(() => {
            /* ignore close errors */
          });
        }
      } else {
        console.log('Attempted to release an already closed page');
      }
    } catch (e) {
      // Last resort error handling
      console.error('Error in releasePage:', e.message);
      try {
        await page.close();
      } catch {
        // Ignore errors during forced close
      }
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}
