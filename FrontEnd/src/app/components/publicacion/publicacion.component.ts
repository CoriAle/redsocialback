import { Component, OnInit } from '@angular/core';
import { PublicacionesService,Comentario,clasePublicacoin} from '../../services/publicaciones.service';
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
  publiSel:clasePublicacoin;
  comentario:string;
  todoComentario:Coment[]=[];
  constructor(private _publicacionesService: PublicacionesService,
          private router:Router,
              private activateRouter:ActivatedRoute
  ) {

    this._publicacionesService.getTodasPublicaciones().subscribe(
      data =>{
        console.log(data);
      });

   }

  ngOnInit() {


  }
  verPublicacion(publicacion:any){
    this.publiSel = publicacion;
    this.todoComentario = this.publiSel.comentario;
    console.log(this.todoComentario);
    $('#myModal0').modal();
  }
  cerrarModal(){
   $('#myModal0').modal('hide');
    this.publiSel = null;
  }
  comentar2(forma:NgForm,publi:number){
    let user : Usuario = JSON.parse(localStorage.getItem("USUARIO"));
    let coment:Comentario={nombre:0,contenido:""};
      coment.nombre = user._id;
      coment.contenido = this.comentario;
      let nuevoComentario = new Coment(this.comentario,user);
      this.todoComentario.unshift(nuevoComentario);
      console.log(publi);
      this._publicacionesService.addComentario(coment,publi).subscribe(
        response => {
          console.log(response);
          if(!response.Creado){
            alert("error en el servidor");
          }
          else{
            this.comentario = "";

          }
        }
      );
  }
  public comentar(forma: NgForm){
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
export interface PublicacionNueva{
  id:number;
  contenido:string;
  foto:string;
}
class Coment{
  contenido:string;
  fechacomentario: Date;
  nombre:Usuario;
  constructor (cont:string,nombre:Usuario){
    this.contenido = cont;
    this.nombre= nombre;
    this.fechacomentario= new Date();
  }
}
