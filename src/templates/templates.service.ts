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
        thumbnail: template.thumbnail,
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

  async createTemplateFromDesign(
    designId: string,
    userId: string,
  ): Promise<Template> {
    const design = await this.prisma.design.findUnique({
      where: { id: designId },
    });

    if (!design) {
      throw new NotFoundException(`Design with ID ${designId} not found`);
    }

    // Optionally, check if the user requesting owns the design, or if it's a public design
    // For now, assuming any user can create a template from any valid design ID
    // if (design.userId !== userId) {
    //   throw new BadRequestException('You can only create templates from your own designs.');
    // }

    const templateData = {
      name: `Template from ${design.name || 'Untitled Design'}`,
      userId: userId, // The user creating the template
      canvasWidth: design.canvasWidth,
      canvasHeight: design.canvasHeight,
      background: design.background,
      elements: design.elements || '', // Default to empty string if null
      fonts: design.fonts || [], // Default to empty array if null
      groups: design.groups || '', // Default to empty string if null
      thumbnail: design.thumbnail, // Decide if you want to copy or regenerate thumbnail
      tags: [], // Default to empty tags, or derive from design if applicable
      useCount: 0,
      // designId: design.id // Storing the source design ID might be useful for tracking
    };

    return this.prisma.template.create({
      data: templateData,
    });
  }
}
