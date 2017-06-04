import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class Registro2Service {

  	public url: string;
  	constructor(private _http: Http) {
  	this.url = GLOBAL.url;
  }

  AddImage(imagen, id: number){
  		let query = `:${ id }`;
  		let json = JSON.stringify(imagen);
  		let params = json;
  		let headers = new Headers({'Content-Type': 'application/json'});
  		return this._http.post(this.url +'upload-image/'+query, params, {headers: headers})
  					.map(res => res.json());
  }



}
