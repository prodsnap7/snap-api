import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { CloudinaryService } from './cloudinary.service';
import { ImageTransformService } from './image-transform.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, ImageTransformService, CloudinaryService],
  imports: [PrismaModule],
  exports: [CloudinaryService, ImageTransformService],
})
export class UploadsModule {}
