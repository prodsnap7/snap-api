import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../lib/public-modifier'; // Adjusted path to your existing public-modifier
import { Observable } from 'rxjs';

@Injectable()
export class ClerkAuthGuard extends AuthGuard('clerk') {
  private readonly logger = new Logger(ClerkAuthGuard.name);

  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const handler = context.getHandler();
    const controller = context.getClass();

    // Log information about the request being processed
    this.logger.debug(`
      Auth Guard Processing: ${req.method} ${req.url}
      Controller: ${controller.name}
      Handler: ${handler.name}
      Route: ${req.routerPath || 'Unknown'}
    `);

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      handler,
      controller,
    ]);

    if (isPublic) {
      this.logger.debug(
        `Skipping auth - Public route: ${req.method} ${req.url}`,
      );
      return true;
    }

    this.logger.debug(`Authenticating request: ${req.method} ${req.url}`);
    return super.canActivate(context);
  }
}
