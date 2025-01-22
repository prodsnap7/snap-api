import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as OAuth from 'oauth';

@Injectable()
export class IconsService {
  private oauth: OAuth.OAuth;

  constructor(private readonly configService: ConfigService) {
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
      return data;
    } catch (e) {
      throw new HttpException(
        `Failed to fetch icons: ${e.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
