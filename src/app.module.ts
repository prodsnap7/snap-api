import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignsModule } from './designs/designs.module';

@Module({
  imports: [DesignsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
