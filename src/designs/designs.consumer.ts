import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { screenshotElement } from 'src/lib/utils/screenshot';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/cloudinary.service';

@Injectable()
@Processor(DESIGN_PHOTO_QUEUE)
export class DesignsConsumer {
  constructor(
    private readonly db: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly configService: ConfigService,
  ) {}

  @Process('create-photo')
  async createDesignPhoto(job: any) {
    console.log('Creating design photo...');
    const designId = job.data;

    const url = this.configService.get('BASE_APP_URL') + `/designs/${designId}`;
    const selector = '#canvas';

    const photo = await screenshotElement(url, selector);

    // upload the photo to cloudinary
    // then update the design with the photo URL
    if (photo) {
      console.log('Photo taken!');
      const upload = await this.cloudinaryService.uploadPhotoBuffer(
        photo,
        `prodsnap-designs/${designId}-${Date.now()}}`,
      );
      await this.db.design.update({
        where: { id: designId },
        data: {
          thumbnail: upload.url,
        },
      });
    } else {
      console.log('Photo failed!');
    }
  }
}
