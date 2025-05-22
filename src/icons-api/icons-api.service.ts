import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class IconsApiService {
  private readonly logger = new Logger(IconsApiService.name);
  private readonly cacheExpirationMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async searchIcons(searchQuery: string, page: number): Promise<any> {
    try {
      // Step 1: Check for cached data in database
      const cachedData = await this.prisma.svgIcon.findFirst({
        where: {
          query: searchQuery,
          page: page,
        },
      });

      // Step 2: Define cache expiration logic (24 hours)
      const isCacheValid =
        cachedData &&
        new Date().getTime() - new Date(cachedData.createdAt).getTime() <
          this.cacheExpirationMs;

      if (isCacheValid) {
        this.logger.log(
          `Returning cached data for query: ${searchQuery}, page: ${page}`,
        );
        return cachedData.iconData;
      }

      // Step 3: If no valid cache, fetch from API
      const freepikApiKey = this.configService.get<string>('FREEPIK_API_KEY');

      if (!freepikApiKey) {
        throw new Error('FREEPIK_API_KEY is not configured.');
      }

      const response = await lastValueFrom(
        this.httpService.get(
          `https://api.freepik.com/v1/icons?page=${page}&per_page=100&term=${searchQuery}`,
          {
            headers: {
              'x-freepik-api-key': freepikApiKey,
            },
          },
        ),
      );

      const icons = response.data.data;

      // Step 4: Store the API response in database for future caching
      await this.prisma.svgIcon.upsert({
        where: {
          query_page: {
            query: searchQuery,
            page: page,
          },
        },
        update: {
          iconData: icons,
          createdAt: new Date(),
        },
        create: {
          query: searchQuery,
          page: page,
          iconData: icons,
        },
      });

      return icons;
    } catch (error) {
      this.logger.error(`Error in searchIcons: ${error.message}`, error.stack);
      throw new Error(`Error searching for icons: ${error.message}`);
    }
  }

  async downloadIcon(iconId: string): Promise<any> {
    try {
      const freepikApiKey = this.configService.get<string>('FREEPIK_API_KEY');

      if (!freepikApiKey) {
        throw new Error('FREEPIK_API_KEY is not configured.');
      }

      this.logger.log(`Downloading icon with ID: ${iconId}`);

      const response = await lastValueFrom(
        this.httpService.get(
          `https://api.freepik.com/v1/icons/${iconId}/download?format=svg`,
          {
            headers: {
              'x-freepik-api-key': freepikApiKey,
            },
          },
        ),
      );

      return response.data.data;
    } catch (error) {
      this.logger.error(
        `Error downloading icon ${iconId}: ${error.message}`,
        error.stack,
      );
      throw new Error(`Error downloading icon: ${error.message}`);
    }
  }
}
