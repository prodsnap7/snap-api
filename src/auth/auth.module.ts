import { Module } from '@nestjs/common';
import { ClerkStrategy } from './clerk.strategy';
import { PassportModule } from '@nestjs/passport';
import { ClerkClientProvider } from '../providers/clerk-client.provider'; // Adjusted path
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'clerk' }), // Register default strategy
    ConfigModule, // ConfigModule is already global in AppModule, but importing here ensures it's seen as a dependency if needed directly by this module's providers
  ],
  providers: [ClerkStrategy, ClerkClientProvider],
  exports: [PassportModule], // Export PassportModule if other modules need to use @UseGuards(AuthGuard('clerk')) specifically
})
export class AuthModule {}
