import { ApiProperty } from '@nestjs/swagger';

export class PhotoDto {
  @ApiProperty({
    example: 'photo-xyz-789',
    description: 'The unique identifier of the photo',
  })
  id: string;

  @ApiProperty({
    example: 'https://images.pexels.com/photos/12345/pexels-photo-12345.jpeg',
    description: 'The URL of the photo',
  })
  url: string;

  @ApiProperty({
    example: 'https://www.pexels.com/photo/a-beautiful-landscape-12345/',
    description: 'The Pexels URL of the photo',
  })
  pexelsUrl?: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the photographer',
  })
  photographer?: string;

  @ApiProperty({
    example: 'https://www.pexels.com/@john-doe',
    description: 'The Pexels profile URL of the photographer',
  })
  photographerUrl?: string;

  @ApiProperty({
    example: 'A stunning landscape with mountains and a lake.',
    description: 'A descriptive alt text for the photo',
  })
  alt?: string;

  @ApiProperty({
    example: { small: 'url', medium: 'url', large: 'url' },
    description: 'Various sizes of the photo',
  })
  src?: Record<string, string>; // Assuming src is an object with different size URLs
}
