import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html'
})
export class SingupComponent implements OnInit {
	usuario:Usuario = {
		nombre: "",
		correo: "",
		password: "",
		fechaUnion: new Date()
	}
  constructor() { }

  ngOnInit() {
  }

}
