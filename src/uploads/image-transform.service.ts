import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { removeBackgroundFromImageUrl } from 'remove.bg';

@Injectable()
export class ImageTransformService {
  constructor(private readonly configService: ConfigService) {}

  async removeBackground(url: string): Promise<string> {
    const res = await removeBackgroundFromImageUrl({
      url,
      apiKey: this.configService.get<string>('REMOVE_BG_API_KEY'),
      size: 'auto',
    });

    const photo =
      'data:image/jpeg;base64,' + res.base64img.replace(/(\r\n|\n|\r)/gm, '');

    return photo;
  }
}
