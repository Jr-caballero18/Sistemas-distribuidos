interface UpdateWithOptions {
  name?: string;
  genre?: string;
  price?: number;
  platform?: string;
  stock?: number;
}

export class Videojuego {

  // La entity representa la estructura que tendrá
  // cada videojuego dentro de nuestra aplicación.
  constructor(
    public id: string,
    public name: string,
    public genre: string,
    public price: number,
    public platform: string,
    public stock: number,
  ) {}

  // Este método permite modificar únicamente los datos
  // que recibamos en una actualización.
  updateWith({
    name,
    genre,
    price,
    platform,
    stock,
  }: UpdateWithOptions) {

    this.name = name ?? this.name;
    this.genre = genre ?? this.genre;
    this.price = price ?? this.price;
    this.platform = platform ?? this.platform;
    this.stock = stock ?? this.stock;
  }
}