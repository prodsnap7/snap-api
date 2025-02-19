import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { shortId, ensureHttps } from 'src/lib/utils';
import { UploadsService } from './uploads.service';
import { CloudinaryService } from './cloudinary.service';
import { ImageTransformService } from './image-transform.service';

@Controller('uploads')
export class UploadsController {
  constructor(
    private readonly uploadsService: UploadsService,
    private readonly imgTransformService: ImageTransformService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  async findAll(@Req() req) {
    const { user } = req;
    return this.uploadsService.findAll({
      where: {
        userId: user.user_id,
      },
    });
  }

  @Get(':id')
  async findOne(id: string) {
    return this.uploadsService.findOne({ id: Number(id) });
  }

  @Post()
  async uploadPhoto(@Req() req) {
    const data = await req.file();
    const { user } = req;
    const fileNameWithoutExt = data.filename.split('.')[0];
    const id = shortId();
    const userId = user.user_id;

    const public_id = `prodsnap-uploads/${userId}/${id}-${fileNameWithoutExt}`;

    // const { url } = await streamUpload(fastify, data.file, public_id);
    const { url } = await this.cloudinaryService.uploadPhotoFromStream(
      data.file,
      public_id,
    );

    await this.uploadsService.create({
      url,
      userId,
      publicId: public_id,
    });

    return { url };
  }

  @Post('remove-bg')
  async removeBackground(@Req() req, @Body() data) {
    const { user } = req;
    const userId = user.user_id;
    // const existingUpload = await this.uploadsService.findOne({
    //   userId,
    //   url: data.url,
    // });

    // if (existingUpload.backgroundRemoved) {
    //   return existingUpload;
    // }

    // if the upload doesn't exist, create it
    const photo = await this.imgTransformService.removeBackground(data.url);
    const filename = shortId();
    const public_id = `prodsnap-uploads/${userId}/` + filename;

    const upload = await this.cloudinaryService.uploadPhotoFromUrl(
      photo,
      public_id,
    );
    const res = await this.uploadsService.create({
      url: upload.url,
      userId,
      publicId: upload.public_id,
      backgroundRemoved: true,
    });

    return res;
  }

  @Post('screenshot')
  async uploadScreenshot(@Req() req) {
    const data = await req.file();
    const { user } = req;
    const designId = req.query.designId; // Get designId from query params

    if (!designId) {
      throw new BadRequestException('Design ID is required');
    }

    const userId = user.user_id;

    // Check for existing screenshot by looking at the publicId pattern
    const existingScreenshot = await this.uploadsService.findFirst({
      where: {
        userId,
        publicId: { contains: `prodsnap-screenshots/${userId}/${designId}` },
      },
    });

    const fileNameWithoutExt = data.filename.split('.')[0];
    const id = existingScreenshot
      ? existingScreenshot.publicId.split('/').pop().split('-')[0]
      : shortId();
    const public_id = `prodsnap-screenshots/${userId}/${designId}/${id}-${fileNameWithoutExt}`;

    const { url } = await this.cloudinaryService.uploadPhotoFromStream(
      data.file,
      public_id,
    );

    if (existingScreenshot) {
      // Update existing screenshot
      const updated = await this.uploadsService.update(existingScreenshot.id, {
        url: ensureHttps(url),
        publicId: public_id,
        updatedAt: new Date(),
      });
      return { url: ensureHttps(updated.url) };
    }

    // Create new screenshot
    await this.uploadsService.create({
      url: ensureHttps(url),
      userId,
      publicId: public_id,
      backgroundRemoved: false,
    });

    return { url: ensureHttps(url) };
  }
}
