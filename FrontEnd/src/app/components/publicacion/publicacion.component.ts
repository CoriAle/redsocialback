import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../services/publicaciones.service';
import { Publicacion } from '../../interfaces/publicacion.interface';
declare var $:any;
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {
  publi:PublicacionNueva={
    id:"",
    contenido:"",
    foto :"",
  };
	publicaciones:Publicacion[];
  publiSel:any;
  constructor(private _publicacionesService: PublicacionesService) {



   }

  ngOnInit() {
    this._publicacionesService.getTodasPublicaciones().subscribe(
      result=>{
        console.log(result);
      }
    );

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
  comentar(){
    console.log(this.publi);
  }

}
interface PublicacionNueva{
  id:string;
  contenido:string;
  foto:string;
}
