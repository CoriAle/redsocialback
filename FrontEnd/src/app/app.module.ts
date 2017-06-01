import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
<<<<<<< HEAD
import { PublicacionComponent } from './components/publicacion/publicacion.component';

import { PublicacionesService } from './services/publicaciones.service';
=======
import { MiniPerfilComponent } from './components/shared/mini-perfil/mini-perfil.component';
import { AquienSeguirComponent } from './components/shared/aquien-seguir/aquien-seguir.component';
import { PerfilpequeComponent } from './components/shared/perfilpeque/perfilpeque.component';
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD
    PublicacionComponent
=======
    MiniPerfilComponent,
    AquienSeguirComponent,
    PerfilpequeComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PublicacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
