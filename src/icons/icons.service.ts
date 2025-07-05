import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as OAuth from 'oauth';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IconsService {
  private oauth: OAuth.OAuth;
  private readonly cacheExpirationMs = 24 * 60 * 60 * 1000; // 24 hours

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.oauth = new OAuth.OAuth(
      'https://api.thenounproject.com',
      'https://api.thenounproject.com',
      this.configService.get<string>('NOUN_PROJECT_API_KEY'),
      this.configService.get<string>('NOUN_PROJECT_API_SECRET'),
      '1.0',
      null,
      'HMAC-SHA1',
    );
  }

  async getIcons(query: string): Promise<any> {
    try {
      // Check cache first
      const cached = await this.prisma.svgIcon.findUnique({
        where: {
          query_page: {
            query,
            page: 1,
          },
        },
      });

      if (cached) {
        return cached.iconData as any;
      }

      // 2. If not cached or expired, call API
      const data = await new Promise((resolve, reject) => {
        this.oauth.get(
          `https://api.thenounproject.com/v2/icon?query=${query}&limit_to_public_domain=1&include_svg=1`,
          '',
          '',
          (e, data) => {
            if (e) return reject(e);
            if (!data) return reject(new Error('No data received from API'));
            try {
              resolve(JSON.parse(data as string));
            } catch (parseError) {
              reject(
                new Error(
                  `Failed to parse API response: ${parseError.message}`,
                ),
              );
            }
          },
        );
      });

      // 3. Store in cache
      await this.prisma.svgIcon.upsert({
        where: {
          query_page: {
            query,
            page: 1,
          },
        },
        update: {
          iconData: data as Prisma.InputJsonValue,
        },
        create: {
          query,
          page: 1,
          iconData: data as Prisma.InputJsonValue,
        },
      });

      return data;
    } catch (e) {
      console.error('Noun Project API error:', e);
      if (e && e.stack) {
        console.error(e.stack);
      }
      throw new HttpException(
        `Failed to fetch icons: ${e.message || JSON.stringify(e)}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
