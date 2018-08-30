import { Component, OnInit } from '@angular/core';
import { ObjectGallery } from '../../models/ObjectGallery';

@Component({
  selector: 'eh-proyect-detail',
  templateUrl: './proyect-detail.component.html',
  styleUrls: ['./proyect-detail.component.css']
})
export class ProyectDetailComponent implements OnInit {
  objGallery:ObjectGallery;
  id:string;
  constructor(id:string) {
    this.id = id;
    console.log(id);
    /*obj:ObjectGallery
    this.objGallery= obj;*/
   }

  ngOnInit() {
  }

}
