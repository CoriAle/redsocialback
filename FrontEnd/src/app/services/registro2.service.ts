import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable()
export class Registro2Service {

  	public url: string;
  	constructor(private _http: Http) {
  	this.url = GLOBAL.url;
  }

  AddImage(usuario: Usuario){
  		
  		let json = JSON.stringify(usuario);
  		let params = json;
  		let headers = new Headers({'Content-Type': 'application/json'});
      console.log("En servicio");
      console.log(params);
  		return this._http.put(this.url +'usuario/'+usuario._id, params, {headers: headers})
  					.map(res => res.json());
  }



}