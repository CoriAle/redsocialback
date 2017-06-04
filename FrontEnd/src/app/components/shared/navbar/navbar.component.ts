import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { PublicacionesService } from '../../../services/publicaciones.service';
import { Router} from '@angular/router';
import { Usuario } from '../../../interfaces/usuario.interface';
import { NgForm } from '@angular/forms';
import { PublicacionComponent, PublicacionNueva  } from '../../../components/publicacion/publicacion.component';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  publi:PublicacionNueva={
    id : 0,
    contenido: "",
    foto: ""
  }
  constructor(	private _login: LoginService,
  				private _router:Router,
          private _publicacionesService:PublicacionesService
  			 ) { }

  ngOnInit() {
  }
  LogOut(){
  	localStorage.clear();
  	 this._router.navigate(['/login']);
  }
  crearPublicacion(){
    $('#myModal').modal();
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
          $('#myModal').modal('hide');
        }
      }
    );


  }//fin de comentar
}
