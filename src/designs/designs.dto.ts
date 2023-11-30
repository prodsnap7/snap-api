export class CreateDesignDTO {
  name: string;
  thumbnail: string;
  canvas: {
    width: number;
    height: number;
    background: string;
    elements: string;
    fonts: string[];
  };
}
