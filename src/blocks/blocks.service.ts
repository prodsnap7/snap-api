import { Injectable, Logger } from '@nestjs/common';
import { UpdateBlockDto } from './dto/update-block.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlockCategoryModel, BlockModel } from './entities/block.entity';
import { Prisma } from '@prisma/client';
import { InjectQueue } from '@nestjs/bull';
import { BLOCK_PHOTO_QUEUE } from 'src/constants';
import { Queue } from 'bull';

@Injectable()
export class BlocksService {
  private readonly logger = new Logger(BlocksService.name);

  constructor(
    private readonly db: PrismaService,
    @InjectQueue(BLOCK_PHOTO_QUEUE) private readonly blockPhotoQueue: Queue,
  ) {}

  async create(data: Prisma.BlockCreateInput): Promise<BlockModel> {
    const block = await this.db.block.create({
      data,
    });

    await this.blockPhotoQueue.add('create-photo', block.id, {
      jobId: `create_photo_${block.id}`,
      removeOnComplete: true,
      removeOnFail: 1000,
    });
    this.logger.log(`Job added to queue for block ${block.id}`);

    return block;
  }

  async findAll(): Promise<BlockCategoryModel[]> {
    return this.db.blockCategory.findMany({
      include: {
        blocks: true,
      },
    });
  }

  async findOne(id: string): Promise<BlockModel> {
    const block = await this.db.block.findUnique({
      where: { id },
    });

    return block;
  }

  async update(
    id: string,
    updateBlockDto: UpdateBlockDto,
  ): Promise<BlockModel> {
    return this.db.block.update({
      where: { id },
      data: updateBlockDto,
    });
  }

  async updatePhoto(blockId: string) {
    await this.blockPhotoQueue.add('create-photo', blockId, {
      jobId: `create_photo_${blockId}`,
      removeOnComplete: true,
      removeOnFail: 1000,
    });
    this.logger.log(`Photo update job added to queue for block ${blockId}`);
    return { message: 'Photo update queued' };
  }

  async remove(id: string): Promise<BlockModel> {
    return this.db.block.delete({
      where: { id },
    });
  }
}
