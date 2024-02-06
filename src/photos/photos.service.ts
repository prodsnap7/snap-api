import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PhotosService {
  constructor(private readonly configService: ConfigService) {}

  async searchPhotos(query: string) {
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=20&page=1`;
    const res = await axios.get(pexelsUrl, {
      headers: {
        Authorization: this.configService.get<string>('PEXELS_API_KEY'),
      },
    });

    return res.data.photos;
  }
}
