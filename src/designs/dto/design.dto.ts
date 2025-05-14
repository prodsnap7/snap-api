import { ApiProperty } from '@nestjs/swagger';

// Assuming DesignModel has these fields. Adjust as necessary.
export class DesignDto {
  @ApiProperty({
    example: 'clqkf3zrq0000c9p77t8b4z8f',
    description: 'Unique identifier for the design',
  })
  id: string;

  @ApiProperty({
    example: 'user_2aPqJ9xRbA3xW8n0Y6ZcE1bVfKt',
    description: 'Identifier of the user who owns the design',
  })
  userId: string;

  @ApiProperty({
    example: 'My Awesome T-Shirt',
    description: 'Name of the design',
  })
  name: string;

  @ApiProperty({
    example: '{\"objects\":[],\"background\":\"#ffffff\"}',
    description: 'JSON string or object representing the design canvas data',
    type: 'object',
    additionalProperties: true,
  })
  data: any; // Or a more specific type if the structure of 'data' is known and consistent

  @ApiProperty({
    example: 'https://example.com/thumbnails/design1.jpg',
    description: 'URL of the design thumbnail',
    required: false,
  })
  thumbnailUrl?: string;

  @ApiProperty({
    example: '2023-05-15T10:00:00.000Z',
    description: 'Timestamp of creation',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023-05-16T12:00:00.000Z',
    description: 'Timestamp of last update',
  })
  updatedAt: Date;
}
