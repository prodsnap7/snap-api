import { Process, Processor } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { ScreenshotService } from 'src/lib/utils/screenshot';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageKitService } from 'src/uploads/imagekit.service';

@Injectable()
@Processor(DESIGN_PHOTO_QUEUE)
export class DesignsConsumer {
  private readonly logger = new Logger(DesignsConsumer.name);

  constructor(
    private readonly db: PrismaService,
    private readonly imageKitService: ImageKitService,
    private readonly configService: ConfigService,
    private readonly screenshotService: ScreenshotService,
  ) { }

  @Process('create-thumbnail')
  async createDesignPhoto(job: any) {
    const designId = job.data;
    this.logger.log(`Processing thumbnail for design ID: ${designId}`);

    try {
      const url =
        this.configService.get('BASE_APP_URL') + `/preview/${designId}`;
      const selector = '#preview-canvas';

      const photo = await this.screenshotService.screenshotElement(
        url,
        selector,
      );

      if (photo) {
        this.logger.log(`Photo taken for design ${designId}, uploading...`);
        const upload = await this.imageKitService.uploadPhotoBuffer(
          photo,
          `prodsnap-designs/${designId}-${Date.now()}`,
        );

        // Use ImageKit URL directly
        const uploadUrl = upload.url;

        await this.db.design.update({
          where: { id: designId },
          data: {
            thumbnail: uploadUrl,
            thumbnail_pending: false,
          },
        });
        this.logger.log(
          `Successfully updated thumbnail for design ${designId}.`,
        );
      } else {
        this.logger.warn(
          `Photo generation failed for design ${designId}. Thumbnail not updated.`,
        );
      }
    } catch (error) {
      this.logger.error(
        `Error processing thumbnail for design ${designId}: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }
}
