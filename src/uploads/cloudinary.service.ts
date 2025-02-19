import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { streamToBuffer } from 'src/lib/utils';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
      secure: true,
    });
  }

  async uploadPhotoBuffer(
    photoBuffer: Buffer,
    public_id: string,
  ): Promise<UploadApiResponse> {
    if (!Buffer.isBuffer(photoBuffer)) {
      throw new TypeError('The photoBuffer argument must be a Buffer.');
    }
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'image',
            public_id,
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as any);
            }
          },
        )
        .end(photoBuffer);
    });
  }

  async uploadPhotoFromStream(stream: Readable, public_id: string) {
    const buffer = await streamToBuffer(stream);

    return this.uploadPhotoBuffer(buffer, public_id);
  }

  async uploadPhotoFromUrl(url: string, public_id: string) {
    return cloudinary.uploader.upload(url, { public_id });
  }
}
