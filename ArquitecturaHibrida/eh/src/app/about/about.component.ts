import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ObjectAbout } from '../models/objectAbout';

@Component({
  selector: 'eh-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideInOut', [
      state('out', style({
        position: 'relative',
        width: '0px',
        height: '100%',
        float:'left',
        display: 'none',
        backgroundColor: 'black',
        opacity: 0,
        overflow: 'hidden',
        fontSize: '1vw'
      })),
      state('in', style({
        position: 'relative',
        left:'0',
        width: '88%',
        height: '100%',
        float:'left',
        backgroundColor: 'transparent',
        display: 'inherit',
        opacity: 1,
        overflow: 'auto',
        fontSize: '1vw'
      })),
      transition('in => out', animate('0ms ease')),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
    trigger('opcionSize', [
      state('out', style({
        position: 'relative',
        width: '10%',
        height: '100%',
        float:'left'
      })),
      state('in', style({
        position: 'relative',
        width: '80%',
        height: '100%',
        float:'left'
      })),
      transition('in => out', animate('0ms ease-in-out')),
      transition('out => in', animate('0ms ease-in-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }
  workerD="worker workerD"
  workerI="worker workerI";
  descripcion="visible";
  tipoDescripcion="estudioDesc";
  texto= "Descripcion del estudio...";
  urls:Array<string>;
  descripciones:Array<string>;
  urlImagen:string;
  imagenCss="imagen";
  panelMacuEfect: string;
  panelPaulaEfect: string;
  panelEstudioEfect: string;
  estudioIconArrow: String;
  macuIconArrow: String;
  paulaIconArrow: String;
  objectsAbout: Array<ObjectAbout>;
  
  ngOnInit() {
    this.urlImagen ="../../assets/images/casa1.jpg";
    this.panelMacuEfect = 'out';
    this.panelPaulaEfect = 'out';
    this.panelEstudioEfect = 'in';
    this.estudioIconArrow = 'fa fa-angle-left';
    this.macuIconArrow = 'fa fa-angle-right';
    this.paulaIconArrow = 'fa fa-angle-right';
    this.objectsAbout = 
    [
      new ObjectAbout ('1', 'Nuestra historia', 'Soy un estudio', null, '../../assets/images/casa1.jpg', 'in', 'fa fa-angle-left', 'opcionSeleccionado', 'contenedorSeleccionado', true),
      new ObjectAbout ('2', 'Arq. Maria Macarena Gimenez', 'Soy una Macu', null, '../../assets/images/Macu.jpg', 'out', 'fa fa-angle-right', 'opcion', 'contenedorVacio', true),
      new ObjectAbout ('3', 'Arq. Marta Paula Raquel Gatica', 'Soy una Paula', null, '../../assets/images/Paula.jpg', 'out', 'fa fa-angle-right', 'opcion', 'contenedorVacio', true)];

  }

  selectWorker(event) {
    if(event.target.id=="wi"){
      this.workerI="selected";
      this.workerD="unSelected";
      this.texto = "Soy Macu";
      this.descripcion="visible";
      this.tipoDescripcion="workerDesc";
      
    } else {
      this.workerD="selected";
      this.workerI="unSelected";
      this.texto = "Soy Raquel";
      this.descripcion="visible";
      this.tipoDescripcion="workerDesc";
    }
  }
  selectOpction(event) {
    for (let index = 0; index < this.objectsAbout.length; index++) {
      const element = this.objectsAbout[index];
      if(event==element.id){
        this.urlImagen = element.url;
      }
    }
    this.toggleHelpMenu(event);
    this.imagenCss = "imagen";
  }

  hoverOpcion() {
    this.imagenCss = "imagen imagenHover";
  }

  hoverOutOpcion() {
    this.imagenCss = "imagen";
  }

  toggleHelpMenu(event): void {
    console.log(event);
    for (let index = 0; index < this.objectsAbout.length; index++) {
      const element = this.objectsAbout[index];
      if(event==element.id){
        this.urlImagen = element.url;
        element.effect = element.effect === 'out' ? 'in' : 'out';
      } else {
        element.effect = 'out';
      }
      element.iconArrow = element.effect === 'out' ? 'fa fa-angle-right' : 'fa fa-angle-left';
      element.classCssOpcion = element.effect === 'out' ? 'opcion' : 'opcionSeleccionado';
      element.classCssContenedor = element.effect === 'out' ? 'contenedorVacio' : 'contenedorSeleccionado';
    }
  }

}
