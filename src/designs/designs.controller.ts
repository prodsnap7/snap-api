import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  BadRequestException,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { DesignsService } from './designs.service';
import { CreateDesignDTO } from './designs.dto';
import { Public } from 'src/lib/public-modifier';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiProduces,
} from '@nestjs/swagger';
import { DesignDto } from './dto/design.dto';

@ApiTags('Designs')
@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a design by its ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the design to retrieve',
    type: String,
  })
  @ApiOkResponse({ description: 'The design record.', type: DesignDto })
  @ApiResponse({ status: 404, description: 'Design not found.' })
  async getDesignById(@Param('id') id: string): Promise<DesignDto> {
    return this.designsService.design({ id }) as any;
  }

  @Get()
  @ApiOperation({ summary: 'Get all designs for the authenticated user' })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A list of designs for the user.',
    type: [DesignDto],
  })
  async getDesignsByUserId(@Req() req): Promise<DesignDto[]> {
    const { user } = req;
    const designs = await this.designsService.designs({
      where: { userId: user.user_id },
    });
    return designs as any[];
  }

  @Post()
  @ApiOperation({ summary: 'Create a new design' })
  @ApiBearerAuth()
  @ApiBody({
    description: 'Data for creating a new design',
    type: CreateDesignDTO,
  })
  @ApiCreatedResponse({
    description: 'The design has been successfully created.',
    type: DesignDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createDesign(
    @Req() req,
    @Body() createDesignDTO: CreateDesignDTO,
  ): Promise<DesignDto> {
    const { user } = req;
    const data = {
      ...createDesignDTO,
      userId: user.user_id,
    };
    return this.designsService.createDesign(data) as any;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing design' })
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'ID of the design to update',
    type: String,
  })
  @ApiQuery({
    name: 'generateThumbnail',
    description: 'Whether to regenerate thumbnail after update',
    type: Boolean,
    required: false,
  })
  @ApiBody({
    description: 'Data for updating the design',
    type: CreateDesignDTO,
  })
  @ApiOkResponse({
    description: 'The design has been successfully updated.',
    type: DesignDto,
  })
  @ApiResponse({ status: 404, description: 'Design not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async updateDesign(
    @Param('id') id: string,
    @Query('generateThumbnail') generateThumbnail: boolean = false,
    @Body() updateDesign: Partial<CreateDesignDTO>,
  ): Promise<DesignDto> {
    return this.designsService.updateDesign(
      {
        where: { id },
        data: updateDesign,
      },
      generateThumbnail,
    ) as any;
  }

  @Public()
  @Get(':id/download')
  @ApiOperation({ summary: 'Download a design as an image' })
  @ApiParam({
    name: 'id',
    description: 'ID of the design to download',
    type: String,
  })
  @ApiProduces('image/jpeg')
  @ApiOkResponse({ description: 'Design image data.' })
  @ApiResponse({
    status: 404,
    description: 'Design not found or unable to download.',
  })
  async downloadDesign(@Param('id') id: string, @Res() res: FastifyReply) {
    const imageBuffer = await this.designsService.downloadDesign(id);

    if (!imageBuffer) {
      res.status(404);
      res.send({ message: 'Unable to download design' });
      return;
    }
    res.header('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a design' })
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'ID of the design to delete',
    type: String,
  })
  @ApiOkResponse({
    description: 'Design successfully deleted.',
    schema: { example: { success: true } },
  })
  @ApiResponse({ status: 404, description: 'Design not found.' })
  @ApiResponse({
    status: 403,
    description: 'Not authorized to delete this design.',
  })
  async deleteDesign(@Param('id') id: string, @Req() req) {
    const { user } = req;
    const design = await this.designsService.design({ id });

    if (!design) {
      throw new BadRequestException('Design not found');
    }

    if (design.userId !== user.user_id) {
      throw new BadRequestException('Not authorized to delete this design');
    }

    try {
      await this.designsService.deleteDesign(id);
      return { success: true };
    } catch (error) {
      console.error('Error deleting design:', error);
      throw new BadRequestException('Failed to delete design');
    }
  }

  @Public()
  @Post('screenshot')
  @ApiOperation({ summary: 'Take a screenshot from a URL' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: { url: { type: 'string', example: 'https://example.com' } },
    },
  })
  @ApiProduces('image/jpeg')
  @ApiOkResponse({ description: 'Screenshot image data.' })
  @ApiResponse({ status: 400, description: 'Missing URL in request body.' })
  @ApiResponse({ status: 404, description: 'Unable to take screenshot.' })
  async screenshotFromUrl(@Body('url') url: string, @Res() res: FastifyReply) {
    if (!url) {
      res.status(400);
      res.send({ message: 'Missing url in request body' });
      return;
    }
    const imageBuffer = await this.designsService.screenshotFromUrl(url);
    if (!imageBuffer) {
      res.status(404);
      res.send({ message: 'Unable to take screenshot' });
      return;
    }
    res.header('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  }
}
