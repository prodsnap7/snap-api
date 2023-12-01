import { Controller, Get, Param } from '@nestjs/common';
import { FontsService } from './fonts.service';

@Controller('fonts')
export class FontsController {
  constructor(private readonly fontsService: FontsService) {}

  @Get()
  findAll(@Param('page') page: number) {
    return this.fontsService.getAllFonts(Number(page));
  }
}
