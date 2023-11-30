import { Module } from '@nestjs/common';
import { DesignsController } from './designs.controller';
import { DesignsService } from './designs.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DesignsController],
  providers: [DesignsService],
  imports: [PrismaModule],
})
export class DesignsModule {}
