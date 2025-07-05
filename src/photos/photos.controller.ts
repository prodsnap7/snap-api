import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { FastifyReply } from 'fastify';
import { Public } from 'src/lib/public-modifier';
import { UsageLimit } from 'src/decorators/usage-limit.decorator';
import { UsageLimitGuard } from 'src/middleware/usage-limit.middleware';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get('search')
  @UseGuards(UsageLimitGuard)
  @UsageLimit('photosApi')
  searchPhotos(@Query('q') query: string) {
    return this.photosService.searchPhotos(query);
  }

  @Public()
  @Get('proxy')
  async proxyPhoto(@Query('url') url: string, @Res() res: FastifyReply) {
    if (!url) {
      return res.status(400).send('URL is required');
    }

    // Validate URL is from Pexels
    if (!url.includes('images.pexels.com')) {
      return res.status(400).send('Invalid image source');
    }

    try {
      await this.photosService.streamPhoto(url, res);
    } catch (error) {
      res.status(500).send('Failed to process image');
    }
  }
}
