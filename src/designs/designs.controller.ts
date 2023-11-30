import { Body, Controller, Get, Post } from '@nestjs/common';
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO } from './designs.dto';

@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Get('designs/:id')
  async getDesignById(id: string): Promise<DesignModel> {
    return this.designsService.design({ id });
  }

  @Get('designs')
  async getDesignsByUserId(): Promise<DesignModel[]> {
    return this.designsService.designs({});
  }

  @Post('designs')
  async createDesign(
    @Body() createDesignDTO: CreateDesignDTO,
  ): Promise<DesignModel> {
    const data = {
      name: createDesignDTO.name,
      canvasWidth: createDesignDTO.canvas.width,
      canvasHeight: createDesignDTO.canvas.height,
      background: createDesignDTO.canvas.background,
      elements: createDesignDTO.canvas.elements,
      fonts: createDesignDTO.canvas.fonts,
      userId: '',
    };
    return this.designsService.createDesign(data);
  }
}
