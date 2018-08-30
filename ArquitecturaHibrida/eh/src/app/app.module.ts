import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './services/image.service';
import {routes} from './app.routes';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageDetailComponent } from './gallery/image-list/image-detail.component';
import { ProyectDetailComponent } from './gallery/proyect-detail/proyect-detail.component';
import { NavbarComponent } from './navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer.component';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { About2Component } from './about2/about2.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageListComponent,
    ImageDetailComponent,
    ProyectDetailComponent,
    NavbarComponent,
    PrincipalComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    About2Component
  ],
  imports: [
    routes,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
