import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { shortId, ensureHttps } from 'src/lib/utils';
import { UploadsService } from './uploads.service';
import { CloudinaryService } from './cloudinary.service';
import { ImageTransformService } from './image-transform.service';
import { User } from '@clerk/backend';
import { FastifyRequest } from 'fastify';

interface RequestWithClerkUser extends FastifyRequest {
  user: User;
}

@Controller('uploads')
export class UploadsController {
  constructor(
    private readonly uploadsService: UploadsService,
    private readonly imgTransformService: ImageTransformService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  async findAll(@Req() req: RequestWithClerkUser) {
    const { user } = req;
    return this.uploadsService.findAll({
      where: {
        userId: user.id,
      },
    });
  }

  @Get(':id')
  async findOne(id: string) {
    return this.uploadsService.findOne({ id: Number(id) });
  }

  @Post()
  async uploadPhoto(@Req() req: RequestWithClerkUser) {
    const data = await req.file();
    const { user } = req;
    const fileNameWithoutExt = data.filename.split('.')[0];
    const id = shortId();
    const userId = user.id;

    const public_id = `prodsnap-uploads/${userId}/${id}-${fileNameWithoutExt}`;

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
  async removeBackground(@Req() req: RequestWithClerkUser, @Body() data) {
    const { user } = req;
    const userId = user.id;
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
  async uploadScreenshot(@Req() req: RequestWithClerkUser) {
    const data = await req.file();
    const { user } = req;
    const designId = (req.query as { designId?: string }).designId;

    if (!designId) {
      throw new BadRequestException('Design ID is required');
    }

    const userId = user.id;
    const public_id = `prodsnap-screenshots/${userId}/${designId}-screenshot`;

    try {
      await this.cloudinaryService.deletePhoto(public_id);
      const { url } = await this.cloudinaryService.uploadPhotoFromStream(
        data.file,
        public_id,
      );
      return { url: ensureHttps(url) };
    } catch (error) {
      console.error('Error handling screenshot:', error);
      throw new BadRequestException('Failed to process screenshot');
    }
  }

  @Delete(':id')
  async deleteUpload(
    @Param('id') id: string,
    @Req() req: RequestWithClerkUser,
  ) {
    const { user } = req;
    const upload = await this.uploadsService.findOne({ id: Number(id) });

    if (!upload) {
      throw new BadRequestException('Upload not found');
    }

    if (upload.userId !== user.id) {
      throw new BadRequestException('Not authorized to delete this upload');
    }

    try {
      await this.cloudinaryService.deletePhoto(upload.publicId);
      await this.uploadsService.remove(Number(id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting upload:', error);
      throw new BadRequestException('Failed to delete upload');
    }
  }
}
