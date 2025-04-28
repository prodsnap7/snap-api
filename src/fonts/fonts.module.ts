import { Module } from '@nestjs/common';
import { FontsController } from './fonts.controller';
import { FontsService } from './fonts.service';
import { FontSearchService } from './font-search.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [FontsController],
  providers: [FontsService, FontSearchService],
  imports: [PrismaModule, ConfigModule],
})
export class FontsModule {}
