import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Design as DesignModel } from '@prisma/client';
import { DesignsService } from './designs.service';
import { CreateDesignDTO } from './designs.dto';
import { Public } from 'src/lib/public-modifier';

@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Public()
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
    @Param('id') id: string,
    @Query('generateThumbnail') generateThumbnail: boolean = false,
    @Body() updateDesign: Partial<CreateDesignDTO>,
  ): Promise<DesignModel> {
    return this.designsService.updateDesign(
      {
        where: { id },
        data: updateDesign,
      },
      generateThumbnail,
    );
  }

  @Get(':id/download')
  async downloadDesign(@Param('id') id: string, @Res() res: FastifyReply) {
    const imageBuffer = await this.designsService.downloadDesign(id);

    if (!imageBuffer) {
      res.status(404);
      res.send({ message: 'Unable to download design' });
      return;
    }
    res.header('Content-Type', 'image/jpeg');

    // Send the buffer as the response
    res.send(imageBuffer);
  }
}
