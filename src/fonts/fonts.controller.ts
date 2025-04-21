import { Controller, Get, Query, Res } from '@nestjs/common';
import { FontsService } from './fonts.service';
import { FastifyReply } from 'fastify';
import { Public } from 'src/lib/public-modifier';

@Controller('fonts')
export class FontsController {
  constructor(private readonly fontsService: FontsService) {}

  @Get()
  getAllFonts(@Query('page') page?: number) {
    const pageNumber = page ? parseInt(page.toString(), 10) : undefined;
    return this.fontsService.getAllFonts(pageNumber);
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
