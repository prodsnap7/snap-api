import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DesignsModule } from './designs/designs.module';
import { PrismaModule } from './prisma/prisma.module';
import { FirebaseAuthGuard } from './firebase/firebase-auth.guard';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { BlocksModule } from './blocks/blocks.module';
import { FontsModule } from './fonts/fonts.module';
import { IconsModule } from './icons/icons.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    DesignsModule,
    PrismaModule,
    BlocksModule,
    FontsModule,
    IconsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UploadsModule,
  ],
  providers: [
    FirebaseAuthStrategy,
    {
      provide: APP_GUARD,
      useClass: FirebaseAuthGuard,
    },
  ],
})
export class AppModule {}
