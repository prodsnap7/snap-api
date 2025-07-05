import {
  Controller,
  Post,
  Body,
  Headers,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClerkWebhooksService } from './clerk-webhooks.service';
import { Public } from 'src/lib/public-modifier';
import { createHash, createHmac } from 'crypto';

@Controller('webhooks/clerk')
export class ClerkWebhooksController {
  private readonly logger = new Logger(ClerkWebhooksController.name);

  constructor(
    private readonly clerkWebhooksService: ClerkWebhooksService,
    private readonly configService: ConfigService,
  ) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async handleClerkWebhook(
    @Body() body: any,
    @Headers() headers: Record<string, string>,
  ): Promise<{ success: boolean }> {
    this.logger.log('Received Clerk webhook');

    // Verify webhook signature
    const webhookSecret = this.configService.get<string>(
      'CLERK_WEBHOOK_SECRET',
    );
    if (webhookSecret) {
      const isValid = this.verifyWebhookSignature(
        JSON.stringify(body),
        headers,
        webhookSecret,
      );

      if (!isValid) {
        this.logger.error('Invalid webhook signature');
        throw new UnauthorizedException('Invalid webhook signature');
      }
    } else {
      this.logger.warn(
        'CLERK_WEBHOOK_SECRET not configured - skipping signature verification',
      );
    }

    try {
      await this.clerkWebhooksService.handleWebhook(body);
      this.logger.log('Webhook processed successfully');
      return { success: true };
    } catch (error) {
      this.logger.error('Error processing webhook:', error);
      throw error;
    }
  }

  private verifyWebhookSignature(
    payload: string,
    headers: Record<string, string>,
    secret: string,
  ): boolean {
    try {
      const svixId = headers['svix-id'];
      const svixTimestamp = headers['svix-timestamp'];
      const svixSignature = headers['svix-signature'];

      if (!svixId || !svixTimestamp || !svixSignature) {
        this.logger.error('Missing required webhook headers');
        return false;
      }

      // Create the signed payload
      const signedPayload = `${svixId}.${svixTimestamp}.${payload}`;

      // Create HMAC
      const expectedSignature = createHmac('sha256', secret)
        .update(signedPayload)
        .digest('base64');

      // Extract signature from header (format: "v1,signature")
      const signatures = svixSignature.split(',');
      const signature = signatures
        .find((sig) => sig.startsWith('v1,'))
        ?.substring(3);

      if (!signature) {
        this.logger.error('No v1 signature found');
        return false;
      }

      // Compare signatures
      return signature === expectedSignature;
    } catch (error) {
      this.logger.error('Error verifying webhook signature:', error);
      return false;
    }
  }
}
