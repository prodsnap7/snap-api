import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '@clerk/backend';
import { IS_ADMIN_KEY } from '../decorators/admin.decorator';
import { IS_PUBLIC_KEY } from '../lib/public-modifier'; // Assuming this is your public decorator key

interface RequestWithClerkUserForRoles extends Request {
  user?: User; // User might not be present if ClerkAuthGuard hasn't run or failed (e.g. on public route)
}

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If the route is public, RolesGuard doesn't apply, let it pass
    if (isPublic) {
      return true;
    }

    const isAdminRoute = this.reflector.getAllAndOverride<boolean>(
      IS_ADMIN_KEY,
      [context.getHandler(), context.getClass()],
    );

    // If the route is not marked with @Admin(), this guard doesn't apply restrictions beyond ClerkAuthGuard
    if (!isAdminRoute) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<RequestWithClerkUserForRoles>();
    const user = request.user;

    if (!user) {
      // This should ideally not happen if ClerkAuthGuard ran successfully before this guard
      // and the route is not public.
      this.logger.warn(
        'User object not found on request for an admin-protected route.',
      );
      throw new ForbiddenException('Access Denied: User not authenticated.');
    }

    // Check for admin role in publicMetadata
    const role = user.publicMetadata?.role;
    this.logger.debug(
      `User role from publicMetadata: ${role} for user ${user.id}`,
    );

    if (role === 'admin') {
      return true;
    }

    this.logger.warn(
      `Access denied for user ${user.id}. Role '${role}' is not 'admin'.`,
    );
    throw new ForbiddenException('Access Denied: Requires admin privileges.');
  }
}
