import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { PublicacionComponent } from './components/publicacion/publicacion.component';

import { PublicacionesService } from './services/publicaciones.service';
import { PerfilusuarioService } from './services/perfilusuario.service';

import { MiniPerfilComponent } from './components/shared/mini-perfil/mini-perfil.component';
import { PerfilpequeComponent } from './components/shared/perfilpeque/perfilpeque.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { CartasseguidoresComponent } from './components/cartasseguidores/cartasseguidores.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PublicacionComponent,
    MiniPerfilComponent,
    PerfilpequeComponent,
    ComentariosComponent,
    CartasseguidoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PublicacionesService,
    PerfilusuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
