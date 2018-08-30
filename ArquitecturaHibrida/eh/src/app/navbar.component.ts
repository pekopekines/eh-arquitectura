import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  aboutCss='link';
  galleryCss='link';
  contactCss='link';

  constructor() {
    
   }

  ngOnInit() {
  }

  selectLink(event) {
    if(event=='about') {
      this.aboutCss='linkSelected';
      this.galleryCss='link';
      this.contactCss='link'; 
    } else if (event =='gallery') {
      this.aboutCss='link';
      this.galleryCss='linkSelected';
      this.contactCss='link'; 
    } else if (event =='contact') {
      this.aboutCss='link';
      this.galleryCss='link';
      this.contactCss='linkSelected'; 
  } else {
    this.aboutCss='link';
    this.galleryCss='link';
    this.contactCss='link';
  }
}

}
