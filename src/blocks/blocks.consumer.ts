import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BLOCK_PHOTO_QUEUE } from 'src/constants';
import { ScreenshotService } from 'src/lib/utils/screenshot';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/cloudinary.service';

@Injectable()
@Processor(BLOCK_PHOTO_QUEUE)
export class BlocksConsumer {
  constructor(
    private readonly db: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly configService: ConfigService,
    private readonly screenshotService: ScreenshotService,
  ) {}
  @Process('create-photo')
  async createBlockPhoto(job: any) {
    console.log('Creating block photo...');
    const blockId = job.data;

    const url = this.configService.get('BASE_APP_URL') + `/blocks/${blockId}`;
    const selector = '#preview-canvas';

    const photo = await this.screenshotService.screenshotElement(url, selector);

    // upload the photo to cloudinary
    // then update the block with the photo URL
    if (photo) {
      console.log('Photo taken!');
      const upload = await this.cloudinaryService.uploadPhotoBuffer(
        photo,
        `prodsnap-blocks/${blockId}-${Date.now()}}`,
      );
      await this.db.block.update({
        where: { id: blockId },
        data: {
          url: upload.url,
        },
      });
    } else {
      console.log('Photo failed!');
    }
  }
}
