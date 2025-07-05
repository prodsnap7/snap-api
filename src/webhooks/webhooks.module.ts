import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClerkWebhooksController } from './clerk-webhooks.controller';
import { ClerkWebhooksService } from './clerk-webhooks.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ConfigModule, UsersModule],
  controllers: [ClerkWebhooksController],
  providers: [ClerkWebhooksService],
  exports: [ClerkWebhooksService],
})
export class WebhooksModule {}
