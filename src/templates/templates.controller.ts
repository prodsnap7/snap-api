import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import {
  CreateTemplateDto,
  CreateTemplateFromDesignDto,
} from './templates.dto';
import { Public } from 'src/lib/public-modifier';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  async createTemplate(@Req() req, @Body() data: CreateTemplateDto) {
    const { user } = req;
    return this.templatesService.create(user.user_id, data);
  }

  // @Public()
  // @Get()
  // async findAll(
  //   @Query('tags') tags?: string,
  //   @Query('matchAll') matchAll?: boolean,
  //   @Query('page') page?: number,
  //   @Query('search') search?: string,
  // ) {
  //   return this.templatesService.findAll({
  //     tags: tags?.split(','),
  //     matchAll,
  //     skip: page ? (page - 1) * 20 : 0,
  //     take: 20,
  //     searchTerm: search,
  //   });
  // }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Req() req) {
    const { user } = req;
    return this.templatesService.delete(id, user.user_id, user.isAdmin);
  }

  @Public()
  @Get()
  async findAllTemplates() {
    return this.templatesService.findAllTemplates();
  }

  @Post('/from-design')
  async createTemplateFromDesign(
    @Body() createTemplateDto: CreateTemplateFromDesignDto,
    @Req() req,
  ) {
    const { user } = req;
    if (!user || !user.user_id) {
      throw new BadRequestException('User not found in request');
    }
    return this.templatesService.createTemplateFromDesign(
      createTemplateDto.designId,
      user.user_id,
    );
  }
}
