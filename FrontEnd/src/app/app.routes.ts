import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeguidoresComponent } from './components/seguidores/seguidores.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'seguidores', component: SeguidoresComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
