import { createClerkClient, ClerkClient } from '@clerk/backend';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const ClerkClientProvider: Provider = {
  provide: 'ClerkClient', // String token for injection
  useFactory: (configService: ConfigService): ClerkClient => {
    const publishableKey = configService.get<string>('CLERK_PUBLISHABLE_KEY');
    const secretKey = configService.get<string>('CLERK_SECRET_KEY');

    if (!secretKey) {
      throw new Error(
        'CLERK_SECRET_KEY is not defined in environment variables.',
      );
    }

    // Note: The guide uses `createClerkClient` which returns a ClerkClient instance.
    // The guide's return type annotation for useFactory is just `createClerkClient(...)` which is unusual.
    // Explicitly returning ClerkClient type.
    return createClerkClient({
      publishableKey,
      secretKey,
    });
  },
  inject: [ConfigService],
};
