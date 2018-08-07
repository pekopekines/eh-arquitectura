import {PrincipalComponent} from "./principal/principal.component";
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModuleWithProviders } from "@angular/compiler/src/core";


const appRoutes: Routes = [
    {path: '', redirectTo: '/principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
  ];

  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);