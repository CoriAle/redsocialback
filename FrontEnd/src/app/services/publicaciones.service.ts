import { Injectable } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';
import { Usuario } from '../interfaces/usuario.interface';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable()
export class PublicacionesService {
/*
	publicaciones:any[] = [
		{
			id: "1",
			user: "Cori",
			contenido: "I miss the taste of a sweeter life I miss the conversation I'm searching for a song tonight I'm changing all of the stationsI like to think that we had it allWe drew a map to a better place But on that road I took a fall Oh baby why did you run away?",
			foto: "assets/home.jpg",
			comentarios: [],
			fecha: new Date('2017/02/02')
		},
		{
			id: "2",
			user: "Caye",
			contenido: "I miss the taste of a sweeter life I miss the conversation I'm searching for a song tonight I'm changing all of the stationsI like to think that we had it allWe drew a map to a better place But on that road I took a fall Oh baby why did you run away?",
			foto: "assets/foto.jpg",
			comentarios: [],
			fecha: new Date()
		},
		{
			id: "3",
			user: "Placido",
			contenido: "I miss the taste of a sweeter life I miss the conversation I'm searching for a song tonight I'm changing all of the stationsI like to think that we had it allWe drew a map to a better place But on that road I took a fall Oh baby why did you run away?",
			foto: "",
			comentarios: [],
			fecha: new Date()
		}
	];*/
  publicaciones:any[]=[];
	public  url:string;
  constructor(
    private _http:Http
  ) {
      this.url = GLOBAL.url;
  }

  getPublicaciones():Publicacion[]{
    return  this.publicaciones;

  }

  getTodasPublicaciones(){
    return this._http.get(this.url+'publicaciones').map(res =>{
      this.publicaciones = res.json().publicaciones;
      console.log("esto es de la variable");
      console.log(this.publicaciones);
      return res.json().publicaciones;
    });
  }
  addPublicacion(publi:PublicacionNueva){
    let json = JSON.stringify(publi);
    let params = json;
    let headers = new Headers({'Content-Type': 'application/json'});


    let user : Usuario = JSON.parse(localStorage.getItem("USUARIO"));
    let nuevo = new clasePublicacoin(null,publi.contenido,user);
      console.log(nuevo);
    this.publicaciones.unshift(nuevo);
    return this._http.post(this.url +'publicacion', params, {headers: headers})
      .map(res =>res.json() );
  }
  addComentario(coment:Comentario,id:number){
    let json = JSON.stringify(coment);
    let params = json;

    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url +'comentario/'+id, params, {headers: headers})
      .map(res =>res.json() );
  }
}

export interface Comentario{
  nombre:number;
  contenido:string;
}
interface PublicacionNueva{
  id:number;
  contenido:string;
  foto:string;
}
interface PublicacionAgregar{
  comentario:any[];
  contenido:string;
  fechapublicacion:Date;
  usuariocreador:Usuario;
}
export class clasePublicacoin{
  comentario:any[];
  contenido:string;
  fechapublicacion:Date;
  usuariocreador:Usuario;
  constructor(comentario:any[], contenido:string, user:Usuario){
    this.comentario = comentario;
    this.fechapublicacion = new Date();
    this.contenido = contenido;
    this.usuariocreador = user;
  }

}
