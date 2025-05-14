import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { IconsService } from './icons.service';
import { ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IconDto } from './dto/icon.dto';

@ApiTags('Icons')
@Controller('icons')
export class IconsController {
  constructor(private readonly iconsService: IconsService) {}

  @Get()
  @ApiQuery({
    name: 'q',
    required: true,
    description: 'Search query for icons',
    type: String,
  })
  @ApiOkResponse({
    description: 'Successfully retrieved icons.',
    type: [IconDto],
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getIcons(@Query('q') query: string): Promise<IconDto[]> {
    try {
      const data = await this.iconsService.getIcons(query);
      return data;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
