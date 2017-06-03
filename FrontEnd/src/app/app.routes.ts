import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeguidoresComponent } from './components/seguidores/seguidores.component';
import { SeguidosComponent } from './components/seguidos/seguidos.component';
import { LoginComponent } from './components/login/login.component';
const APP_ROUTES: Routes = [
  { path: 'home',
    component: HomeComponent//,
  // canActivate: [AuthGuardService]
	},
  { path: 'seguidores', component: SeguidoresComponent },
  { path: 'seguidos', component: SeguidosComponent },

  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
