import {PrincipalComponent} from "./principal/principal.component";
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { About2Component } from './about2/about2.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { ProyectDetailComponent } from "./gallery/proyect-detail/proyect-detail.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'proyectdetail', component: ProyectDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about2', component: About2Component},
    {path: 'contact', component: ContactComponent}
  ];

  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);