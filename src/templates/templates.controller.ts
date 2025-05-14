import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Req,
  Query,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './templates.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { TemplateDto } from './dto/template.dto';

@ApiTags('templates')
@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new template' })
  @ApiBody({ type: CreateTemplateDto })
  @ApiResponse({
    status: 201,
    description: 'The template has been successfully created.',
    type: TemplateDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  create(@Body() createTemplateDto: CreateTemplateDto, @Req() req) {
    return this.templatesService.create(
      createTemplateDto,
      req.user.userId,
    ) as any;
  }

  @Get()
  @ApiOperation({ summary: 'Get all templates for the authenticated user' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
    type: Number,
  })
  @ApiQuery({
    name: 'tags',
    required: false,
    description: 'Filter templates by tags (comma-separated)',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'List of templates.',
    type: [TemplateDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll(
    @Req() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('tags') tags?: string,
  ) {
    const tagArray = tags ? tags.split(',') : undefined;
    return this.templatesService.findAll(
      req.user.userId,
      +page,
      +limit,
      tagArray,
    ) as any;
  }

  @Get('search')
  @ApiOperation({
    summary: 'Search templates by name for the authenticated user',
  })
  @ApiQuery({
    name: 'query',
    required: true,
    description: 'Search query for template name',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Search results.',
    type: [TemplateDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  searchByName(
    @Req() req,
    @Query('query') query: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.templatesService.searchByName(
      req.user.userId,
      query,
      +page,
      +limit,
    ) as any;
  }

  @Get('public')
  @ApiOperation({ summary: 'Get all public templates' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
    type: Number,
  })
  @ApiQuery({
    name: 'tags',
    required: false,
    description: 'Filter templates by tags (comma-separated)',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'List of public templates.',
    type: [TemplateDto],
  })
  findAllPublic(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('tags') tags?: string,
  ) {
    const tagArray = tags ? tags.split(',') : undefined;
    return this.templatesService.findAllPublic(+page, +limit, tagArray) as any;
  }

  @Get('public/search')
  @ApiOperation({ summary: 'Search public templates by name' })
  @ApiQuery({
    name: 'query',
    required: true,
    description: 'Search query for template name',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Search results for public templates.',
    type: [TemplateDto],
  })
  searchPublicByName(
    @Query('query') query: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.templatesService.searchPublicByName(
      query,
      +page,
      +limit,
    ) as any;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific template by ID' })
  @ApiParam({ name: 'id', description: 'ID of the template to retrieve' })
  @ApiResponse({ status: 200, description: 'The template.', type: TemplateDto })
  @ApiResponse({ status: 404, description: 'Template not found.' })
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id) as any;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a template' })
  @ApiParam({ name: 'id', description: 'ID of the template to update' })
  @ApiBody({ type: UpdateTemplateDto })
  @ApiResponse({
    status: 200,
    description: 'The template has been successfully updated.',
    type: TemplateDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Template not found.' })
  update(
    @Param('id') id: string,
    @Body() updateTemplateDto: UpdateTemplateDto,
    @Req() req,
  ) {
    return this.templatesService.update(
      id,
      updateTemplateDto,
      req.user.userId,
    ) as any;
  }

  @Post(':id/increment-use-count')
  @ApiOperation({ summary: "Increment the template's use count" })
  @ApiParam({ name: 'id', description: 'ID of the template' })
  @ApiResponse({
    status: 200,
    description: 'Use count incremented successfully.',
    type: TemplateDto,
  })
  @ApiResponse({ status: 404, description: 'Template not found.' })
  async incrementUseCount(@Param('id') id: string) {
    return this.templatesService.incrementUseCount(id) as any;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a template' })
  @ApiParam({ name: 'id', description: 'ID of the template to delete' })
  @ApiResponse({
    status: 200,
    description: 'The template has been successfully deleted.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Template not found.' })
  remove(@Param('id') id: string, @Req() req) {
    return this.templatesService.remove(id, req.user.userId) as any;
  }
}
