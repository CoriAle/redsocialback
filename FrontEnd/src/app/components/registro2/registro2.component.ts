import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';
import { Registro2Service } from '../../services/registro2.service';
@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html'
})
export class Registro2Component implements OnInit {
	
	public filesToUpload: Array<File>;
 	public resultUpload;
 	usuario:Usuario = {
		nombre: "",
		correo: "",
		password: "",
		fechaUnion: new Date(),
		desc: "",
		_id: -1
	}
  
  constructor(
  				private _route: ActivatedRoute,
  				private  _router: Router,
  				private _registro: Registro2Service
  				) { }

  ngOnInit() {
  				this.usuario.nombre = localStorage.USUARIO.nombre;
  				this.usuario.correo = localStorage.USUARIO.correo;
  				this.usuario.password = localStorage.USUARIO.password;
  				this.usuario._id = localStorage.USUARIO._id;
  }

  onSubmit(){
  		//this._route.params.forEach()
  		this._registro.AddImage(this.usuario.foto, this.usuario._id).subscribe(
  				response=>{
  					this.usuario.foto = response;
  				}
  			)


  }
  
  fileChangeEvent(fileInput: any){
  	this.filesToUpload = <Array<File>> fileInput.target.files;

  }
  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
  		return new Promise(function(resolve, reject){
  			var formData:  any = new formData();
  			var xhr = new XMLHttpRequest();
  			for (var i = 0; i < files.length; i++) {
  				formData.append('image', files[i], files[i].name);
  			}

  			xhr.onreadystatechange = function(){
  				if(xhr.readyState == 4 ){
  					if(xhr.status == 2000){
  						resolve(JSON.parse(xhr.response));
  					}
  					else{
  						reject(xhr.response);
  					}
  				}
  			}
  			xhr.open('POST', url, true);
  			xhr.send(formData);
  		});
  }

}
