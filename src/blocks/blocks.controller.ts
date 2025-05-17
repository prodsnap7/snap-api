import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Public } from 'src/lib/public-modifier';
import { User } from '@clerk/backend';
import { FastifyRequest } from 'fastify';

interface RequestWithClerkUser extends FastifyRequest {
  user: User;
}

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Post()
  create(
    @Req() req: RequestWithClerkUser,
    @Body() createBlockDto: CreateBlockDto,
  ) {
    const { user } = req;
    const { categoryId, ...rest } = createBlockDto;
    const data = {
      ...rest,
      userId: user.id,
      url: '',
      category: {
        connect: {
          id: categoryId,
        },
      },
    };
    return this.blocksService.create(data);
  }

  @Public()
  @Get('category')
  findAllBlockCategories() {
    // returns all block categories with blocks included
    return this.blocksService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(id, updateBlockDto);
  }

  @Get(':id/update-photo')
  updatePhoto(@Param('id') id: string, @Req() req: RequestWithClerkUser) {
    return this.blocksService.updatePhoto(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestWithClerkUser) {
    return this.blocksService.remove(id);
  }
}
