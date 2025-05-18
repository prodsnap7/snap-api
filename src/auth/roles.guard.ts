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
    const req = context.switchToHttp().getRequest();
    const handler = context.getHandler();
    const controller = context.getClass();

    // Log information about the request being processed
    this.logger.debug(`
      Roles Guard Processing: ${req.method} ${req.url}
      Controller: ${controller.name}
      Handler: ${handler.name}
      Route: ${req.routerPath || 'Unknown'}
    `);

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      handler,
      controller,
    ]);

    // If the route is public, RolesGuard doesn't apply, let it pass
    if (isPublic) {
      this.logger.debug(
        `Skipping roles check - Public route: ${req.method} ${req.url}`,
      );
      return true;
    }

    const isAdminRoute = this.reflector.getAllAndOverride<boolean>(
      IS_ADMIN_KEY,
      [handler, controller],
    );

    // If the route is not marked with @Admin(), this guard doesn't apply restrictions beyond ClerkAuthGuard
    if (!isAdminRoute) {
      this.logger.debug(
        `Route is not admin-protected: ${req.method} ${req.url}`,
      );
      return true;
    }

    this.logger.debug(
      `Admin-protected route detected: ${req.method} ${req.url}`,
    );

    const request = context
      .switchToHttp()
      .getRequest<RequestWithClerkUserForRoles>();
    const user = request.user;

    if (!user) {
      // This should ideally not happen if ClerkAuthGuard ran successfully before this guard
      // and the route is not public.
      this.logger.warn(
        `User object not found on request for an admin-protected route: ${req.method} ${req.url}`,
      );
      throw new ForbiddenException('Access Denied: User not authenticated.');
    }

    // Check for admin role in publicMetadata
    const role = user.publicMetadata?.role;
    this.logger.debug(
      `User role from publicMetadata: ${role} for user ${user.id}`,
    );

    if (role === 'admin') {
      this.logger.debug(
        `Access granted to admin user ${user.id} for route: ${req.method} ${req.url}`,
      );
      return true;
    }

    this.logger.warn(
      `Access denied for user ${user.id}. Role '${role}' is not 'admin'. Route: ${req.method} ${req.url}`,
    );
    throw new ForbiddenException('Access Denied: Requires admin privileges.');
  }
}
