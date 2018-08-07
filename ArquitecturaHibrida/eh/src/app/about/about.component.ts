import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'eh-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideInOut', [
      state('out', style({
        position: 'relative',
        width: '0px',
        height: '450px',
        float:'left',
        display: 'none',
        backgroundColor: 'white',
        overflow: 'hidden'
      })),
      state('in', style({
        position: 'relative',
        left:'0',
        width: '330px',
        height: '450px',
        float:'left',
        backgroundColor: 'white',
        display: 'inherit',
        overflow: 'auto'
      })),
      transition('in => out', animate('0ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
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
  imagenCss="imagen ";
  panelMacuEfect: string;
  panelPaulaEfect: string;
  panelEstudioEfect: string;

  ngOnInit() {
    this.urls = ["../../assets/images/Macu.jpg", "../../assets/images/Paula.jpg"];
    this.descripciones = ["Somos un estudio enfocado...", "Soy Macu", "Soy Paula"];
    this.urlImagen ="../../assets/images/casa1.jpg";
    this.panelMacuEfect = 'out';
    this.panelPaulaEfect = 'out';
    this.panelEstudioEfect = 'in';
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
    if(event.target.id=="macu"){
      this.urlImagen = "../../assets/images/Macu.jpg";
    } if (event.target.id=="paula")  {
      this.urlImagen = "../../assets/images/Paula.jpg";
    } else if (event.target.id=="estudio"){
      this.urlImagen = "../../assets/images/casa1.jpg";
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
    if(event.target.id=="macu" && this.panelMacuEfect !=  'in'){
      this.panelMacuEfect = this.panelMacuEfect === 'out' ? 'in' : 'out';
      this.panelPaulaEfect = 'out';
      this.panelEstudioEfect = 'out';
    } if (event.target.id=="paula" && this.panelPaulaEfect !=  'in')  {
      this.panelPaulaEfect = this.panelPaulaEfect === 'out' ? 'in' : 'out';
      this.panelMacuEfect = 'out';
      this.panelEstudioEfect = 'out';
    } else if (event.target.id=="estudio" && this.panelEstudioEfect !=  'in'){
      this.panelEstudioEfect = this.panelEstudioEfect === 'out' ? 'in' : 'out';
      this.panelPaulaEfect = 'out';
      this.panelMacuEfect = 'out';
    }
  }

}
