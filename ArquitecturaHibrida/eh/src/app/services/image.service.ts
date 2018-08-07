import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class ImageService {

  images :  Image []= [
    new Image('slide.1', 'Primera imagen', 'Descripcion primera imagen' , 'casa1.jpg', '../../assets/images/casa1.jpg'),
    new Image('slide.2', 'Segunda imagen', 'Descripcion segunda imagen' , 'casaArbol.jpg', '../../assets/images/casaArbol.jpg'),
    new Image('slide.3', 'Tercera imagen', 'Descripcion tercera imagen' , 'Edificio1.jpg', '../../assets/images/casa1.jpg'),
    new Image('slide.4', 'Cuarta imagen', 'Descripcion cuarta imagen' , 'Edificio2.jpg', '../../assets/images/casaArbol.jpg'),
    new Image('5', 'Quinta imagen', 'Descripcion quinta imagen' , 'ellisMiller1.jpg', '../../assets/images/casa1.jpg'),
    new Image('6', 'Sexta imagen', 'Descripcion sexta imagen' , 'casa1.jpg', '../../assets/images/casaArbol.jpg'),
    new Image('7', 'Quinta imagen', 'Descripcion quinta imagen' , 'ellisMiller1.jpg', '../../assets/images/casa1.jpg'),
    new Image('8', 'Sexta imagen', 'Descripcion sexta imagen' , 'casa1.jpg', '../../assets/images/casaArbol.jpg'), 
  ];
  slides :  Image []= [
    new Image('slide.1', 'Primera imagen', 'Descripcion primera imagen' , 'casa1.jpg', '../../assets/images/casa1.jpg'),
    new Image('slide.2', 'Segunda imagen', 'Descripcion segunda imagen' , 'casaArbol.jpg', '../../assets/images/casaArbol.jpg'),
    new Image('slide.3', 'Tercera imagen', 'Descripcion tercera imagen' , 'Edificio1.jpg', '../../assets/images/casa1.jpg'),
    new Image('slide.4', 'Cuarta imagen', 'Descripcion cuarta imagen' , 'Edificio2.jpg', '../../assets/images/casaArbol.jpg'),
  ];

  constructor() { }

  getImages() {
    return this.images;
  }

  getSlidesImages() {
    return this.slides;
  }

}
