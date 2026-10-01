import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateVideojuegoDto } from './dto/create-videojuego.dto.js';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto.js';
import { Videojuego } from './entities/videojuego.entity.js';

import { v4 as Uuidv4 } from 'uuid';

@Injectable()
export class VideojuegosService {

  // Aqui guardaremos temporalmente los videojuegos
  private videojuegos: Videojuego[] = [];

  // Crea un videojuego nuevo y genera automaticamente su UUID
  create(createVideojuegoDto: CreateVideojuegoDto) {

    const {name,genre,price,platform,stock,} = createVideojuegoDto;

    const newVideojuego = new Videojuego(
      Uuidv4(),
      name,
      genre,
      price,
      platform,
      stock,
    );

    this.videojuegos.push(newVideojuego);

    return newVideojuego;
  }

  // Devuelve todos los videojuegos registrados
  findAll() {

    return this.videojuegos;
  }

  // Busca un videojuego por medio de su UUID
  findOne(id: string): Videojuego {

    const videojuego = this.videojuegos.find(
      (videojuego) => videojuego.id === id,
    );

    // Si no encontramos el videojuego, mandamos un error 404
    if (!videojuego) {

      throw new NotFoundException(
        `Videojuego con id ${id} no encontrado`,
      );
    }

    return videojuego;
  }

  // Actualiza los datos del videojuego
  update(
    id: string,
    updateVideojuegoDto: UpdateVideojuegoDto,
  ) {

    const {name,genre,price,platform,stock,} = updateVideojuegoDto;

    // Primero buscamos el videojuego
    const videojuego = this.findOne(id);

    // Después modificamos solamente los datos recibidos
    videojuego.updateWith({
      name,
      genre,
      price,
      platform,
      stock,
    });

    return videojuego;
  }

  // Elimina un videojuego utilizando su UUID
  remove(id: string) {

    // Primero verificamos que exista.
    const videojuego = this.findOne(id);

    // Conservamos todos los videojuegos excepto el que queremos eliminar
    this.videojuegos = this.videojuegos.filter(
      (videojuego) => videojuego.id !== id,
    );

    return {
      status: 200,
      msg: 'Videojuego eliminado con exito',
      videojuego: videojuego,
    };
  }
}