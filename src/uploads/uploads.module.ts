import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { ImageKitService } from './imagekit.service';
import { ImageTransformService } from './image-transform.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, ImageTransformService, ImageKitService],
  imports: [PrismaModule],
  exports: [ImageKitService, ImageTransformService],
})
export class UploadsModule { }
