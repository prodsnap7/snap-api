import { ApiProperty } from '@nestjs/swagger';

// This DTO is based on the FontResponse structure used in FontsService
export class FontDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the font' })
  fontId: number;

  @ApiProperty({ example: 'Roboto', description: 'Name of the font family' })
  family: string;

  @ApiProperty({
    example: 'google',
    description: 'Source of the font (e.g., google, custom)',
  })
  source: string;

  @ApiProperty({
    example: 'css_url_to_font_files',
    description: 'URL to the CSS file defining font faces',
    required: false,
  })
  webFontLink?: string;

  @ApiProperty({
    example: ['regular', 'italic', '700', '700italic'],
    description: 'Available font variants/weights',
    type: [String],
  })
  variants: string[];

  @ApiProperty({
    example: [
      'latin',
      'cyrillic-ext',
      'greek-ext',
      'vietnamese',
      'greek',
      'cyrillic',
      'latin-ext',
    ],
    description: 'Supported character subsets',
    type: [String],
  })
  subsets: string[];

  @ApiProperty({ example: '1.0', description: 'Version of the font' })
  version: string;

  @ApiProperty({
    example: '2022-09-15',
    description: 'Date the font was last modified',
  })
  lastModified: string;

  @ApiProperty({
    example: { regular: 'url', italic: 'url' },
    description: 'URLs to the font files for each variant',
    type: 'object',
    additionalProperties: { type: 'string' },
  })
  files: Record<string, string>;

  @ApiProperty({
    example: 'sans-serif',
    description: 'Category of the font (e.g., sans-serif, serif)',
  })
  category: string;

  @ApiProperty({
    example: 'normal',
    description: 'Kind of font (e.g., webfonts#webfont)',
  })
  kind: string;

  @ApiProperty({
    example: 'Menu text',
    description: 'Menu display name for the font',
    required: false,
  })
  menu?: string;

  @ApiProperty({
    example: true,
    description: 'Indicates if the font is a variable font',
    required: false,
  })
  variable?: boolean;

  @ApiProperty({
    example: { wght: { min: 100, max: 900, default: 400 } },
    description: 'Axes information for variable fonts',
    required: false,
    additionalProperties: true,
  })
  axes?: any; // Define a more specific type if axes structure is known
}

export class FontSearchResultDto {
  @ApiProperty({
    type: [FontDto],
    description: 'List of fonts matching the search criteria',
  })
  fonts: FontDto[];

  @ApiProperty({ example: 100, description: 'Total number of fonts found' })
  totalHits: number;

  @ApiProperty({
    example: 10,
    description: 'Total number of pages for the results',
  })
  totalPages: number;

  @ApiProperty({ example: 1, description: 'Current page number' })
  currentPage: number;
}
