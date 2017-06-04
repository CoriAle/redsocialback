import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { Http, Response, Headers } from '@angular/http';
import { GLOBAL } from './global';

@Injectable()
export class SingupService {

public url: string;
  constructor(private _http: Http) {
  	this.url = GLOBAL.url;
  }
   comparaLogin(usuario: Usuario){
  		let json = JSON.stringify(usuario);
  		let params = json;
  		let headers = new Headers({'Content-Type': 'application/json'});
  		return this._http.post(this.url +'usuario', params, {headers: headers})
  					.map(res => res.json());
  }
}
