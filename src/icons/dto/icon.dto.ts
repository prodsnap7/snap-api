import { ApiProperty } from '@nestjs/swagger';

export class IconDto {
  @ApiProperty({
    example: 'icon-123',
    description: 'The unique identifier of the icon',
  })
  id: string;

  @ApiProperty({ example: 'User Icon', description: 'The name of the icon' })
  name: string;

  @ApiProperty({
    example: 'https://example.com/icons/user.svg',
    description: 'The URL of the icon SVG or image',
  })
  url: string;

  // Add any other relevant properties your icon objects might have
  // For example:
  // @ApiProperty({ example: ['interface', 'user', 'avatar'], description: 'Tags associated with the icon', isArray: true, type: String })
  // tags?: string[];

  // @ApiProperty({ example: 'FontAwesome', description: 'The library or source of the icon' })
  // library?: string;
}
