export class CreateTemplateDto {
  name: string;
  canvasWidth: number;
  canvasHeight: number;
  background: string;
  elements: any;
  groups: any;
  fonts?: string[];
  thumbnail?: string;
  tags: string[];
}

export class TemplateResponseDto {
  id: string;
  name: string;
  userId: string;
  canvasWidth: number;
  canvasHeight: number;
  background: string;
  elements: any;
  groups: any;
  fonts: string[];
  thumbnail: string;
  tags: string[];
  createdAt: Date;
  useCount: number;
}
