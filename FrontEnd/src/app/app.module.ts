import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MiniPerfilComponent } from './components/shared/mini-perfil/mini-perfil.component';
import { AquienSeguirComponent } from './components/shared/aquien-seguir/aquien-seguir.component';
import { PerfilpequeComponent } from './components/shared/perfilpeque/perfilpeque.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MiniPerfilComponent,
    AquienSeguirComponent,
    PerfilpequeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
