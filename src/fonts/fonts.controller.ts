import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Res,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { FontsService } from './fonts.service';
import { FastifyReply } from 'fastify';
import { Public } from 'src/lib/public-modifier';
import { IsArray, IsInt, ArrayNotEmpty } from 'class-validator';

class GetFontsByIdsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  ids: number[];
}

@Controller('fonts')
export class FontsController {
  constructor(private readonly fontsService: FontsService) {}

  @Get()
  getAllFonts(@Query('page') page?: number) {
    const pageNumber = page ? parseInt(page.toString(), 10) : undefined;
    return this.fontsService.getAllFonts(pageNumber);
  }

  @Get('search')
  searchFonts(
    @Query('searchQuery') searchQuery?: string,
    @Query('page') page?: string,
  ) {
    if (!searchQuery) {
      throw new BadRequestException('searchQuery parameter is required');
    }
    const pageNumber = page ? parseInt(page, 10) : undefined;
    if (page && isNaN(pageNumber)) {
      throw new BadRequestException('Invalid page number');
    }

    return this.fontsService.searchFonts({
      searchQuery,
      page: pageNumber,
    });
  }

  @Get(':id')
  getFontById(@Param('id', ParseIntPipe) id: number) {
    return this.fontsService.getFontById(id);
  }

  @Post('batch')
  getFontsByIds(@Body() getFontsByIdsDto: GetFontsByIdsDto) {
    return this.fontsService.getFontsByIds(getFontsByIdsDto.ids);
  }

  @Public()
  @Get('proxy')
  async proxyFont(@Query('url') url: string, @Res() res: FastifyReply) {
    if (!url) {
      return res.status(400).send('URL query parameter is required');
    }

    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname !== 'fonts.gstatic.com') {
        return res.status(400).send('Invalid font source domain');
      }
    } catch (e) {
      return res.status(400).send('Invalid URL format');
    }

    try {
      await this.fontsService.proxyFont(url, res);
    } catch (error) {
      console.error('Error in font proxy controller:', error);
      if (!res.sent) {
        res.status(500).send('Failed to proxy font');
      }
    }
  }
}
