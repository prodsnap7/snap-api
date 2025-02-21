import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/cloudinary.service';
import { CreateTemplateDto } from './templates.dto';
import { Template, Prisma } from '@prisma/client';

@Injectable()
export class TemplatesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(userId: string, data: CreateTemplateDto): Promise<Template> {
    return this.prisma.template.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async findAll(params: {
    tags?: string[];
    matchAll?: boolean;
    skip?: number;
    take?: number;
    searchTerm?: string;
  }): Promise<Template[]> {
    const { tags, matchAll, skip, take, searchTerm } = params;

    const where: Prisma.TemplateWhereInput = {
      ...(tags && {
        tags: matchAll ? { hasEvery: tags } : { hasSome: tags },
      }),
      ...(searchTerm && {
        name: { contains: searchTerm, mode: Prisma.QueryMode.insensitive },
      }),
    };

    return this.prisma.template.findMany({
      where,
      skip,
      take,
      orderBy: { useCount: 'desc' },
    });
  }

  async findOne(id: string): Promise<Template> {
    const template = await this.prisma.template.findUnique({
      where: { id },
    });

    if (!template) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }

    return template;
  }

  async delete(
    id: string,
    userId: string,
    isAdmin: boolean,
  ): Promise<Template> {
    const template = await this.findOne(id);

    if (!isAdmin && template.userId !== userId) {
      throw new BadRequestException('Not authorized to delete this template');
    }

    // Delete thumbnail from Cloudinary if exists
    if (template.thumbnail) {
      await this.cloudinaryService.deletePhoto(
        `prodsnap-templates/${template.id}`,
      );
    }

    return this.prisma.template.delete({
      where: { id },
    });
  }

  async createDesignFromTemplate(
    templateId: string,
    userId: string,
  ): Promise<{ id: string }> {
    const template = await this.findOne(templateId);

    // Create new design from template
    const design = await this.prisma.design.create({
      data: {
        name: template.name,
        userId,
        canvasWidth: template.canvasWidth,
        canvasHeight: template.canvasHeight,
        background: template.background,
        elements: template.elements,
        fonts: template.fonts,
        groups: template.groups,
        templateId: template.id,
      },
    });

    // Increment template usage count
    await this.prisma.template.update({
      where: { id: templateId },
      data: { useCount: { increment: 1 } },
    });

    return { id: design.id };
  }

  async findAllTemplates(): Promise<Template[]> {
    return this.prisma.template.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
