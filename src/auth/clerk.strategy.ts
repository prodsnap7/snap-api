import {
  Inject,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { ClerkClient, User, verifyToken } from '@clerk/backend';
import { FastifyRequest } from 'fastify'; // Changed from express to fastify

@Injectable()
export class ClerkStrategy extends PassportStrategy(Strategy, 'clerk') {
  private readonly logger = new Logger(ClerkStrategy.name);

  constructor(
    @Inject('ClerkClient')
    private readonly clerkClient: ClerkClient,
    private readonly configService: ConfigService,
  ) {
    super(); // Required for passport-custom
  }

  async validate(req: FastifyRequest): Promise<User> {
    // Log request details
    this.logger.debug(`
      Request: ${req.method} ${req.url}
      Route: ${req.routerPath || 'Unknown'}
      Headers: ${JSON.stringify(this.sanitizeHeaders(req.headers))}
      Query: ${JSON.stringify(req.query)}
      Body: ${this.truncateBody(req.body)}
    `);

    const token = req.headers.authorization?.split(' ').pop();

    if (!token) {
      this.logger.warn('No authorization token provided.');
      throw new UnauthorizedException('No token provided');
    }

    const secretKey = this.configService.get<string>('CLERK_SECRET_KEY');
    if (!secretKey) {
      this.logger.error('CLERK_SECRET_KEY is not configured.');
      throw new Error(
        'CLERK_SECRET_KEY is not configured for token verification.',
      );
    }

    try {
      this.logger.debug('Attempting to verify token.');
      // The guide uses verifyToken options: { secretKey: this.configService.get('CLERK_SECRET_KEY') }
      // However, verifyToken also accepts issuer, authorizedParties etc.
      // For simplicity and alignment with common clerk backend usage, we can pass other options if needed.
      // The SDK docs often show `jwtKey` (JWKS URI) for `verifyToken` if using JWKS.
      // If using only secretKey, it should be sufficient for symmetric verification.
      const tokenPayload = await verifyToken(token, {
        secretKey: secretKey,
        // Other options like `issuer` or `authorizedParties` can be added if needed.
        // e.g., authorizedParties: [this.configService.get<string>('CLERK_AZP')],
      });
      this.logger.debug(`Token verified. Payload sub: ${tokenPayload.sub}`);

      const user = await this.clerkClient.users.getUser(tokenPayload.sub);
      this.logger.debug(`User ${user.id} fetched successfully.`);
      return user;
    } catch (error) {
      this.logger.error(
        `Token verification or user fetch failed: ${error.message}`,
        error.stack,
      );
      if (error.errors) {
        this.logger.error(`Clerk API errors: ${JSON.stringify(error.errors)}`);
      }
      throw new UnauthorizedException('Invalid token or user not found.');
    }
  }

  // Sanitize headers to avoid logging sensitive information
  private sanitizeHeaders(headers: any): any {
    const sanitized = { ...headers };
    if (sanitized.authorization) {
      sanitized.authorization = 'Bearer [REDACTED]';
    }
    if (sanitized.cookie) {
      sanitized.cookie = '[REDACTED]';
    }
    return sanitized;
  }

  // Truncate request body for logging
  private truncateBody(body: any): string {
    if (!body) return 'undefined';

    try {
      const bodyStr = JSON.stringify(body);
      if (bodyStr.length > 500) {
        return bodyStr.substring(0, 500) + '... [truncated]';
      }
      return bodyStr;
    } catch (e) {
      return '[Body cannot be stringified]';
    }
  }
}
