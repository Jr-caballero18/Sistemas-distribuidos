import { Module } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service.js';
import { VideojuegosController } from './videojuegos.controller.js';

@Module({
  controllers: [VideojuegosController],
  providers: [VideojuegosService],
})
export class VideojuegosModule {}
