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
  Logger,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO, CreateDesignFromTemplateDto } from './designs.dto';
import { Public } from 'src/lib/public-modifier';
import { User } from '@clerk/backend';
import { Admin } from 'src/decorators/admin.decorator';
import { Prisma } from '@prisma/client';
import { CloudinaryService } from 'src/uploads/cloudinary.service';
import { ConfigService } from '@nestjs/config';

interface RequestWithClerkUser extends FastifyRequest {
  user: User;
}

@Controller('designs')
export class DesignsController {
  private readonly logger = new Logger(DesignsController.name);

  constructor(
    private readonly designsService: DesignsService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly configService: ConfigService,
  ) { }

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
    return this.designsService.designs({ where: { userId: user.id } });
  }

  @Admin()
  @Get('all')
  async getAllDesigns(
    @Query('userId') userId?: string,
  ): Promise<DesignModel[]> {
    const params: {
      where?: Prisma.DesignWhereInput;
    } = {};

    if (userId) {
      params.where = { userId };
    }

    return this.designsService.designs(params);
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

  @Put(':id/photo')
  async updatePhotoForDesign(
    @Param('id') id: string,
    @Res() res: FastifyReply,
  ): Promise<void> {
    try {
      const imageBuffer = await this.designsService.downloadDesign(id);

      if (!imageBuffer) {
        res
          .status(404)
          .send({ message: 'Unable to download design for photo generation' });
        return;
      }

      const uniquePublicId = `prodsnap-designs/design_${id}_thumbnail_${Date.now()}`;
      const uploadResult = await this.cloudinaryService.uploadPhotoBuffer(
        imageBuffer,
        uniquePublicId,
      );

      const thumbnailUrl = `https://res.cloudinary.com/${this.configService.get(
        'CLOUDINARY_CLOUD_NAME',
      )}/image/upload/w_500/v${uploadResult.version}/${uploadResult.public_id}.${uploadResult.format}`;

      if (!uploadResult || !uploadResult.public_id) {
        this.logger.error(
          `Cloudinary upload failed or returned invalid data for design ${id}.`,
        );
        res
          .status(500)
          .send({ message: 'Failed to upload photo to Cloudinary' });
        return;
      }

      const updatedDesign = await this.designsService.updateDesignThumbnail(
        id,
        thumbnailUrl,
      );

      res.status(200).send(updatedDesign);
    } catch (error) {
      this.logger.error(
        `Error in updatePhotoForDesign for ID ${id}: ${error.message}`,
        error.stack,
      );
      if (!res.sent) {
        res.status(500).send({
          message: 'An error occurred while updating the design photo.',
        });
      }
    }
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
