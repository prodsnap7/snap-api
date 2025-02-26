import { Module } from '@nestjs/common';
import { DesignsController } from './designs.controller';
import { DesignsService } from './designs.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BullModule } from '@nestjs/bull';
import { DESIGN_PHOTO_QUEUE } from 'src/constants';
import { UploadsModule } from 'src/uploads/uploads.module';
import { TemplatesModule } from 'src/templates/templates.module';

@Module({
  controllers: [DesignsController],
  providers: [DesignsService],
  imports: [
    PrismaModule,
    UploadsModule,
    TemplatesModule,
    BullModule.registerQueue({
      name: DESIGN_PHOTO_QUEUE,
    }),
  ],
})
export class DesignsModule {}
