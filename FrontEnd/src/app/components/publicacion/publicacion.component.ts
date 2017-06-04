import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../services/publicaciones.service';
import { Publicacion } from '../../interfaces/publicacion.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {
  publi:PublicacionNueva={
    id: 0,
    contenido:"",
    foto :"",
  };
	publicaciones:Publicacion[];
  publiSel:any;
  constructor(private _publicacionesService: PublicacionesService,
          private router:Router,
              private activateRouter:ActivatedRoute
  ) {



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
  comentar(forma: NgForm){
    let user : Usuario = JSON.parse(localStorage.getItem("USUARIO"));
    this.publi.id = user._id;

    this._publicacionesService.addPublicacion(this.publi).subscribe(
      response=> {
        //this.publi = response;
        if(!response.publicar){
          alert("error en el servior");
        }
        else{
          this.publi.contenido="";
          this.router.navigate(['/']);
        }
      }
    );
  }//fin de comentar

}
interface PublicacionNueva{
  id:number;
  contenido:string;
  foto:string;
}
