import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { FastifyReply } from 'fastify';

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

  async streamPhoto(url: string, res: FastifyReply) {
    try {
      // Download the image
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      // Convert to buffer
      const buffer = Buffer.from(response.data, 'binary');

      // Set headers
      res.header('Content-Type', response.headers['content-type']);
      res.header('Content-Length', buffer.length.toString());
      res.header('Cache-Control', 'public, max-age=31536000');

      // Send the buffer directly
      return res.send(buffer);
    } catch (error) {
      console.error('Error downloading image:', error);
      res.status(500).send('Error loading image');
    }
  }
}
