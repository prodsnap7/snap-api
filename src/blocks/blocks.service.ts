import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlockCategoryModel, BlockModel } from './entities/block.entity';

@Injectable()
export class BlocksService {
  constructor(private readonly db: PrismaService) {}

  async create(createBlockDto: CreateBlockDto): Promise<BlockModel> {
    return this.db.block.create({
      data: createBlockDto,
    });
  }

  async findAll(): Promise<BlockCategoryModel[]> {
    return this.db.blockCategory.findMany();
  }

  async findOne(id: string): Promise<BlockModel> {
    return this.db.block.findUnique({
      where: { id },
    });
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

  async remove(id: string): Promise<BlockModel> {
    return this.db.block.delete({
      where: { id },
    });
  }
}
