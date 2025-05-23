import { Global, Module } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';
import { ScreenshotService } from './screenshot';

@Global()
@Module({
  providers: [PuppeteerService, ScreenshotService],
  exports: [PuppeteerService, ScreenshotService],
})
export class UtilsModule {}
