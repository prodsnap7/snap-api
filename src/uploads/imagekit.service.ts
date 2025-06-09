import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { streamToBuffer } from 'src/lib/utils';
import { Readable } from 'stream';
import ImageKit from 'imagekit';

@Injectable()
export class ImageKitService {
  private imagekit: any;

  constructor(private readonly configService: ConfigService) {
    this.imagekit = new ImageKit({
      publicKey: this.configService.get<string>('IMAGEKIT_PUBLIC_KEY'),
      privateKey: this.configService.get<string>('IMAGEKIT_PRIVATE_KEY'),
      urlEndpoint: this.configService.get<string>('IMAGEKIT_URL_ENDPOINT'),
    });
  }

  async uploadPhotoBuffer(
    photoBuffer: Buffer,
    public_id: string,
  ): Promise<any> {
    console.log('🔍 ImageKitService.uploadPhotoBuffer called with:', {
      bufferSize: photoBuffer?.length,
      publicId: public_id,
      hasImageKit: !!this.imagekit,
    });

    if (!Buffer.isBuffer(photoBuffer)) {
      throw new TypeError('The photoBuffer argument must be a Buffer.');
    }

    try {
      // Extract folder and filename from public_id
      const pathParts = public_id.split('/');
      let folder = '/uploads'; // default folder
      let fileName = public_id;

      if (pathParts.length > 1) {
        // If public_id contains folder structure like "temp/design_123"
        const folderPart = pathParts.slice(0, -1).join('/');
        folder = `/${folderPart}`;
        fileName = pathParts[pathParts.length - 1];
      }

      console.log('📁 ImageKit upload params:', {
        folder,
        fileName,
        originalPublicId: public_id,
      });

      const result = await this.imagekit.upload({
        file: photoBuffer,
        fileName: fileName,
        folder: folder,
      });

      console.log('✅ ImageKit upload successful:', {
        url: result.url,
        fileId: result.fileId,
        name: result.name,
      });

      return result;
    } catch (error) {
      console.error('❌ ImageKit upload error:', JSON.stringify(error, null, 2));
      throw error;
    }
  }

  async uploadPhotoFromStream(
    stream: Readable,
    public_id: string,
  ): Promise<any> {
    const buffer = await streamToBuffer(stream);
    return this.uploadPhotoBuffer(buffer, public_id);
  }

  async uploadPhotoFromUrl(url: string, public_id: string): Promise<any> {
    try {
      // Extract folder and filename from public_id
      const pathParts = public_id.split('/');
      let folder = '/uploads'; // default folder
      let fileName = public_id;

      if (pathParts.length > 1) {
        // If public_id contains folder structure like "temp/design_123"
        const folderPart = pathParts.slice(0, -1).join('/');
        folder = `/${folderPart}`;
        fileName = pathParts[pathParts.length - 1];
      }

      const result = await this.imagekit.upload({
        file: url,
        fileName: fileName,
        folder: folder,
      });

      return result;
    } catch (error) {
      console.error(
        'ImageKit upload from URL error:',
        JSON.stringify(error, null, 2),
      );
      throw error;
    }
  }

  async deletePhoto(fileId: string): Promise<boolean> {
    try {
      await this.imagekit.deleteFile(fileId);
      return true;
    } catch (error) {
      console.error('Error deleting image from ImageKit:', error);
      return false;
    }
  }

  // Additional utility method to get file details
  async getFileDetails(fileId: string): Promise<any> {
    try {
      return await this.imagekit.getFileDetails(fileId);
    } catch (error) {
      console.error('Error getting file details from ImageKit:', error);
      throw error;
    }
  }

  // Additional utility method to generate authentication parameters for client-side uploads
  getAuthenticationParameters(token?: string, expire?: number) {
    return this.imagekit.getAuthenticationParameters(token, expire);
  }

  // Method to find and delete file by path
  async deletePhotoByPath(filePath: string): Promise<boolean> {
    try {
      // Search for files with the given path
      const searchResult = await this.imagekit.listFiles({
        searchQuery: `name:"${filePath.split('/').pop()}"`,
        path: filePath.includes('/')
          ? filePath.substring(0, filePath.lastIndexOf('/'))
          : '',
      });

      if (searchResult && searchResult.length > 0) {
        // Find exact match by comparing the full path
        const exactMatch = searchResult.find((file: any) => {
          const fullPath = file.filePath.startsWith('/')
            ? file.filePath.substring(1)
            : file.filePath;
          return fullPath === filePath;
        });

        if (exactMatch) {
          await this.imagekit.deleteFile(exactMatch.fileId);
          console.log(
            `Successfully deleted file: ${filePath} (ID: ${exactMatch.fileId})`,
          );
          return true;
        }
      }

      console.log(`File not found for deletion: ${filePath}`);
      return false;
    } catch (error) {
      console.error('Error deleting file by path from ImageKit:', error);
      return false;
    }
  }
}
