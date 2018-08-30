import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ObjectAbout} from '../models/objectAbout';

@Component({
  selector: 'eh-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css'],
  animations: [
    trigger('slide', [
      state('0', style({
        height: '100%'
      })),
      state('1', style({
        height: '100%',
        transform: 'translateY(-100%)'
      })),
      state('2', style({
        height: '100%',
        transform: 'translateY(-200%)'
      })),
      transition('* => *', animate('500ms ease-in-out'))
    ])
  ]
})
export class About2Component implements OnInit {

  urlImagen:string;
  panelMacuEfect: string;
  panelPaulaEfect: string;
  panelEstudioEfect: string;
  estudioIconArrow: String;
  macuIconArrow: String;
  paulaIconArrow: String;
  objectsAbout: Array<ObjectAbout>;
  opcionSeleccionada: String;

  constructor() { 
    this.opcionSeleccionada = '';
    this.urlImagen ="../../assets/images/casa1.jpg";
    this.panelMacuEfect = 'out';
    this.panelPaulaEfect = 'out';
    this.panelEstudioEfect = 'in';
    this.estudioIconArrow = 'fa fa-angle-left';
    this.macuIconArrow = 'fa fa-angle-right';
    this.paulaIconArrow = 'fa fa-angle-right';
    this.objectsAbout = 
    [
      new ObjectAbout ('1', 'Nuestra historia', 'Soy un estudio', null, '../../assets/images/casa1.jpg', 'in', 'fa fa-angle-left', '', '', true),
      new ObjectAbout ('2', 'Arq. Maria Macarena Gimenez', 'Desde pequeña siempre fui una Macu, aunque en aquel entonces solo era una Macu joven, cuenta la leyenda que la Macu al levantarse siempre pasaba un par de horas con cara de culo, actualmente solo se encuentra como perdida al despertarse, igualmente es gracioso verla en ese estado.'
      , null, '../../assets/images/Macu.jpg', 'out', 'fa fa-angle-right', '', '', false),
      new ObjectAbout ('3', 'Arq. Marta Paula Raquel Gatica', 'Soy una Paula', null, '../../assets/images/Paula.jpg', 'out', 'fa fa-angle-right', '', '', false)];

  }

  ngOnInit() {
  }

  cambiarOpcion(opcion, event) {
    console.log(event);
    if (opcion.id == 1) {
      this.opcionSeleccionada = '0';
    } else if (opcion.id == 2) {
      this.opcionSeleccionada = '1';
    } else if (opcion.id == 3) {
      this.opcionSeleccionada = '2';
    } else {
      this.opcionSeleccionada = '0';
    }
    console.log(event.target.className);
    this.objectsAbout.forEach(element => {
      element.isSelected = false;
    });
    opcion.isSelected = true;
  }



}
