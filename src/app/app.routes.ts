import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NosotrosPageComponent } from './page/nosotros-page/nosotros-page.component';
import { ContactenosPageComponent } from './page/contactenos-page/contactenos-page.component';
import { PublicacionesComponent } from './page/publicaciones-page/publicaciones/publicaciones.component';
import { PublicacionesPageComponent } from './page/publicaciones-page/publicaciones-page.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomePageComponent
    },
    {
        path:'nosotros',
        component: NosotrosPageComponent
    },
    {
        path:'nosotros/contactenos',
        component: ContactenosPageComponent
    },
    {
        path:'publicaciones',
        component:PublicacionesPageComponent
    }
];
