import { PartialType } from '@nestjs/mapped-types';
import { CreateVideojuegoDto } from './create-videojuego.dto.js';

// PartialType hace que todas las propiedades del DTO de creación
// puedan ser opcionales cuando queremos actualizar un videojuego.
export class UpdateVideojuegoDto extends PartialType(CreateVideojuegoDto) {}
