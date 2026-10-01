import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CreateVideojuegoDto {

    // Nombre que tendrá el videojuego
    @IsString() //Comprueba que sea texto
    name!: string;

    // Género al que pertenece el videojuego
    @IsString()
    genre!: string;

    // Precio del videojuego
    @IsNumber()// Comprueba que sea un numero
    @Type(() => Number) // Cambia el formato dependiendo de lo que reciba
    @Min(0)
    price!: number;

    // Plataforma donde se puede jugar
    @IsString()
    platform!: string;

    // Cantidad de videojuegos disponibles
    @IsInt()
    @Type(() => Number)
    @Min(0)
    stock!: number;


    //El dto sirve para definir que datos puede recibir la API por ejemplo
    /*
    
    {
      "name": "Gta 6",
      "genre": "Acción",
      "price": 1900,
      "platform": "Xbox series x/s",
      "stock": 10
     }
    
    */

}