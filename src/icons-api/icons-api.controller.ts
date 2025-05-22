import { Controller, Get, Query, Param, Logger } from '@nestjs/common';
import { IconsApiService } from './icons-api.service';
import { Public } from '../lib/public-modifier';

@Controller('icons-api')
export class IconsApiController {
  private readonly logger = new Logger(IconsApiController.name);

  constructor(private readonly iconsApiService: IconsApiService) {}

  @Public() // Make this endpoint public (no authentication required)
  @Get('search')
  async searchIcons(
    @Query('q') query = '',
    @Query('page') pageStr = '1',
    @Query('color') color?: string,
    @Query('shape') shape?: string,
  ) {
    try {
      const page = Number(pageStr);
      this.logger.log(
        `Searching icons with query: "${query}", page: ${page}, color: ${color}, shape: ${shape}`,
      );

      const icons = await this.iconsApiService.searchIcons(
        query,
        page,
        color,
        shape,
      );

      return icons;
    } catch (error) {
      this.logger.error(`Error in icon search endpoint: ${error.message}`);
      throw error;
    }
  }

  @Public() // Make this endpoint public (no authentication required)
  @Get('download/:id')
  async downloadIcon(@Param('id') id: string) {
    try {
      this.logger.log(`Downloading icon with ID: ${id}`);

      const iconData = await this.iconsApiService.downloadIcon(id);

      return iconData;
    } catch (error) {
      this.logger.error(`Error in icon download endpoint: ${error.message}`);
      throw error;
    }
  }
}
