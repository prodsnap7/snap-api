import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module, Logger } from '@nestjs/common';
import { DesignsModule } from './designs/designs.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlocksModule } from './blocks/blocks.module';
import { FontsModule } from './fonts/fonts.module';
import { IconsModule } from './icons/icons.module';
import { UploadsModule } from './uploads/uploads.module';
import { BullModule, BullModuleOptions } from '@nestjs/bull';
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
import { UsersModule } from './users/users.module';
import { WebhooksModule } from './webhooks/webhooks.module';

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
        const logger = new Logger('BullModule');
        const redisUrl = configService.get<string>('REDIS_URL');
        if (!redisUrl) {
          logger.error('REDIS_URL is not defined in environment variables');
          throw new Error('REDIS_URL is not defined in environment variables');
        }

        const bullOptions: BullModuleOptions = {
          url: redisUrl,
        };

        logger.log(`Attempting to configure Bull with Redis URL: ${redisUrl}`);

        return bullOptions;
      },
      inject: [ConfigService],
    }),
    PhotosModule,
    AuthModule,
    UtilsModule,
    UsersModule,
    WebhooksModule,
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
