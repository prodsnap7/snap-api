import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DesignsModule } from './designs/designs.module';
import { PrismaModule } from './prisma/prisma.module';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { BlocksModule } from './blocks/blocks.module';
import { FontsModule } from './fonts/fonts.module';
import { IconsModule } from './icons/icons.module';
import { UploadsModule } from './uploads/uploads.module';
import { BullModule } from '@nestjs/bull';
import { BlocksConsumer } from './blocks/blocks.consumer';
import { PhotosModule } from './photos/photos.module';
import { TemplatesModule } from './templates/templates.module';
import { PuppeteerService } from './lib/utils/puppeteer.service';
import { ScreenshotService } from './lib/utils/screenshot';
import { FirebaseAuthGuard } from './firebase/firebase-auth.guard';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DesignsModule,
    PrismaModule,
    BlocksModule,
    UploadsModule,
    TemplatesModule,
    FontsModule,
    IconsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL');
        if (!redisUrl) {
          throw new Error('REDIS_URL is not defined in environment variables');
        }
        return {
          redis: redisUrl,
        };
      },
      inject: [ConfigService],
    }),
    PhotosModule,
  ],
  providers: [
    BlocksConsumer,
    FirebaseAuthStrategy,
    PuppeteerService,
    ScreenshotService,
    {
      provide: APP_GUARD,
      useClass: FirebaseAuthGuard,
    },
  ],
  exports: [PuppeteerService, ScreenshotService],
})
export class AppModule {}
