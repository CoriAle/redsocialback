import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { PublicacionComponent } from './components/publicacion/publicacion.component';

import { PublicacionesService } from './services/publicaciones.service';
import { SeguidosService } from './services/seguidos.service';
import { SeguidoresService } from './services/seguidores.service';
import { PerfilusuarioService } from './services/perfilusuario.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { MiniPerfilComponent } from './components/shared/mini-perfil/mini-perfil.component';
import { PerfilpequeComponent } from './components/shared/perfilpeque/perfilpeque.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { CartasseguidoresComponent } from './components/cartasseguidores/cartasseguidores.component';
import { HomeComponent } from './components/home/home.component';
import { UrlPipe } from './pipes/url.pipe';
import { SeguidoresComponent } from './components/seguidores/seguidores.component';
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { PortadagrandeComponent } from './components/shared/portadagrande/portadagrande.component';

import { CallbackComponent } from './components/callback/callback.component';
import { InfoperfilComponent } from './components/shared/infoperfil/infoperfil.component';
import { SeguidosComponent } from './components/seguidos/seguidos.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PublicacionComponent,
    MiniPerfilComponent,
    PerfilpequeComponent,
    ComentariosComponent,
    CartasseguidoresComponent,
    HomeComponent,
    UrlPipe,
    SeguidoresComponent,
    LoginComponent,
    PortadagrandeComponent,
    CallbackComponent,
    InfoperfilComponent,
    SeguidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    PublicacionesService,
    PerfilusuarioService,
    AuthService,
    AuthGuardService,
    SeguidosService,
    SeguidoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
