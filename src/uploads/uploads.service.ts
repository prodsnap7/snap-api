import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Upload as UploadModel } from '@prisma/client';

interface CreateUploadDto {
  url: string;
  userId: string;
}

@Injectable()
export class UploadsService {
  constructor(private readonly db: PrismaService) {}

  async create(createUploadDto: CreateUploadDto): Promise<UploadModel> {
    return this.db.upload.create({
      data: createUploadDto,
    });
  }

  async findAll(): Promise<UploadModel[]> {
    return this.db.upload.findMany();
  }

  async findOne(id: number): Promise<UploadModel> {
    return this.db.upload.findUnique({
      where: { id },
    });
  }

  async remove(id: number): Promise<UploadModel> {
    return this.db.upload.delete({
      where: { id },
    });
  }

  async update(id: number, data: Partial<UploadModel>): Promise<UploadModel> {
    return this.db.upload.update({
      where: { id },
      data,
    });
  }
}
