import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { screenshotElement } from 'src/lib/utils/screenshot2';
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

  @Process('create-thumbnail')
  async createDesignPhoto(job: any) {
    console.log('Creating design photo...');
    const designId = job.data;

    const url = this.configService.get('BASE_APP_URL') + `/preview/${designId}`;
    const selector = '#preview-canvas';

    const photo = await screenshotElement(url, selector);

    // upload the photo to cloudinary
    // then update the design with the photo URL
    if (photo) {
      console.log('Photo taken!');
      const upload = await this.cloudinaryService.uploadPhotoBuffer(
        photo,
        `prodsnap-designs/${designId}-${Date.now()}`,
      );
      const uploadUrl = `http://res.cloudinary.com/nexttrack1791/image/upload/w_500/v${upload.version}/${upload.public_id}.${upload.format}`;
      console.log('Upload', uploadUrl);
      await this.db.design.update({
        where: { id: designId },
        data: {
          thumbnail: uploadUrl,
        },
      });
    } else {
      console.log('Photo failed!');
    }
  }
}
