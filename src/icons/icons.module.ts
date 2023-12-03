import { Module } from '@nestjs/common';
import { IconsController } from './icons.controller';
import { IconsService } from './icons.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IconsController],
  providers: [IconsService],
  imports: [PrismaModule],
})
export class IconsModule {}
