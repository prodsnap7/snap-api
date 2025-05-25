import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Admin } from '../decorators/admin.decorator';
import { User as ClerkUser } from '@clerk/backend'; // Use Clerk User type

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Admin()
  @Get('all')
  async getAllUsers(
    @Query('page') pageStr?: string,
    @Query('limit') limitStr?: string,
  ): Promise<ClerkUser[]> {
    const page = pageStr ? parseInt(pageStr, 10) : 1;
    const limit = limitStr ? parseInt(limitStr, 10) : 10;
    return this.usersService.findAll({ page, limit });
  }
}
