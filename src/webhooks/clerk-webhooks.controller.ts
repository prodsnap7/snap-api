import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Logger,
  Req,
} from '@nestjs/common';
import { ClerkWebhooksService } from './clerk-webhooks.service';
import { Public } from 'src/lib/public-modifier';
import { verifyWebhook } from '@clerk/fastify/webhooks';
import { FastifyRequest } from 'fastify';

@Controller('webhooks/clerk')
export class ClerkWebhooksController {
  private readonly logger = new Logger(ClerkWebhooksController.name);

  constructor(private readonly clerkWebhooksService: ClerkWebhooksService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async handleClerkWebhook(
    @Req() request: FastifyRequest,
  ): Promise<{ success: boolean }> {
    this.logger.log('Received Clerk webhook');

    try {
      const evt = await verifyWebhook(request);

      // Do something with payload
      // For this guide, log payload to console
      const { id } = evt.data;
      const eventType = evt.type;
      this.logger.log(
        `Received webhook with ID ${id} and event type of ${eventType}`,
      );
      this.logger.log('Webhook payload:', evt.data);

      // Process the verified webhook
      await this.clerkWebhooksService.handleWebhook(evt);

      this.logger.log('Webhook processed successfully');
      return { success: true };
    } catch (error) {
      this.logger.error('Error verifying webhook:', error);
      throw new Error('Error verifying webhook');
    }
  }
}
