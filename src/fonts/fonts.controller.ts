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
import { FontSearchService } from './font-search.service';
import { FastifyReply } from 'fastify';
import { Public } from 'src/lib/public-modifier';
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiOkResponse,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiProduces,
} from '@nestjs/swagger';
import { FontDto, FontSearchResultDto } from './dto/font.dto';
import { GetFontsByIdsDto } from './dto/get-fonts-by-ids.dto';

@ApiTags('Fonts')
@Controller('fonts')
export class FontsController {
  constructor(
    private readonly fontsService: FontsService,
    private readonly fontSearchService: FontSearchService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all fonts (paginated)' })
  @ApiQuery({
    name: 'page',
    description: 'Page number for pagination',
    required: false,
    type: Number,
  })
  @ApiOkResponse({
    description: 'A paginated list of all fonts.',
    type: [FontDto],
  })
  getAllFonts(@Query('page') page?: number): Promise<FontDto[]> {
    const pageNumber = page ? parseInt(page.toString(), 10) : undefined;
    return this.fontsService.getAllFonts(pageNumber) as any;
  }

  @Get('search')
  @ApiOperation({ summary: 'Search for fonts' })
  @ApiQuery({
    name: 'query',
    description: 'Search query string',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'page',
    description: 'Page number for pagination',
    required: false,
    type: String,
    example: '1',
  })
  @ApiQuery({
    name: 'limit',
    description: 'Number of results per page',
    required: false,
    type: String,
    example: '10',
  })
  @ApiQuery({
    name: 'filterByCategory',
    description: 'Filter fonts by category',
    required: false,
    type: String,
  })
  @ApiOkResponse({
    description: 'Search results for fonts.',
    type: FontSearchResultDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid request parameters.' })
  async searchFonts(
    @Query('query') searchQuery?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('filterByCategory') filterByCategory?: string,
  ): Promise<FontSearchResultDto> {
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
    const fontMap = new Map(fontsFromDb.map((font) => [font.fontId, font]));
    const orderedFonts = searchResult.ids
      .map((id) => fontMap.get(id))
      .filter((font) => font !== undefined) as FontDto[];

    return {
      fonts: orderedFonts,
      totalHits: searchResult.totalHits,
      totalPages: searchResult.totalPages,
      currentPage: searchResult.currentPage,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific font by its ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the font to retrieve',
    type: Number,
  })
  @ApiOkResponse({ description: 'The font record.', type: FontDto })
  @ApiResponse({ status: 404, description: 'Font not found.' })
  getFontById(@Param('id', ParseIntPipe) id: number): Promise<FontDto> {
    return this.fontsService.getFontById(id) as any;
  }

  @Post('batch')
  @ApiOperation({ summary: 'Get multiple fonts by their IDs' })
  @ApiBody({ type: GetFontsByIdsDto })
  @ApiOkResponse({ description: 'A list of requested fonts.', type: [FontDto] })
  getFontsByIds(
    @Body() getFontsByIdsDto: GetFontsByIdsDto,
  ): Promise<FontDto[]> {
    return this.fontsService.getFontsByIds(getFontsByIdsDto.ids) as any;
  }

  @Public()
  @Get('proxy')
  @ApiOperation({ summary: 'Proxy a font file from Google Fonts' })
  @ApiQuery({
    name: 'url',
    description: 'URL of the Google Font CSS file to proxy',
    required: true,
    type: String,
  })
  @ApiProduces('text/css')
  @ApiOkResponse({ description: 'Proxied font data.' })
  @ApiResponse({ status: 400, description: 'Invalid URL or font source.' })
  @ApiResponse({ status: 500, description: 'Failed to proxy font.' })
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
