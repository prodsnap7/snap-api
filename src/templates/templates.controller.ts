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
import { User } from '@clerk/backend';
import { FastifyRequest } from 'fastify';

interface RequestWithClerkUser extends FastifyRequest {
  user: User;
}

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  async createTemplate(
    @Req() req: RequestWithClerkUser,
    @Body() data: CreateTemplateDto,
  ) {
    const { user } = req;
    return this.templatesService.create(user.id, data);
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
  async delete(@Param('id') id: string, @Req() req: RequestWithClerkUser) {
    const { user } = req;
    const isAdmin =
      (user.publicMetadata as { isAdmin?: boolean })?.isAdmin || false;
    return this.templatesService.delete(id, user.id, isAdmin);
  }

  @Public()
  @Get()
  async findAllTemplates() {
    return this.templatesService.findAllTemplates();
  }

  @Post('/from-design')
  async createTemplateFromDesign(
    @Body() createTemplateDto: CreateTemplateFromDesignDto,
    @Req() req: RequestWithClerkUser,
  ) {
    const { user } = req;
    if (!user || !user.id) {
      throw new BadRequestException('User not found in request');
    }
    return this.templatesService.createTemplateFromDesign(
      createTemplateDto.designId,
      user.id,
    );
  }
}
