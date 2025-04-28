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
import { FontsService, FontResponse } from './fonts.service';
import { FontSearchService } from './font-search.service';
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
  constructor(
    private readonly fontsService: FontsService,
    private readonly fontSearchService: FontSearchService,
  ) {}

  @Get()
  getAllFonts(@Query('page') page?: number) {
    const pageNumber = page ? parseInt(page.toString(), 10) : undefined;
    return this.fontsService.getAllFonts(pageNumber);
  }

  @Get('search')
  async searchFonts(
    @Query('query') searchQuery?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('filterByCategory') filterByCategory?: string,
  ): Promise<{
    fonts: FontResponse[];
    totalHits: number;
    totalPages: number;
    currentPage: number;
  }> {
    if (!searchQuery && !filterByCategory) {
      throw new BadRequestException(
        'At least one of query or filterByCategory parameter is required',
      );
    }
    const pageNumber = page ? parseInt(page, 10) : 1;
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    if (isNaN(pageNumber) || pageNumber < 1) {
      throw new BadRequestException('Invalid page number');
    }
    if (isNaN(limitNumber) || limitNumber < 1) {
      throw new BadRequestException('Invalid limit number');
    }

    const searchResult = await this.fontSearchService.searchFonts({
      searchQuery: searchQuery || '',
      page: pageNumber,
      limit: limitNumber,
      filterByCategory,
    });

    if (searchResult.ids.length === 0) {
      return {
        fonts: [],
        totalHits: searchResult.totalHits,
        totalPages: searchResult.totalPages,
        currentPage: searchResult.currentPage,
      };
    }

    const fontsFromDb = await this.fontsService.getFontsByIds(searchResult.ids);

    const orderedFonts = searchResult.ids
      .map((id) => fontsFromDb.find((font) => font.fontId === id))
      .filter((font) => font !== undefined) as FontResponse[];

    return {
      fonts: orderedFonts,
      totalHits: searchResult.totalHits,
      totalPages: searchResult.totalPages,
      currentPage: searchResult.currentPage,
    };
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
