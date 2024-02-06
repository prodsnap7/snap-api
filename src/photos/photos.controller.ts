import { Controller, Get, Query } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get('search')
  searchPhotos(@Query('q') query: string) {
    return this.photosService.searchPhotos(query);
  }
}
