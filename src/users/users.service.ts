import { Injectable, Inject } from '@nestjs/common';
import { ClerkClient, User as ClerkUser } from '@clerk/backend';

@Injectable()
export class UsersService {
  constructor(
    @Inject('ClerkClient')
    private readonly clerkClient: ClerkClient,
  ) {}

  async findAll(params: {
    page?: number;
    limit?: number;
  }): Promise<ClerkUser[]> {
    const { page = 1, limit = 10 } = params;
    const offset = (page - 1) * limit;

    try {
      const userList = await this.clerkClient.users.getUserList({
        limit,
        offset,
        // orderBy: '-created_at', // Example: to get newest users first
      });
      return userList.data; // Clerk's getUserList returns a paginated object, .data contains the users
    } catch (error) {
      // console.error('Error fetching users from Clerk:', error);
      // Handle Clerk API errors appropriately, e.g., log and re-throw or return an empty array
      throw error; // Or handle more gracefully
    }
  }

  // Add other user-related methods here if needed, e.g., findOne, etc.
}
