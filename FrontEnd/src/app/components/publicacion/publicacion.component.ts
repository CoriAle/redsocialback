import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../services/publicaciones.service';
import { Publicacion } from '../../interfaces/publicacion.interface';
declare var $:any;
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {
  publi:Publicacion;
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
