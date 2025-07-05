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

interface ClerkWebhookEvent {
  type: string;
  data: ClerkUser;
  object: string;
}

@Injectable()
export class ClerkWebhooksService {
  private readonly logger = new Logger(ClerkWebhooksService.name);

  constructor(private readonly usersService: UsersService) {}

  async handleWebhook(event: ClerkWebhookEvent): Promise<void> {
    const { type, data } = event;

    this.logger.log(`Received Clerk webhook: ${type} for user ${data.id}`);

    try {
      switch (type) {
        case 'user.created':
          await this.handleUserCreated(data);
          break;
        case 'user.updated':
          await this.handleUserUpdated(data);
          break;
        case 'user.deleted':
          await this.handleUserDeleted(data);
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
}
