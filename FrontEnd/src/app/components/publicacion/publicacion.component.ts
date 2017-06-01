import { Component, OnInit } from '@angular/core';
import { PublicacionesService, Publicacion} from '../../services/publicaciones.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {

	publicaciones:Publicacion[];
  constructor(private _publicacionesService: PublicacionesService) { }

  ngOnInit() {
  	this.publicaciones = this._publicacionesService.getPublicaciones();
  	console.log(this.publicaciones);

  }

}
