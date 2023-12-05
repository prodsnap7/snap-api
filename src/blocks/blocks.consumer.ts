import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { BLOCK_PHOTO_QUEUE } from 'src/constants';
import { screenshotElement } from 'src/lib/utils/screenshot';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/cloudinary.service';

@Injectable()
@Processor(BLOCK_PHOTO_QUEUE)
export class BlocksConsumer {
  constructor(private readonly db: PrismaService, private readonly cloudinaryService: CloudinaryService) {}
  @Process('create-photo')
  async createBlockPhoto(job: any) {
    console.log('Creating block photo...');
    const blockId = job.data;

    const url = `http://localhost:5173/blocks/${blockId}`;
    const selector = '#preview-canvas';

    const photo = await screenshotElement(url, selector);

    // upload the photo to cloudinary
    // then update the block with the photo URL
    if (photo) {
      console.log('Photo taken!');
      const upload = await this.cloudinaryService.uploadPhotoBuffer(photo, `prodsnap-blocks/${blockId}`);
      await this.db.block.update({
        where: { id: blockId },
        data: {
          url: upload.secure_url,
        },
      });
    } else {
      console.log('Photo failed!');
    }
  }
}
