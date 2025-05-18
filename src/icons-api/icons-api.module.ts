import { Module } from '@nestjs/common';
import { IconsApiController } from './icons-api.controller';
import { IconsApiService } from './icons-api.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, ConfigModule, HttpModule],
  controllers: [IconsApiController],
  providers: [IconsApiService],
})
export class IconsApiModule {}
