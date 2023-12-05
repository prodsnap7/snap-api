import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BullModule } from '@nestjs/bull';
import { BLOCK_PHOTO_QUEUE } from 'src/constants';
import { UploadsModule } from 'src/uploads/uploads.module';

@Module({
  controllers: [BlocksController],
  providers: [BlocksService],
  imports: [
    PrismaModule,
    UploadsModule,
    BullModule.registerQueue({
      name: BLOCK_PHOTO_QUEUE,
    }),
  ],
})
export class BlocksModule {}
