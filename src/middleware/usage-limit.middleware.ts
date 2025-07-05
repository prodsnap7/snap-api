import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FastifyRequest } from 'fastify';
import { UsersService } from '../users/users.service';
import {
  USAGE_LIMIT_KEY,
  UsageLimitType,
} from '../decorators/usage-limit.decorator';

@Injectable()
export class UsageLimitGuard implements CanActivate {
  private readonly FREE_TIER_LIMIT = 5;

  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // Get the usage limit type from route metadata
      const usageLimitType = this.reflector.getAllAndOverride<UsageLimitType>(
        USAGE_LIMIT_KEY,
        [context.getHandler(), context.getClass()],
      );

      // If no usage limit is set for this route, allow access
      if (!usageLimitType) {
        return true;
      }

      const request = context.switchToHttp().getRequest<FastifyRequest>();

      // Get user ID from request (set by ClerkAuthGuard)
      const userId = (request as any).auth?.userId;

      if (!userId) {
        throw new UnauthorizedException('User must be authenticated');
      }

      // For now, we'll check subscription tier from database
      // TODO: Replace with Clerk plan check when auth context is available
      const user = await this.usersService.findByClerkId(userId);
      const isProUser = user.subscriptionTier === 'PRO';

      // If user has pro access, allow unlimited usage
      if (isProUser) {
        return true;
      }

      // For free users, check usage limits
      const currentUsage = await this.usersService.getCurrentUsage(
        userId,
        usageLimitType,
      );

      if (currentUsage >= this.FREE_TIER_LIMIT) {
        throw new ForbiddenException({
          message: `Free tier limit reached for ${usageLimitType}`,
          details: {
            currentUsage,
            limit: this.FREE_TIER_LIMIT,
            usageType: usageLimitType,
            suggestion: 'Upgrade to Pro for unlimited access',
          },
        });
      }

      // Increment usage counter for free users
      await this.usersService.incrementUsageAtomic(userId, usageLimitType);

      return true;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof ForbiddenException
      ) {
        throw error;
      }

      // Log unexpected errors but allow the request
      console.error('Usage limit guard error:', error);
      return true;
    }
  }
}
