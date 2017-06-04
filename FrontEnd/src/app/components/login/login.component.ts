import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Login } from '../../interfaces/login.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent  {
	errorMessage;
	usuario:Login = {
		correo: "",
		pass: ""
	}////
  constructor(
  		private _login: LoginService,
  		private _route: ActivatedRoute,
  		private  _router: Router
  	) {

  }


  guardar(forma: NgForm){
  	console.log("ngForm", forma);
  	console.log("valor", forma.value);
  	this._login.comparaLogin(this.usuario).subscribe(
  			response=>{
            this.usuario.correo = response.usuario;
            this._login.actualizarData(this.usuario);
            if(true){

            }else
            {

            }
  					console.log(response);


  			},
  			error=>{
  				this.errorMessage = <any>error;
  				if(this.errorMessage !=null){
  					console.log(this.errorMessage);
  				}
  			}
  		);

  }

}
