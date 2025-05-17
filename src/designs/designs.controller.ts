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
import { FastifyReply, FastifyRequest } from 'fastify';
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO, CreateDesignFromTemplateDto } from './designs.dto';
import { Public } from 'src/lib/public-modifier';
import { User } from '@clerk/backend';
import { Admin } from 'src/decorators/admin.decorator';

interface RequestWithClerkUser extends FastifyRequest {
  user: User;
}

@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Public()
  @Get(':id')
  async getDesignById(@Param('id') id: string): Promise<DesignModel> {
    return this.designsService.design({ id });
  }

  @Get()
  async getDesignsByUserId(
    @Req() req: RequestWithClerkUser,
  ): Promise<DesignModel[]> {
    const { user } = req;
    console.log('User from getDesignsByUserId:', user);
    return this.designsService.designs({ where: { userId: user.id } });
  }

  @Admin()
  @Get('all')
  async getAllDesigns(): Promise<DesignModel[]> {
    return this.designsService.designs({});
  }

  @Post()
  async createDesign(
    @Req() req: RequestWithClerkUser,
    @Body() createDesignDTO: CreateDesignDTO,
  ): Promise<DesignModel> {
    const { user } = req;
    const data = {
      ...createDesignDTO,
      userId: user.id,
    };
    return this.designsService.createDesign(data);
  }

  @Put(':id')
  async updateDesign(
    @Param('id') id: string,
    @Query('generateThumbnail') generateThumbnail: string,
    @Body() updateDesign: Partial<CreateDesignDTO>,
  ): Promise<DesignModel> {
    const shouldGenerateThumbnail = generateThumbnail === 'true';
    return this.designsService.updateDesign(
      {
        where: { id },
        data: updateDesign,
      },
      shouldGenerateThumbnail,
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
  async deleteDesign(
    @Param('id') id: string,
    @Req() req: RequestWithClerkUser,
  ) {
    const { user } = req;

    // Get the design to check ownership
    const design = await this.designsService.design({ id });

    if (!design) {
      throw new BadRequestException('Design not found');
    }

    if (design.userId !== user.id) {
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
    @Req() req: RequestWithClerkUser,
  ): Promise<DesignModel> {
    const { user } = req;
    if (!user || !user.id) {
      throw new BadRequestException(
        'User information is missing from the request.',
      );
    }
    return this.designsService.duplicateDesign(id, user.id);
  }

  @Post('from-template')
  async createDesignFromTemplate(
    @Body() createDesignDto: CreateDesignFromTemplateDto,
    @Req() req: RequestWithClerkUser,
  ): Promise<{ id: string }> {
    const { user } = req;
    if (!user || !user.id) {
      throw new BadRequestException(
        'User information is missing from the request.',
      );
    }
    return this.designsService.createDesignFromTemplate(
      createDesignDto.templateId,
      user.id,
    );
  }
}
