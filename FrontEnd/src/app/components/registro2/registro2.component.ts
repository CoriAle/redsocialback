import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';
import { Registro2Service } from '../../services/registro2.service';
import { GLOBAL } from '../../services/global';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html'
})
export class Registro2Component implements OnInit {
	
	public filesToUpload: Array<File>;
 	public resultUpload;
     public filesToUpload2: Array<File>;

    errorMessage;
 	usuario:Usuario = {
		nombre: "",
		correo: "",
		password: "",
		fechaUnion: new Date(),
		descripcion: "",
    cumpleanios:new Date(),
		_id: -1
	}

    public url: string;
  
  constructor(
  				private _route: ActivatedRoute,
  				private  _router: Router,
  				private _registro: Registro2Service
  				) {
                this.url = GLOBAL.url; 
            }

  ngOnInit() {
     let usu:Usuario= JSON.parse(localStorage.getItem("USUARIO"));
  				this.usuario.nombre = usu.nombre;
  				this.usuario.correo = usu.correo;
  				this.usuario.password = usu.password;
  				this.usuario._id =usu._id;
  }



  guardar(form: NgForm){
    this._registro.AddImage(this.usuario).subscribe(
        response=>{


            if(!response.usuario)
            {
                alert("Usuario o contraseña incorrectos");
            }
            else
            {
              form.reset();
              this.usuario = response.usuario;
              console.log(response.usuario);
         
              this.makeFileRequest(this.url+'upload-image-perfil/'+this.usuario._id,[], this.filesToUpload)
                      .then(
                      (result)=>{
                          this.resultUpload = result;
                          this.usuario.fotoperfil = this.resultUpload.filename;
                          /**/ this._router.navigate(['/home']);

                            this.makeFileRequest(this.url+'upload-portada/'+this.usuario._id,[], this.filesToUpload2)
                              .then(
                              (result)=>{
                                  this.resultUpload = result;
                                  this.usuario.fotoportada = this.resultUpload.filename;
                                  localStorage.USUARIO = this.usuario;
                                  },
                                  (error)=>{
                                      console.log(error);
                                  })

                          /**/
                    
                      },
                      (error)=>{
                          console.log(error);
                      })
             
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


fileChangeEvent2(fileInput: any){
    this.filesToUpload2 = <Array<File>> fileInput.target.files;
  }
  
  fileChangeEvent(fileInput: any){
  	this.filesToUpload = <Array<File>> fileInput.target.files;
  }
  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
  		return new Promise(function(resolve, reject){
  			var formData:  any = new FormData();
  			var xhr = new XMLHttpRequest();
  			for (var i = 0; i < files.length; i++) {
  				formData.append('image', files[i], files[i].name);
  			}

  			xhr.onreadystatechange = function(){
  				if(xhr.readyState == 4 ){
  					if(xhr.status == 200){
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
