import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule

@Module({
  imports: [AuthModule], // Add AuthModule to imports
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
