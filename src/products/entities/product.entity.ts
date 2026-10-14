interface updateWitnoptions{
name?: string,
description?: string,
price?: number,
stock?: number,
categoria?: string

}  


export class Product {
// entity Es un modelo de datos que nos permite definir la estructura de lo que vamos a almacenar en la bd


constructor(
    public id: String, 
    public name: String, 
    public price: number, 
    public stock:number,
    public description? : string,
    public categoria?: string,

   
){}

updateWith({name, description, price,categoria, stock, }:updateWitnoptions ){
this.name = name ?? this.name;
this.description = description ?? this.description;
this.price = price ?? this.price;
this.categoria = categoria ?? this.categoria;
this.stock = stock ?? this.stock;


}

}
