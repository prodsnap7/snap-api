import { Controller, Get, Query, Res } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { FastifyReply } from 'fastify';
import {
  ApiOkResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiProduces,
} from '@nestjs/swagger';
import { PhotoDto } from './dto/photo.dto';

@ApiTags('Photos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get('search')
  @ApiQuery({
    name: 'q',
    required: true,
    description: 'Search query for photos',
    type: String,
  })
  @ApiOkResponse({
    description: 'Successfully retrieved photos.',
    type: [PhotoDto],
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async searchPhotos(@Query('q') query: string): Promise<PhotoDto[]> {
    return this.photosService.searchPhotos(query);
  }

  @Get('proxy')
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'URL of the Pexels photo to proxy',
    type: String,
  })
  @ApiProduces('image/jpeg')
  @ApiOkResponse({ description: 'Successfully proxied photo.' })
  @ApiResponse({ status: 400, description: 'Invalid URL or image source.' })
  @ApiResponse({ status: 500, description: 'Failed to process image.' })
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
