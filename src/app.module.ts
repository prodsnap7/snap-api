import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DesignsModule } from './designs/designs.module';
import { PrismaModule } from './prisma/prisma.module';
import { FirebaseAuthGuard } from './firebase/firebase-auth.guard';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { BlocksModule } from './blocks/blocks.module';
import { FontsModule } from './fonts/fonts.module';
import { IconsModule } from './icons/icons.module';
import { UploadsModule } from './uploads/uploads.module';
import { BullModule } from '@nestjs/bull';
import { BlocksConsumer } from './blocks/blocks.consumer';
import { DesignsConsumer } from './designs/designs.consumer';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    DesignsModule,
    PrismaModule,
    BlocksModule,
    UploadsModule,
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
    {
      provide: APP_GUARD,
      useClass: FirebaseAuthGuard,
    },
  ],
})
export class AppModule {}
