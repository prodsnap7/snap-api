import { Module } from '@nestjs/common';
import { FontsController } from './fonts.controller';
import { FontsService } from './fonts.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FontsController],
  providers: [FontsService],
  imports: [PrismaModule],
})
export class FontsModule {}
