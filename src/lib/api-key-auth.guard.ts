import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { IS_PUBLIC_KEY } from './public-modifier';

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('[API Key Guard] Is Public Route:', isPublic);
    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    const validApiKey = this.configService.get<string>('INTERNAL_API_KEY');

    console.log('[API Key Guard] Received API Key:', apiKey);
    console.log(
      '[API Key Guard] Expected INTERNAL_API_KEY from config:',
      validApiKey,
    );

    if (!apiKey || apiKey !== validApiKey) {
      console.error(
        '[API Key Guard] Authentication FAILED. Received:',
        apiKey,
        'Expected:',
        validApiKey,
      );
      throw new UnauthorizedException('Invalid or missing API key');
    }
    console.log('[API Key Guard] Authentication SUCCEEDED.');
    return true;
  }
}
