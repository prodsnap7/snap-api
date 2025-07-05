import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import { IconsService } from './icons.service';
import { UsageLimit } from 'src/decorators/usage-limit.decorator';
import { UsageLimitGuard } from 'src/middleware/usage-limit.middleware';

@Controller('icons')
export class IconsController {
  constructor(private readonly iconsService: IconsService) {}

  @Get()
  @UseGuards(UsageLimitGuard)
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
