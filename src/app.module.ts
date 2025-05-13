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
import { DesignsConsumer } from './designs/designs.consumer';
import { PhotosModule } from './photos/photos.module';
import { TemplatesModule } from './templates/templates.module';
import { PuppeteerService } from './lib/utils/puppeteer.service';
import { ScreenshotService } from './lib/utils/screenshot';
import { ApiKeyAuthGuard } from './lib/api-key-auth.guard';

@Module({
  imports: [
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
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: +configService.get('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    PhotosModule,
  ],
  providers: [
    BlocksConsumer,
    DesignsConsumer,
    FirebaseAuthStrategy,
    PuppeteerService,
    ScreenshotService,
    {
      provide: APP_GUARD,
      useClass: ApiKeyAuthGuard,
    },
  ],
  exports: [PuppeteerService, ScreenshotService],
})
export class AppModule {}
