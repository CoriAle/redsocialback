import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router} from '@angular/router';
import { Usuario } from '../../../interfaces/usuario.interface';
import { NgForm } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(	private _login: LoginService,
  				private _router:Router
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


  }//fin de comentar
}
