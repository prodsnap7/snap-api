import { Module } from '@nestjs/common';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UploadsModule } from 'src/uploads/uploads.module';

@Module({
  controllers: [TemplatesController],
  providers: [TemplatesService],
  imports: [PrismaModule, UploadsModule],
  exports: [TemplatesService],
})
export class TemplatesModule {}
