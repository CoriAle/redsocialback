import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Login } from '../interfaces/login.interface';
import { GLOBAL } from './global';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable()
export class LoginService {

	public url: string;
  constructor(private _http: Http) {
  	this.url = GLOBAL.url;
  }
  comparaLogin(login: Login){

  		let json = JSON.stringify(login);
  		let params = json;
  		let headers = new Headers({'Content-Type': 'application/json'});
  		return this._http.post(this.url +'login', params, {headers: headers})
  					.map(res => res.json());
  }
  actualizarData(usuario:Usuario){
    localStorage.setItem("USUARIO", JSON.stringify(usuario));
  }
  isAutenticated():Boolean{
    if(localStorage.USUARIO)
      return true;
    
    else
      return false;
  }

}
