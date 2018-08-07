import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'eh-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  images: Image[] = [];


  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.images= this.imageService.getSlidesImages();
  }

}
