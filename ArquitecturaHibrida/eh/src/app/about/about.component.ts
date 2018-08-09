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
        backgroundColor: 'black',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('in', style({
        position: 'relative',
        left:'0',
        width: '330px',
        height: '450px',
        float:'left',
        backgroundColor: 'transparent',
        display: 'inherit',
        opacity: 1,
        overflow: 'auto'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
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
  ngOnInit() {
    this.urls = ["../../assets/images/Macu.jpg", "../../assets/images/Paula.jpg"];
    this.descripciones = ["Somos un estudio enfocado...", "Soy Macu", "Soy Paula"];
    this.urlImagen ="../../assets/images/casa1.jpg";
    this.panelMacuEfect = 'out';
    this.panelPaulaEfect = 'out';
    this.panelEstudioEfect = 'in';
    this.estudioIconArrow = 'fa fa-angle-left';
    this.macuIconArrow = 'fa fa-angle-right';
    this.paulaIconArrow = 'fa fa-angle-right';
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
    if(event=="macu"){
      this.urlImagen = "../../assets/images/Macu.jpg";
    } if (event=="paula")  {
      this.urlImagen = "../../assets/images/Paula.jpg";
    } else if (event=="estudio"){
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
    console.log(event);
    if(event=="macu"){
      this.panelMacuEfect = this.panelMacuEfect === 'out' ? 'in' : 'out';
      this.panelPaulaEfect = 'out';
      this.panelEstudioEfect = 'out';
    } if (event=="paula")  {
      this.panelPaulaEfect = this.panelPaulaEfect === 'out' ? 'in' : 'out';
      this.panelMacuEfect = 'out';
      this.panelEstudioEfect = 'out';
    } else if (event=="estudio"){
      this.panelEstudioEfect = this.panelEstudioEfect === 'out' ? 'in' : 'out';
      this.panelPaulaEfect = 'out';
      this.panelMacuEfect = 'out';
    }
    this.estudioIconArrow = this.panelEstudioEfect === 'out' ? 'fa fa-angle-right' : 'fa fa-angle-left';
    this.macuIconArrow = this.panelMacuEfect === 'out' ? 'fa fa-angle-right' : 'fa fa-angle-left';
    this.paulaIconArrow = this.panelPaulaEfect === 'out' ? 'fa fa-angle-right' : 'fa fa-angle-left';
  }

}
