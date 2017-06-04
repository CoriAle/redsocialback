import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Login } from '../../interfaces/login.interface';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
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

           console.log(response,  "hola");
            if(!response)
            {
                alert("Usuario o contraseña incorrectos");
            }
            else
            {
              forma.reset();
              forma.pristine;
                this.closeModal();
              this._router.navigate(['/home']);
              console.log()
              this._login.actualizarData(this.usuario);


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

  } //fin guardar

  closeModal(){
    var modal = document.getElementById('id01');
    console.log(modal);
    console.log("Aquí estoy")
        modal.style.display = "none";

}

}
