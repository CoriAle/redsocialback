import { Injectable } from '@angular/core';

@Injectable()
export class PublicacionesService {

	publicaciones:Publicacion[] = [
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
	];

  constructor() { 
  }

  getPublicaciones():Publicacion[]{
  	return this.publicaciones;
  }

}

export interface Publicacion{
	id:string,
	user:string,
	contenido:string,
	foto:string,
	comentarios:any[],
	fecha:Date
}
