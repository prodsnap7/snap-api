import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Prisma, Design } from '@prisma/client';
import { Queue } from 'bull';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DesignsService {
  constructor(
    private db: PrismaService,
    @InjectQueue(DESIGN_PHOTO_QUEUE) private readonly designPhotoQueue: Queue,
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
    const { where, data } = params;
    if (generateThumbnail) {
      await this.designPhotoQueue.add('create-photo', where.id);
    }
    return this.db.design.update({
      data,
      where,
    });
  }

  async deleteDesign(where: Prisma.DesignWhereUniqueInput): Promise<Design> {
    return this.db.design.delete({
      where,
    });
  }
}
