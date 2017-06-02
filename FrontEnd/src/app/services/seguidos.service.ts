import { Injectable } from '@angular/core';

@Injectable()
export class SeguidosService {
  seguidos:Seguidos[] =[
    {
    id:"string",
    nombre:"Cori",
    descripcion:"Me encantan los gatos Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
    fotoperfil:"assets/img/fotoCori.jpg",
    fotoportada:"assets/img/portada.jpeg"
  },
    {
    id:"string",
    nombre:"Plax",
    descripcion:"Me encantan los gatos Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
    fotoperfil:"assets/img/fotoPlax.jpg",
    fotoportada:"assets/img/portada.jpeg"
  },
    {
    id:"string",
    nombre:"Cori",
    descripcion:"Me encantan los gatos Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
    fotoperfil:"assets/img/fotoCori.jpg",
    fotoportada:"assets/img/portada.jpeg"
  },
    {
    id:"string",
    nombre:"Plax",
    descripcion:"Me encantan los gatos Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
    fotoperfil:"assets/img/fotoPlax.jpg",
    fotoportada:"assets/img/portada.jpeg"
  },
    {
    id:"string",
    nombre:"Cori",
    descripcion:"Me encantan los gatos Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
    fotoperfil:"assets/img/fotoCori.jpg",
    fotoportada:"assets/img/portada.jpeg"
  },
    {
    id:"string",
    nombre:"Plax",
    descripcion:"Me encantan los gatos Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,",
    fotoperfil:"assets/img/fotoPlax.jpg",
    fotoportada:"assets/img/portada.jpeg"
  }


];
  constructor() { }
  getSeguidos(){
    return this.seguidos;
  }

}
export interface Seguidos{
  id:string;
  nombre:string;
  descripcion:string;
  fotoperfil:string;
  fotoportada:string;
}
