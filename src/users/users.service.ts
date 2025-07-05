import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma, SubscriptionTier } from '@prisma/client';

export interface CreateUserDto {
  clerkUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  subscriptionTier?: SubscriptionTier;
}

export interface UpdateUserDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  subscriptionTier?: SubscriptionTier;
  downloadCount?: number;
  designCount?: number;
  bgRemovalApiCount?: number;
  iconsApiCount?: number;
  photosApiCount?: number;
}

export interface UserStatsDto {
  downloadCount: number;
  designCount: number;
  bgRemovalApiCount: number;
  iconsApiCount: number;
  photosApiCount: number;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: {
          clerkUserId: data.clerkUserId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          subscriptionTier: data.subscriptionTier || SubscriptionTier.FREE,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = error.meta?.target as string[];
          if (target?.includes('clerkUserId')) {
            throw new ConflictException(
              'User with this Clerk ID already exists',
            );
          }
          if (target?.includes('email')) {
            throw new ConflictException('User with this email already exists');
          }
        }
      }
      throw error;
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    subscriptionTier?: SubscriptionTier;
    searchTerm?: string;
  }): Promise<User[]> {
    const { skip, take, subscriptionTier, searchTerm } = params;

    const where: Prisma.UserWhereInput = {
      ...(subscriptionTier && { subscriptionTier }),
      ...(searchTerm && {
        OR: [
          {
            email: { contains: searchTerm, mode: Prisma.QueryMode.insensitive },
          },
          {
            firstName: {
              contains: searchTerm,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            lastName: {
              contains: searchTerm,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        ],
      }),
    };

    return this.prisma.user.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByClerkId(clerkUserId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { clerkUserId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with Clerk ID ${clerkUserId} not found`,
      );
    }

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
        if (error.code === 'P2002') {
          const target = error.meta?.target as string[];
          if (target?.includes('email')) {
            throw new ConflictException('User with this email already exists');
          }
        }
      }
      throw error;
    }
  }

  async updateByClerkId(
    clerkUserId: string,
    data: UpdateUserDto,
  ): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { clerkUserId },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `User with Clerk ID ${clerkUserId} not found`,
          );
        }
        if (error.code === 'P2002') {
          const target = error.meta?.target as string[];
          if (target?.includes('email')) {
            throw new ConflictException('User with this email already exists');
          }
        }
      }
      throw error;
    }
  }

  async delete(id: string): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
      }
      throw error;
    }
  }

  async upgradeSubscription(clerkUserId: string): Promise<User> {
    return this.updateByClerkId(clerkUserId, {
      subscriptionTier: SubscriptionTier.PRO,
    });
  }

  async downgradeSubscription(clerkUserId: string): Promise<User> {
    return this.updateByClerkId(clerkUserId, {
      subscriptionTier: SubscriptionTier.FREE,
    });
  }

  // API usage tracking methods
  async incrementDownloadCount(clerkUserId: string): Promise<User> {
    return this.prisma.user.update({
      where: { clerkUserId },
      data: { downloadCount: { increment: 1 } },
    });
  }

  async incrementDesignCount(clerkUserId: string): Promise<User> {
    return this.prisma.user.update({
      where: { clerkUserId },
      data: { designCount: { increment: 1 } },
    });
  }

  async incrementBgRemovalApiCount(clerkUserId: string): Promise<User> {
    return this.prisma.user.update({
      where: { clerkUserId },
      data: { bgRemovalApiCount: { increment: 1 } },
    });
  }

  async incrementIconsApiCount(clerkUserId: string): Promise<User> {
    return this.prisma.user.update({
      where: { clerkUserId },
      data: { iconsApiCount: { increment: 1 } },
    });
  }

  async incrementPhotosApiCount(clerkUserId: string): Promise<User> {
    return this.prisma.user.update({
      where: { clerkUserId },
      data: { photosApiCount: { increment: 1 } },
    });
  }

  async getUserStats(clerkUserId: string): Promise<UserStatsDto> {
    const user = await this.findByClerkId(clerkUserId);

    return {
      downloadCount: user.downloadCount,
      designCount: user.designCount,
      bgRemovalApiCount: user.bgRemovalApiCount,
      iconsApiCount: user.iconsApiCount,
      photosApiCount: user.photosApiCount,
    };
  }

  async resetUserStats(clerkUserId: string): Promise<User> {
    return this.updateByClerkId(clerkUserId, {
      downloadCount: 0,
      designCount: 0,
      bgRemovalApiCount: 0,
      iconsApiCount: 0,
      photosApiCount: 0,
    });
  }

  async getSubscriptionTier(clerkUserId: string): Promise<SubscriptionTier> {
    const user = await this.findByClerkId(clerkUserId);
    return user.subscriptionTier;
  }

  async isProUser(clerkUserId: string): Promise<boolean> {
    const subscriptionTier = await this.getSubscriptionTier(clerkUserId);
    return subscriptionTier === SubscriptionTier.PRO;
  }
}
