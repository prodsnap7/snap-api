import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO } from './designs.dto';

@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Get(':id')
  async getDesignById(@Param('id') id: string): Promise<DesignModel> {
    return this.designsService.design({ id });
  }

  @Get()
  async getDesignsByUserId(@Req() req): Promise<DesignModel[]> {
    const { user } = req;
    return this.designsService.designs({ where: { userId: user.user_id } });
  }

  @Post()
  async createDesign(
    @Req() req,
    @Body() createDesignDTO: CreateDesignDTO,
  ): Promise<DesignModel> {
    const { user } = req;
    const data = {
      ...createDesignDTO,
      userId: user.user_id,
    };
    return this.designsService.createDesign(data);
  }

  @Put(':id')
  async updateDesign(
    @Req() req,
    @Param('id') id: string,
    @Body() updateDesign: Partial<CreateDesignDTO>,
  ): Promise<DesignModel> {
    return this.designsService.updateDesign({
      where: { id },
      data: updateDesign,
    });
  }
}
