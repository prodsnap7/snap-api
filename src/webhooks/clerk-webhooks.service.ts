import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SubscriptionTier } from '@prisma/client';

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

interface ClerkSubscription {
  id: string;
  user_id: string;
  plan: {
    id: string;
    name: string;
    price: number;
  };
  status: 'active' | 'cancelled' | 'past_due' | 'incomplete';
  created_at: number;
  updated_at: number;
}

interface ClerkWebhookEvent {
  type: string;
  data: ClerkUser | ClerkSubscription;
  object: string;
}

@Injectable()
export class ClerkWebhooksService {
  private readonly logger = new Logger(ClerkWebhooksService.name);

  constructor(private readonly usersService: UsersService) {}

  async handleWebhook(event: ClerkWebhookEvent): Promise<void> {
    const { type, data } = event;

    this.logger.log(`Received Clerk webhook: ${type}`);

    try {
      switch (type) {
        // User events
        case 'user.created':
          await this.handleUserCreated(data as ClerkUser);
          break;
        case 'user.updated':
          await this.handleUserUpdated(data as ClerkUser);
          break;
        case 'user.deleted':
          await this.handleUserDeleted(data as ClerkUser);
          break;

        // Subscription events (user-specific)
        case 'subscription.active':
          await this.handleSubscriptionActive(data as ClerkSubscription);
          break;
        case 'subscription.created':
          await this.handleSubscriptionCreated(data as ClerkSubscription);
          break;
        case 'subscription.pastDue':
        case 'subscription.past_due':
          await this.handleSubscriptionPastDue(data as ClerkSubscription);
          break;
        case 'subscription.updated':
          await this.handleSubscriptionUpdated(data as ClerkSubscription);
          break;

        default:
          this.logger.warn(`Unhandled webhook type: ${type}`);
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

  // Subscription events (user-specific)
  private async handleSubscriptionActive(
    data: ClerkSubscription,
  ): Promise<void> {
    try {
      const subscriptionTier = this.mapPlanToSubscriptionTier(data.plan.name);

      const updatedUser = await this.usersService.updateByClerkId(
        data.user_id,
        {
          subscriptionTier,
        },
      );

      this.logger.log(
        `User ${updatedUser.email} subscription is now active: ${data.plan.name} (${subscriptionTier})`,
      );
    } catch (error) {
      this.logger.error('Error handling subscription active:', error);
      throw error;
    }
  }

  private async handleSubscriptionCreated(
    data: ClerkSubscription,
  ): Promise<void> {
    try {
      const subscriptionTier = this.mapPlanToSubscriptionTier(data.plan.name);

      const updatedUser = await this.usersService.updateByClerkId(
        data.user_id,
        {
          subscriptionTier,
        },
      );

      this.logger.log(
        `User ${updatedUser.email} created subscription: ${data.plan.name} (${subscriptionTier})`,
      );
    } catch (error) {
      this.logger.error('Error handling subscription created:', error);
      throw error;
    }
  }

  private async handleSubscriptionPastDue(
    data: ClerkSubscription,
  ): Promise<void> {
    try {
      // For past due subscriptions, we might want to maintain current tier temporarily
      // but log the issue for manual review
      this.logger.warn(
        `Subscription past due for user ${data.user_id}, plan: ${data.plan.name}. Status: ${data.status}`,
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

  private async handleSubscriptionUpdated(
    data: ClerkSubscription,
  ): Promise<void> {
    try {
      const subscriptionTier = this.mapPlanToSubscriptionTier(data.plan.name);

      const updatedUser = await this.usersService.updateByClerkId(
        data.user_id,
        {
          subscriptionTier,
        },
      );

      this.logger.log(
        `User ${updatedUser.email} updated subscription: ${data.plan.name} (${subscriptionTier})`,
      );
    } catch (error) {
      this.logger.error('Error handling subscription updated:', error);
      throw error;
    }
  }

  private mapPlanToSubscriptionTier(planName: string): SubscriptionTier {
    // Map Clerk plan names to your subscription tiers
    // Adjust these mappings based on your actual plan names in Clerk
    const planMapping: Record<string, SubscriptionTier> = {
      free: SubscriptionTier.FREE,
      basic: SubscriptionTier.FREE,
      pro: SubscriptionTier.PRO,
      premium: SubscriptionTier.PRO,
      gold: SubscriptionTier.PRO,
      silver: SubscriptionTier.PRO,
      bronze: SubscriptionTier.FREE,
    };

    const normalizedPlanName = planName.toLowerCase();
    const tier = planMapping[normalizedPlanName];

    if (!tier) {
      this.logger.warn(`Unknown plan name: ${planName}, defaulting to FREE`);
      return SubscriptionTier.FREE;
    }

    return tier;
  }
}
