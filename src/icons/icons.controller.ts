import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { IconsService } from './icons.service';
import { UsageLimit } from 'src/decorators/usage-limit.decorator';

@Controller('icons')
export class IconsController {
  constructor(private readonly iconsService: IconsService) {}

  @Get()
  @UsageLimit('iconsApi')
  async getIcons(@Query('q') query: string) {
    try {
      const data = await this.iconsService.getIcons(query);
      return data;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
