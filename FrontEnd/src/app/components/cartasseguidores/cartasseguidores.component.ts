import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartasseguidores',
  templateUrl: './cartasseguidores.component.html',
  styles: []
})
export class CartasseguidoresComponent implements OnInit {
  valorBoton:string="Siguiendo";
  constructor() { }

  ngOnInit() {
  }
  cambiarTexto(){
    this.valorBoton = "Dejar de seguir";
  }
  regresarTexto(){
    this.valorBoton = "Siguiendo";
  }
}
