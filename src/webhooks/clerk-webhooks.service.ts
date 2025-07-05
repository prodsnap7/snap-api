import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SubscriptionTier } from '@prisma/client';
import { WebhookEvent } from '@clerk/fastify/webhooks';

interface ClerkUser {
  id: string;
  email_addresses: Array<{
    email_address: string;
    id: string;
  }>;
  first_name: string;
  last_name: string;
  created_at: number;
  updated_at: number;
}

@Injectable()
export class ClerkWebhooksService {
  private readonly logger = new Logger(ClerkWebhooksService.name);

  constructor(private readonly usersService: UsersService) {}

  async handleWebhook(event: WebhookEvent): Promise<void> {
    this.logger.log(`Processing webhook event: ${event.type}`);

    const { type, data } = event;

    try {
      switch (type) {
        case 'user.created':
          await this.handleUserCreated(data as any);
          break;
        case 'user.updated':
          await this.handleUserUpdated(data as any);
          break;
        case 'user.deleted':
          await this.handleUserDeleted(data as any);
          break;
        default:
          // Handle subscription events (these might not be in the WebhookEvent type but Clerk sends them)
          const eventType = type as string;
          if (eventType === 'subscription.active') {
            await this.handleSubscriptionActive(data as any);
          } else if (eventType === 'subscription.created') {
            await this.handleSubscriptionCreated(data as any);
          } else if (
            eventType === 'subscription.pastDue' ||
            eventType === 'subscription.past_due'
          ) {
            await this.handleSubscriptionPastDue(data as any);
          } else if (eventType === 'subscription.updated') {
            await this.handleSubscriptionUpdated(data as any);
          } else {
            this.logger.warn(`Unhandled webhook event type: ${eventType}`);
          }
          break;
      }
    } catch (error) {
      this.logger.error(`Error handling webhook ${type}:`, error);
      throw error;
    }
  }

  private async handleUserCreated(data: ClerkUser): Promise<void> {
    try {
      const primaryEmail = data.email_addresses.find(
        (email) => email.email_address,
      )?.email_address;

      if (!primaryEmail) {
        this.logger.error('No primary email found for user', data.id);
        return;
      }

      // Check if user already exists
      try {
        await this.usersService.findByClerkId(data.id);
        this.logger.warn(`User ${data.id} already exists in database`);
        return;
      } catch (error) {
        // User doesn't exist, continue with creation
      }

      const user = await this.usersService.create({
        clerkUserId: data.id,
        email: primaryEmail,
        firstName: data.first_name || '',
        lastName: data.last_name || '',
        subscriptionTier: SubscriptionTier.FREE,
      });

      this.logger.log(`Created user in database: ${user.id} (${user.email})`);
    } catch (error) {
      this.logger.error('Error creating user:', error);
      throw error;
    }
  }

  private async handleUserUpdated(data: ClerkUser): Promise<void> {
    try {
      const primaryEmail = data.email_addresses.find(
        (email) => email.email_address,
      )?.email_address;

      if (!primaryEmail) {
        this.logger.error('No primary email found for user', data.id);
        return;
      }

      const updatedUser = await this.usersService.updateByClerkId(data.id, {
        email: primaryEmail,
        firstName: data.first_name || '',
        lastName: data.last_name || '',
      });

      this.logger.log(
        `Updated user in database: ${updatedUser.id} (${updatedUser.email})`,
      );
    } catch (error) {
      this.logger.error('Error updating user:', error);
      throw error;
    }
  }

  private async handleUserDeleted(data: ClerkUser): Promise<void> {
    try {
      // Find the user first to get their database ID
      const user = await this.usersService.findByClerkId(data.id);

      // Delete the user from database
      await this.usersService.delete(user.id);

      this.logger.log(`Deleted user from database: ${user.id} (${user.email})`);
    } catch (error) {
      this.logger.error('Error deleting user:', error);
      throw error;
    }
  }

  private mapPlanToSubscriptionTier(planName: string): SubscriptionTier {
    // Map Clerk plan names to your subscription tiers
    // Adjust these mappings based on your actual plan names in Clerk
    switch (planName.toLowerCase()) {
      case 'pro':
      case 'premium':
      case 'paid':
        return SubscriptionTier.PRO;
      case 'free':
      case 'basic':
      default:
        return SubscriptionTier.FREE;
    }
  }

  // Subscription event handlers
  private async handleSubscriptionActive(data: any): Promise<void> {
    try {
      const subscriptionTier = this.mapPlanToSubscriptionTier(
        data.plan?.name || 'free',
      );

      const updatedUser = await this.usersService.updateByClerkId(
        data.user_id,
        {
          subscriptionTier,
        },
      );

      this.logger.log(
        `User ${updatedUser.email} subscription is now active: ${data.plan?.name} (${subscriptionTier})`,
      );
    } catch (error) {
      this.logger.error('Error handling subscription active:', error);
      throw error;
    }
  }

  private async handleSubscriptionCreated(data: any): Promise<void> {
    try {
      const subscriptionTier = this.mapPlanToSubscriptionTier(
        data.plan?.name || 'free',
      );

      const updatedUser = await this.usersService.updateByClerkId(
        data.user_id,
        {
          subscriptionTier,
        },
      );

      this.logger.log(
        `User ${updatedUser.email} created subscription: ${data.plan?.name} (${subscriptionTier})`,
      );
    } catch (error) {
      this.logger.error('Error handling subscription created:', error);
      throw error;
    }
  }

  private async handleSubscriptionPastDue(data: any): Promise<void> {
    try {
      // For past due subscriptions, we might want to maintain current tier temporarily
      // but log the issue for manual review
      this.logger.warn(
        `Subscription past due for user ${data.user_id}, plan: ${data.plan?.name}. Status: ${data.status}`,
      );

      // Optionally downgrade to FREE immediately or after grace period
      // For now, just log and keep current tier
      //
      // If you want to downgrade immediately:
      // const updatedUser = await this.usersService.updateByClerkId(data.user_id, {
      //   subscriptionTier: SubscriptionTier.FREE,
      // });
      // this.logger.log(`User ${updatedUser.email} downgraded to FREE due to past due payment`);
    } catch (error) {
      this.logger.error('Error handling subscription past due:', error);
      throw error;
    }
  }

  private async handleSubscriptionUpdated(data: any): Promise<void> {
    try {
      const subscriptionTier = this.mapPlanToSubscriptionTier(
        data.plan?.name || 'free',
      );

      const updatedUser = await this.usersService.updateByClerkId(
        data.user_id,
        {
          subscriptionTier,
        },
      );

      this.logger.log(
        `User ${updatedUser.email} updated subscription: ${data.plan?.name} (${subscriptionTier})`,
      );
    } catch (error) {
      this.logger.error('Error handling subscription updated:', error);
      throw error;
    }
  }
}
