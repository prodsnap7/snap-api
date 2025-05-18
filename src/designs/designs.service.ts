import { InjectQueue } from '@nestjs/bull';
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Design } from '@prisma/client';
import { Queue } from 'bull';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { ScreenshotService } from 'src/lib/utils/screenshot';
import { PrismaService } from 'src/prisma/prisma.service';
import { TemplatesService } from 'src/templates/templates.service';
import { CloudinaryService } from 'src/uploads/cloudinary.service';

@Injectable()
export class DesignsService {
  private readonly logger = new Logger(DesignsService.name);

  constructor(
    private db: PrismaService,
    private readonly configService: ConfigService,
    @InjectQueue(DESIGN_PHOTO_QUEUE) private readonly designPhotoQueue: Queue,
    private readonly cloudinaryService: CloudinaryService,
    private readonly screenshotService: ScreenshotService,
    private readonly templatesService: TemplatesService,
  ) {}

  async design(
    designWhereInput: Prisma.DesignWhereUniqueInput,
  ): Promise<Design | null> {
    return this.db.design.findUnique({
      where: designWhereInput,
    });
  }

  async designs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DesignWhereUniqueInput;
    where?: Prisma.DesignWhereInput;
  }): Promise<Design[]> {
    const { skip, take, cursor, where } = params;
    return this.db.design.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async createDesign(data: Prisma.DesignCreateInput): Promise<Design> {
    const res = await this.db.design.create({
      data,
    });

    return res;
  }

  async updateDesign(
    params: {
      where: Prisma.DesignWhereUniqueInput;
      data: Prisma.DesignUpdateInput;
    },
    generateThumbnail: boolean,
  ): Promise<Design> {
    const { where, data: updateData } = params;

    const dataToUpdate: Prisma.DesignUpdateInput = {
      ...updateData,
      ...(generateThumbnail && { thumbnail_pending: true }),
    };

    const updatedDesign = await this.db.design.update({
      data: dataToUpdate,
      where,
    });

    if (generateThumbnail) {
      this.logger.log(
        `Thumbnail regeneration requested for design ${where.id}. Adding to queue.`,
      );

      // Use jobId to ensure only one job exists in the queue for this design
      // If a new job with the same jobId is added, it will replace the old one
      await this.designPhotoQueue.add('create-thumbnail', where.id, {
        jobId: `create_thumbnail_${where.id}`,
        removeOnComplete: true,
        removeOnFail: 1000,
      });

      this.logger.log(`Job added to queue for design ${where.id}`);
    }

    return updatedDesign;
  }

  async downloadDesign(id: string): Promise<Buffer | void> {
    const url = this.configService.get('BASE_APP_URL') + `/preview/${id}`;
    const selector = '#preview-canvas';

    const photo = await this.screenshotService.screenshotElement(url, selector);

    return photo;
  }

  async deleteDesign(id: string): Promise<Design> {
    try {
      // Get the design first to get the thumbnail info
      const design = await this.db.design.findUnique({
        where: { id },
      });

      if (!design) {
        throw new NotFoundException(`Design with ID ${id} not found`);
      }

      // If there's a thumbnail, delete it from Cloudinary
      if (design.thumbnail) {
        // Extract public_id from the thumbnail URL
        const publicId = `prodsnap-designs/${id}`;
        await this.cloudinaryService.deletePhoto(publicId);
      }

      // Delete the design from the database
      return this.db.design.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Design with ID ${id} not found`);
        }
      }
      throw error;
    }
  }

  async screenshotFromUrl(url: string): Promise<Buffer | void> {
    const selector = '#preview-canvas';
    const photo = await this.screenshotService.screenshotElement(url, selector);
    return photo;
  }

  async duplicateDesign(
    originalDesignId: string,
    userId: string,
  ): Promise<Design> {
    const originalDesign = await this.db.design.findUniqueOrThrow({
      where: { id: originalDesignId },
    });

    // Destructure and ignore specific fields by prefixing them with an underscore
    const {
      id: _id,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
      userId: _originalUserId, // Renamed to avoid conflict with the userId parameter
      templateId: originalTemplateId, // Get the original templateId
      name,
      ...restOfDesign
    } = originalDesign;

    const newDesignData: Prisma.DesignCreateInput = {
      // Explicitly type for clarity
      ...restOfDesign,
      name: `Copy of ${name}`,
      userId: userId,
      // Thumbnail will be null initially, or you might want to trigger regeneration
      // If the original design was linked to a template, connect the new design to the same template.
      ...(originalTemplateId && {
        template: { connect: { id: originalTemplateId } },
      }),
    };

    return this.db.design.create({
      data: newDesignData,
    });
  }

  async createDesignFromTemplate(
    templateId: string,
    userId: string,
  ): Promise<{ id: string }> {
    return this.templatesService.createDesignFromTemplate(templateId, userId);
  }
}
