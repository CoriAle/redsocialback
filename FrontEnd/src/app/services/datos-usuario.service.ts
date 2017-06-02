import { Injectable } from '@angular/core';

@Injectable()
export class DatosUsuarioService {

  constructor() { }

}

export interface DatosUsuario{
  id:string;
  nombre:string;
  correo:string;
  fechaUnion:Date = new Date();

}
