import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service.js';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto.js';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto.js';

@Controller('videojuegos')
export class VideojuegosController {
  constructor(private readonly videojuegosService: VideojuegosService) {}

  @Post()
  create(@Body() createVideojuegoDto: CreateVideojuegoDto) {
    return this.videojuegosService.create(createVideojuegoDto);
  }

  @Get()
  findAll() {
    return this.videojuegosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.videojuegosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateVideojuegoDto: UpdateVideojuegoDto) {
    return this.videojuegosService.update(id, updateVideojuegoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.videojuegosService.remove(id);
  }
}
