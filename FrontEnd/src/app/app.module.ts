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
import { LoginService } from './services/login.service';
import { GuardService } from './services/guard.service';

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

import { InfoperfilComponent } from './components/shared/infoperfil/infoperfil.component';
import { SeguidosComponent } from './components/seguidos/seguidos.component';
import { CantidadletrasPipe } from './pipes/cantidadletras.pipe';




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
    InfoperfilComponent,
    SeguidosComponent,
    CantidadletrasPipe
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
    LoginService,
    SeguidosService,
    SeguidoresService,
    GuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
