import { ApiProperty } from '@nestjs/swagger';

export class CreateDesignDTO {
  @ApiProperty({
    example: 'My New Design',
    description: 'Name of the design',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 800,
    description: 'Width of the design canvas in pixels',
    required: true,
  })
  canvasWidth: number;

  @ApiProperty({
    example: 600,
    description: 'Height of the design canvas in pixels',
    required: true,
  })
  canvasHeight: number;

  @ApiProperty({
    example: '#FFFFFF',
    description: 'Background color of the design',
    required: true,
  })
  background: string;

  @ApiProperty({
    description: 'Array of design elements',
    type: 'array',
    items: { type: 'object', additionalProperties: true },
    required: true,
  })
  elements: any; // Consider creating a more specific DTO for elements if structure is known

  @ApiProperty({
    description: 'Array of design groups',
    type: 'array',
    items: { type: 'object', additionalProperties: true },
    required: true,
  })
  groups: any; // Consider creating a more specific DTO for groups if structure is known

  @ApiProperty({
    example: ['Arial', 'Roboto'],
    description: 'List of fonts used in the design',
    required: false,
    type: [String],
  })
  fonts?: string[];

  // id, userId, and thumbnail are typically not part of CreateDTO as they are set by the backend or derived.
  // If they are indeed part of the creation payload from the client, uncomment and adjust.
  // @ApiProperty({ example: 'clqkf3zrq0000c9p77t8b4z8f', description: 'Optional client-provided ID', required: false })
  // id?: string;

  // @ApiProperty({ example: 'user_2aPqJ9xRbA3xW8n0Y6ZcE1bVfKt', description: 'Optional client-provided user ID', required: false })
  // userId?: string;

  // @ApiProperty({ example: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...', description: 'Optional client-provided thumbnail', required: false })
  // thumbnail?: string;
}
