import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { IconsService } from './icons.service';

@Controller('icons')
export class IconsController {
  constructor(private readonly iconsService: IconsService) {}

  @Get()
  async getIcons(@Query('q') query: string) {
    try {
      const data = await this.iconsService.getIcons(query);
      return data;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
