import { Injectable } from '@angular/core';

@Injectable()
export class PerfilusuarioService {
  perfil:usuario={
    nombre:"Caye",
  	password:"prueba",
  	correo:"caye@yahoo.com",
  	fechaUnion: new Date ,
  	descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
  	cumpleanios:new Date ,
  	fotoperfil:"assets/img/foto.jpg",
  	fotoportada:"assets/img/portada.jpeg"

  };
  constructor() { }
  getInfo():usuario{
    return this.perfil;
  }

}//fin del export

export interface usuario{
  nombre:string;
	password:string;
	correo:string;
	fechaUnion: Date ;
	descripcion:string;
	cumpleanios:Date ;
	fotoperfil:string;
	fotoportada:string;
}
