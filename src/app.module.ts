import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DesignsModule } from './designs/designs.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlocksModule } from './blocks/blocks.module';
import { FontsModule } from './fonts/fonts.module';
import { IconsModule } from './icons/icons.module';
import { UploadsModule } from './uploads/uploads.module';
import { BullModule } from '@nestjs/bull';
import { BlocksConsumer } from './blocks/blocks.consumer';
import { PhotosModule } from './photos/photos.module';
import { TemplatesModule } from './templates/templates.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { ClerkClientProvider } from './providers/clerk-client.provider';
import { ClerkAuthGuard } from './auth/clerk-auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { IconsApiModule } from './icons-api/icons-api.module';
import { UtilsModule } from './lib/utils/utils.module';

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
    IconsApiModule,
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
    AuthModule,
    UtilsModule,
  ],
  providers: [
    BlocksConsumer,
    ClerkClientProvider,
    {
      provide: APP_GUARD,
      useClass: ClerkAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
