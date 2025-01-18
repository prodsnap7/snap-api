export class CreateDesignDTO {
  id?: string;
  name: string;
  userId?: string;
  canvasWidth: number;
  canvasHeight: number;
  background: string;
  elements: any;
  groups: any;
  fonts?: string[];
  thumbnail?: string;
}
