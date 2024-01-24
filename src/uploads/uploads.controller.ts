import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { shortId } from 'src/lib/utils';
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
  async findAll() {
    return this.uploadsService.findAll();
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
  async removeBackground(@Body() data) {
    // if the upload doesn't exist, create it
    const photo = await this.imgTransformService.removeBackground(data.url);

    return photo;
  }
}
