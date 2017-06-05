import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { NgForm } from '@angular/forms';
import { SingupService } from '../../services/singup.service';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html'
})
export class SingupComponent implements OnInit {
	usuario:Usuario = {
		nombre: "",
		correo: "",
		password: "",
		fotoperfil: "",
		portada: "",
		}
	errorMessage;
  constructor(	private _registro: SingupService,
  				private _route: ActivatedRoute,
  				private  _router: Router,
  				private _login: LoginService) { }

  ngOnInit() {
  }
  guardar(form: NgForm){
  	console.log("ngForm", form);
  	console.log("valor", form.value);
  	this._registro.comparaLogin(this.usuario).subscribe(
  			response=>{

           console.log(response,  "hola");
            if(!response.usuario)
            {
                alert("Usuario o contraseña incorrectos");
            }
            else
            {
              form.reset();
              this.usuario = response.usuario;
              this._router.navigate(['/home']);
              console.log(this.usuario);
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
  }

}
