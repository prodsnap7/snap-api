import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, uploads as UploadModel } from '@prisma/client';
import { ensureHttps } from 'src/lib/utils';

interface CreateUploadDto {
  url: string;
  userId: string;
  publicId: string;
  backgroundRemoved?: boolean;
}

@Injectable()
export class UploadsService {
  constructor(private readonly db: PrismaService) {}

  async create(createUploadDto: CreateUploadDto): Promise<UploadModel> {
    return this.db.uploads.create({
      data: {
        ...createUploadDto,
        updatedAt: new Date(),
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.uploadsWhereInput;
    orderBy?: Prisma.uploadsOrderByWithRelationInput;
  }): Promise<UploadModel[]> {
    const { skip, take, where, orderBy } = params;
    const uploads = await this.db.uploads.findMany({
      skip,
      take,
      where,
      orderBy,
    });

    // Transform all URLs to HTTPS
    return uploads.map((upload) => ({
      ...upload,
      url: ensureHttps(upload.url),
    }));
  }

  async findOne(where: Prisma.uploadsWhereUniqueInput): Promise<UploadModel> {
    return this.db.uploads.findUnique({
      where,
    });
  }

  async remove(id: number): Promise<UploadModel> {
    try {
      return await this.db.uploads.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Upload with ID ${id} not found`);
        }
      }
      throw error;
    }
  }

  async update(id: number, data: Partial<UploadModel>): Promise<UploadModel> {
    return this.db.uploads.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async findFirst(params: {
    where?: Prisma.uploadsWhereInput;
    orderBy?: Prisma.uploadsOrderByWithRelationInput;
  }): Promise<UploadModel | null> {
    const { where, orderBy } = params;
    return this.db.uploads.findFirst({
      where,
      orderBy,
    });
  }
}
