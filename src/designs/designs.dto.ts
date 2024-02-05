export class CreateDesignDTO {
  id?: string;
  name: string;
  userId?: string;
  canvasWidth: number;
  canvasHeight: number;
  background: string;
  elements: string;
  fonts?: string[];
  thumbnail?: string;
}
