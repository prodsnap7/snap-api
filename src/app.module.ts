import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignsModule } from './designs/designs.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { FirebaseAuthGuard } from './firebase/firebase-auth.guard';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { BlocksModule } from './blocks/blocks.module';
import { FontsModule } from './fonts/fonts.module';

@Module({
  imports: [DesignsModule, PrismaModule, BlocksModule, FontsModule],
  controllers: [AppController],
  providers: [
    AppService,
    FirebaseAuthStrategy,
    {
      provide: APP_GUARD,
      useClass: FirebaseAuthGuard,
    },
  ],
})
export class AppModule {}
