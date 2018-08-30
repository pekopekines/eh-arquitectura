import { Component, OnInit } from '@angular/core';
import { ObjectGallery } from '../models/ObjectGallery';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'eh-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('slide', [
      state('hide', style({
        height: '0%',
        display: 'none',
        opacity: '0'
      })),
      state('showGrande', style({
        height: '10%'
      })),
      state('showChico', style({
        height: '20%'
      })),
      transition('* => *', animate('600ms ease-in-out'))
    ])
  ]
})
export class GalleryComponent implements OnInit {

  objectsGallery: Array<ObjectGallery>;
  topSubfila1:number;
  topSubfila2:number;
  rightPosition:number;
  leftPosition:number;
  cantItemPorFila:number;
  topBase:number;
  imgSlide:string;


  constructor(private router: Router) { 
    this.objectsGallery = 
    [
      new ObjectGallery ('1', 'Gallery 1', '', null, '../../assets/images/gallery1.jpg',false),
      new ObjectGallery ('2', 'Gallery 2', '', null, '../../assets/images/gallery2.jpg',false),
      new ObjectGallery ('3', 'Gallery 3', '', null, '../../assets/images/gallery3.jpg',false),
      
      new ObjectGallery ('4', 'Gallery 4', '', null, '../../assets/images/gallery4.jpg',false),
      new ObjectGallery ('5', 'Gallery 5', '', null, '../../assets/images/gallery5.jpg',false),
      new ObjectGallery ('6', 'Gallery 6', '', null, '../../assets/images/gallery6.jpg',false),
      new ObjectGallery ('7', 'Gallery 7', '', null, '../../assets/images/gallery7.jpg',false),
    
    ];
    this.topSubfila1= 15;
    this.topSubfila2= 30;
    this.rightPosition= 65;
    this.leftPosition=2;
    this.cantItemPorFila = 3;
    this.topBase = -49.7;
    this.imgSlide = "hide";
  }

  ngOnInit() {
  }
  
  onCreateImage (event) {
    console.log(event);
  }

  calcularTopPosition(index) {
    const auxIndex = index +1;
    const mod= auxIndex % this.cantItemPorFila;
    const modInv= this.cantItemPorFila - mod ;
    const div = auxIndex / this.cantItemPorFila;
    var fila =1;
    if (mod === 0) {
      fila = div;
    } else {
      fila = div + (modInv/this.cantItemPorFila);
    }
    
    if (auxIndex ===1) {
      console.log (' 0 ' + auxIndex);
      return '0%';
    } else {
      console.log (' -64 ' + auxIndex);
      return '-64%';
    }
  }

  calcularLeftPosition (index) {
    const auxIndex = index +1;
    const isImagenGrande = (auxIndex %  this.cantItemPorFila) === 1 ? true : false;
    if (isImagenGrande) {
      return this.leftPosition + '%';
    } else {
      return this.rightPosition + '%';
    }
  }

  isGrande (index) {
    const auxIndex = index +1;
    return (auxIndex %  this.cantItemPorFila) === 1 ? true : false;
  }

  mostrarTextoImagen (obj) {
    console.log(obj);
    obj.slideText = obj.slideText ? false : true;
  }

  getTotalHeight () {
    const size = this.objectsGallery.length;
    const mod= size % this.cantItemPorFila;
    var modInv= this.cantItemPorFila - mod;
    const div = size / this.cantItemPorFila;
    var filas =1;
    if (mod===0) {
      filas = div;
    } else {
      filas = div + (mod/this.cantItemPorFila);
    }
    return (filas * 45) + '%';
  }

  openDetail(obj) {
    console.log(obj);
    this.router.navigate(['/proyectdetail', obj.id]);
  }

}
