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
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO, CreateDesignFromTemplateDto } from './designs.dto';
import { Public } from 'src/lib/public-modifier';

@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Public()
  @Get(':id')
  async getDesignById(@Param('id') id: string): Promise<DesignModel> {
    return this.designsService.design({ id });
  }

  @Get()
  async getDesignsByUserId(@Req() req): Promise<DesignModel[]> {
    const { user } = req;
    return this.designsService.designs({ where: { userId: user.user_id } });
  }

  @Post()
  async createDesign(
    @Req() req,
    @Body() createDesignDTO: CreateDesignDTO,
  ): Promise<DesignModel> {
    const { user } = req;
    const data = {
      ...createDesignDTO,
      userId: user.user_id,
    };
    return this.designsService.createDesign(data);
  }

  @Put(':id')
  async updateDesign(
    @Param('id') id: string,
    @Query('generateThumbnail') generateThumbnail: boolean = false,
    @Body() updateDesign: Partial<CreateDesignDTO>,
  ): Promise<DesignModel> {
    return this.designsService.updateDesign(
      {
        where: { id },
        data: updateDesign,
      },
      generateThumbnail,
    );
  }

  @Public()
  @Get(':id/download')
  async downloadDesign(@Param('id') id: string, @Res() res: FastifyReply) {
    const imageBuffer = await this.designsService.downloadDesign(id);

    if (!imageBuffer) {
      res.status(404);
      res.send({ message: 'Unable to download design' });
      return;
    }
    res.header('Content-Type', 'image/jpeg');

    // Send the buffer as the response
    res.send(imageBuffer);
  }

  @Delete(':id')
  async deleteDesign(@Param('id') id: string, @Req() req) {
    const { user } = req;

    // Get the design to check ownership
    const design = await this.designsService.design({ id });

    if (!design) {
      throw new BadRequestException('Design not found');
    }

    if (design.userId !== user.user_id) {
      throw new BadRequestException('Not authorized to delete this design');
    }

    try {
      // Delete the design and its thumbnail
      await this.designsService.deleteDesign(id);
      return { success: true };
    } catch (error) {
      console.error('Error deleting design:', error);
      throw new BadRequestException('Failed to delete design');
    }
  }

  @Public()
  @Post('screenshot')
  async screenshotFromUrl(@Body('url') url: string, @Res() res: FastifyReply) {
    if (!url) {
      res.status(400);
      res.send({ message: 'Missing url in request body' });
      return;
    }
    // Pass the URL directly to the screenshot service
    const imageBuffer = await this.designsService.screenshotFromUrl(url);
    if (!imageBuffer) {
      res.status(404);
      res.send({ message: 'Unable to take screenshot' });
      return;
    }
    res.header('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  }

  @Post(':id/duplicate')
  async duplicateDesign(
    @Param('id') id: string,
    @Req() req,
  ): Promise<DesignModel> {
    const { user } = req;
    if (!user || !user.user_id) {
      throw new BadRequestException(
        'User information is missing from the request.',
      );
    }
    return this.designsService.duplicateDesign(id, user.user_id);
  }

  @Post('from-template')
  async createDesignFromTemplate(
    @Body() createDesignDto: CreateDesignFromTemplateDto,
    @Req() req,
  ): Promise<{ id: string }> {
    const { user } = req;
    if (!user || !user.user_id) {
      throw new BadRequestException(
        'User information is missing from the request.',
      );
    }
    return this.designsService.createDesignFromTemplate(
      createDesignDto.templateId,
      user.user_id,
    );
  }
}
