import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Login } from '../../interfaces/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  	.ng-invalid.ng-touched:not(form) {
  		border: 1px solid red;
  	}
  `]
})
export class LoginComponent  {

	usuario:Login = {
		correo: "",
		pass: ""
	}////
  constructor(private auth:AuthService) { 
auth.handleAuthentication();
  }



  guardar(forma: NgForm){
  	console.log("ngForm", forma);
  	console.log("valor", forma.value);

  }

}
