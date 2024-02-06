import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Design } from '@prisma/client';
import { Queue } from 'bull';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { screenshotElement } from 'src/lib/utils/screenshot';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DesignsService {
  constructor(
    private db: PrismaService,
    private readonly configService: ConfigService,
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
    const res = this.db.design.update({
      data,
      where,
    });

    if (generateThumbnail) {
      console.log('Generating thumbnail...');
      await this.designPhotoQueue.add('create-thumbnail', where.id);
    }

    return res;
  }

  async downloadDesign(id: string): Promise<Buffer | void> {
    const url = this.configService.get('BASE_APP_URL') + `/preview/${id}`;
    const selector = '#preview-canvas';

    const photo = await screenshotElement(url, selector);

    return photo;
  }

  async deleteDesign(where: Prisma.DesignWhereUniqueInput): Promise<Design> {
    return this.db.design.delete({
      where,
    });
  }
}
