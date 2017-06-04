import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeguidoresComponent } from './components/seguidores/seguidores.component';
import { SeguidosComponent } from './components/seguidos/seguidos.component';
import { LoginComponent } from './components/login/login.component';
import { GuardService } from './services/guard.service';

const APP_ROUTES: Routes = [
  { path: 'home',  
  	component: HomeComponent,
  	canActivate: [GuardService]

  },
  { path: 'seguidores', 
  	component: SeguidoresComponent,
  	canActivate: [GuardService]
  },
  { path: 'seguidos', component: SeguidosComponent,
  	canActivate: [GuardService] 
  },

  { path: 'login', component: LoginComponent
   },
  { path: '**', pathMatch: 'full', redirectTo: 'home',
  	canActivate: [GuardService]}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
