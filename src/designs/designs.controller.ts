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
  UseGuards,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO, CreateDesignFromTemplateDto } from './designs.dto';
import { Public } from 'src/lib/public-modifier';
import { User } from '@clerk/backend';
import { Admin } from 'src/decorators/admin.decorator';
import { UsageLimit } from 'src/decorators/usage-limit.decorator';
import { UsageLimitGuard } from 'src/middleware/usage-limit.middleware';
import { Prisma } from '@prisma/client';
import { ImageKitService } from 'src/uploads/imagekit.service';
import { ConfigService } from '@nestjs/config';

interface RequestWithClerkUser extends FastifyRequest {
  user: User;
}

@Controller('designs')
export class DesignsController {
  private readonly logger = new Logger(DesignsController.name);

  constructor(
    private readonly designsService: DesignsService,
    private readonly imageKitService: ImageKitService,
    private readonly configService: ConfigService,
  ) {}

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
  @UseGuards(UsageLimitGuard)
  @UsageLimit('designs')
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
      // Get current design to check for existing thumbnail
      const currentDesign = await this.designsService.design({ id });

      if (!currentDesign) {
        res.status(404).send({ message: 'Design not found' });
        return;
      }

      // If there's an existing thumbnail, try to delete it from ImageKit
      if (currentDesign.thumbnail) {
        try {
          // Check if it's an ImageKit URL (not a legacy Cloudinary URL)
          if (currentDesign.thumbnail.includes('imagekit.io')) {
            this.logger.log(
              `Attempting to delete previous thumbnail for design ${id}`,
            );

            // Extract the file path from the ImageKit URL
            const imageKitUrlPattern = /imagekit\.io\/[^\/]+\/(.+)/;
            const match = currentDesign.thumbnail.match(imageKitUrlPattern);

            if (match) {
              const filePath = match[1];
              // Remove any query parameters and get just the path
              const cleanPath = filePath.split('?')[0];

              // Delete the previous thumbnail using the new method
              const deleteSuccess =
                await this.imageKitService.deletePhotoByPath(cleanPath);

              if (deleteSuccess) {
                this.logger.log(
                  `Successfully deleted previous thumbnail: ${cleanPath}`,
                );
              } else {
                this.logger.warn(
                  `Could not delete previous thumbnail: ${cleanPath}`,
                );
              }
            }
          }
        } catch (deleteError) {
          // Log the error but continue with upload - don't let deletion failure stop new upload
          this.logger.warn(
            `Failed to delete previous thumbnail for design ${id}: ${deleteError.message}`,
          );
        }
      }

      const imageBuffer = await this.designsService.downloadDesign(id);

      if (!imageBuffer) {
        res
          .status(404)
          .send({ message: 'Unable to download design for photo generation' });
        return;
      }

      const uniquePublicId = `designs/design_${id}_thumbnail_${Date.now()}`;

      console.log('🚀 About to call imageKitService.uploadPhotoBuffer with:', {
        serviceConstructor: this.imageKitService.constructor.name,
        publicId: uniquePublicId,
        bufferSize: imageBuffer.length,
      });

      const uploadResult = await this.imageKitService.uploadPhotoBuffer(
        imageBuffer,
        uniquePublicId,
      );

      console.log('📸 Upload result from service:', {
        url: uploadResult?.url,
        fileId: uploadResult?.fileId,
        publicId: uploadResult?.public_id, // Check if Cloudinary property exists
        resultKeys: Object.keys(uploadResult || {}),
      });

      // ImageKit returns the direct URL in the upload response
      const thumbnailUrl = uploadResult.url;

      if (!uploadResult || !uploadResult.fileId) {
        this.logger.error(
          `ImageKit upload failed or returned invalid data for design ${id}.`,
        );
        res.status(500).send({ message: 'Failed to upload photo to ImageKit' });
        return;
      }

      await this.designsService.updateDesignThumbnail(id, thumbnailUrl);

      res.status(200).send({
        message: 'Photo uploaded and design updated successfully',
        thumbnailUrl,
      });
    } catch (error) {
      this.logger.error(
        `Error updating photo for design ${id}: ${error.message}`,
      );
      res.status(500).send({ message: 'Internal server error' });
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

    if (design.userId !== user.id || user.publicMetadata.role !== 'admin') {
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
  @UseGuards(UsageLimitGuard)
  @UsageLimit('designs')
  async duplicateDesign(
    @Param('id') id: string,
    @Req() req: RequestWithClerkUser,
  ): Promise<DesignModel> {
    const { user } = req;
    return this.designsService.duplicateDesign(id, user.id);
  }

  @Post('from-template')
  @UseGuards(UsageLimitGuard)
  @UsageLimit('designs')
  async createDesignFromTemplate(
    @Body() createDesignDto: CreateDesignFromTemplateDto,
    @Req() req: RequestWithClerkUser,
  ): Promise<{ id: string }> {
    const { user } = req;
    const design = await this.designsService.createDesignFromTemplate(
      createDesignDto.templateId,
      user.id,
    );
    return { id: design.id };
  }
}
