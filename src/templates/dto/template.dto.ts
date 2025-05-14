import { ApiProperty } from '@nestjs/swagger';

export class TemplateDto {
  @ApiProperty({
    example: 'tmpl_abc123',
    description: 'Unique identifier for the template',
  })
  id: string;

  @ApiProperty({
    example: 'My Brochure Template',
    description: 'Name of the template',
  })
  name: string;

  @ApiProperty({
    example: 'user_xyz789',
    description: 'Identifier of the user who created the template',
  })
  userId: string;

  @ApiProperty({
    example: 1200,
    description: 'Width of the template canvas in pixels',
  })
  canvasWidth: number;

  @ApiProperty({
    example: 900,
    description: 'Height of the template canvas in pixels',
  })
  canvasHeight: number;

  @ApiProperty({
    example: '#EFEFEF',
    description: 'Background color or properties of the template',
  })
  background: string;

  @ApiProperty({
    description: 'Array of template elements',
    type: 'object',
    additionalProperties: true,
  })
  elements: any; // Consider a specific DTO if structure is known

  @ApiProperty({
    description: 'Array of template groups',
    type: 'object',
    additionalProperties: true,
  })
  groups: any; // Consider a specific DTO if structure is known

  @ApiProperty({
    example: ['Open Sans', 'Lato'],
    description: 'List of fonts used in the template',
    type: [String],
  })
  fonts: string[];

  @ApiProperty({
    example: 'https://example.com/thumbnails/template_abc123.jpg',
    description: 'URL of the template thumbnail',
  })
  thumbnail: string;

  @ApiProperty({
    example: ['brochure', 'marketing', 'modern'],
    description: 'Tags associated with the template',
    type: [String],
  })
  tags: string[];

  @ApiProperty({
    example: '2023-06-01T10:00:00.000Z',
    description: 'Timestamp of template creation',
  })
  createdAt: Date;

  @ApiProperty({
    example: 150,
    description: 'Number of times the template has been used',
  })
  useCount: number;
}
