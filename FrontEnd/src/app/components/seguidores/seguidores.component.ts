import { Component, OnInit } from '@angular/core';
import { SeguidoresService,Seguidores } from '../../services/seguidores.service';

@Component({
  selector: 'app-seguidores',
  templateUrl: './seguidores.component.html',
  styles: []
})
export class SeguidoresComponent implements OnInit {
  seguidores:Seguidores[]=[];
  constructor(
    private _seguidores:SeguidoresService
  ) { }

  ngOnInit() {
    this.seguidores = this._seguidores.getSeguidores();
  }

}
