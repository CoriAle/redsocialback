import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
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

	usuario:Object = {
		correo: null,
		pass: null
	}
  constructor(private auth:AuthService) { 
auth.handleAuthentication();
  }



  guardar(forma: NgForm){
  	console.log("ngForm", forma);
  	console.log("valor", forma.value);

  }

}
