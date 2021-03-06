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
import { SingupService } from './services/singup.service';
import { Registro2Service } from './services/registro2.service';

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
import { SingupComponent } from './components/singup/singup.component';
import { Registro2Component } from './components/registro2/registro2.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';




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
    CantidadletrasPipe,
    SingupComponent,
    Registro2Component,
    CarrouselComponent
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
    GuardService,
    SingupService,
    Registro2Service

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
