import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService, CreateUserDto, UpdateUserDto } from './users.service';
import { ClerkAuthGuard } from 'src/auth/clerk-auth.guard';
import { SubscriptionTier } from '@prisma/client';

@Controller('users')
@UseGuards(ClerkAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('subscriptionTier') subscriptionTier?: SubscriptionTier,
    @Query('searchTerm') searchTerm?: string,
  ) {
    return this.usersService.findAll({
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
      subscriptionTier,
      searchTerm,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('clerk/:clerkUserId')
  findByClerkId(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.findByClerkId(clerkUserId);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch('clerk/:clerkUserId')
  updateByClerkId(
    @Param('clerkUserId') clerkUserId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateByClerkId(clerkUserId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Post('clerk/:clerkUserId/upgrade')
  upgradeSubscription(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.upgradeSubscription(clerkUserId);
  }

  @Post('clerk/:clerkUserId/downgrade')
  downgradeSubscription(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.downgradeSubscription(clerkUserId);
  }

  @Get('clerk/:clerkUserId/stats')
  getUserStats(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.getUserStats(clerkUserId);
  }

  @Post('clerk/:clerkUserId/stats/reset')
  resetUserStats(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.resetUserStats(clerkUserId);
  }

  @Get('clerk/:clerkUserId/subscription')
  getSubscriptionTier(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.getSubscriptionTier(clerkUserId);
  }

  @Get('clerk/:clerkUserId/is-pro')
  isProUser(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.isProUser(clerkUserId);
  }

  // API usage tracking endpoints
  @Post('clerk/:clerkUserId/increment/downloads')
  incrementDownloadCount(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.incrementDownloadCount(clerkUserId);
  }

  @Post('clerk/:clerkUserId/increment/designs')
  incrementDesignCount(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.incrementDesignCount(clerkUserId);
  }

  @Post('clerk/:clerkUserId/increment/bg-removal')
  incrementBgRemovalApiCount(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.incrementBgRemovalApiCount(clerkUserId);
  }

  @Post('clerk/:clerkUserId/increment/icons')
  incrementIconsApiCount(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.incrementIconsApiCount(clerkUserId);
  }

  @Post('clerk/:clerkUserId/increment/photos')
  incrementPhotosApiCount(@Param('clerkUserId') clerkUserId: string) {
    return this.usersService.incrementPhotosApiCount(clerkUserId);
  }
}
