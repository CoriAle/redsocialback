import { Component, OnInit } from '@angular/core';
import { PerfilusuarioService,usuario } from '../../../services/perfilusuario.service';
@Component({
  selector: 'app-infoperfil',
  templateUrl: './infoperfil.component.html',
  styles: []
})
export class InfoperfilComponent implements OnInit {
  perfil:usuario;
  constructor(
    private _usuario:PerfilusuarioService

  ) { }

  ngOnInit() {
    this.perfil = this._usuario.getInfo();
  }

}
