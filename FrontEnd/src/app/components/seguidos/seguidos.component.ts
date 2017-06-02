import { Component, OnInit } from '@angular/core';
import {SeguidosService,Seguidos } from '../../services/seguidos.service';

@Component({
  selector: 'app-seguidos',
  templateUrl: './seguidos.component.html',
  styles: []
})
export class SeguidosComponent implements OnInit {
  seguidos:Seguidos[]=[];
  constructor(
    private _seguidos:SeguidosService
  ) { }

  ngOnInit() {
    this.seguidos = this._seguidos.getSeguidos();
  }

}
