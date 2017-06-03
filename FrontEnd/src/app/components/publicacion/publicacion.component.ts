import { Component, OnInit } from '@angular/core';
import { PublicacionesService, Publicacion} from '../../services/publicaciones.service';

declare var $:any;
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {

	publicaciones:Publicacion[];
  publiSel:any;
  constructor(private _publicacionesService: PublicacionesService) {
    this.publicaciones = this._publicacionesService.getPublicaciones();
  	console.log(this.publicaciones);
   }

  ngOnInit() {


  }
  verPublicacion(publicacion:any){
    this.publiSel = publicacion;
    console.log(this.publiSel);
    $('#myModal').modal();
  }
  cerrarModal(){
   $('#myModal').modal('hide');
    this.publiSel = null;
  }
}
