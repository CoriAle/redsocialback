import { Injectable } from '@angular/core';

@Injectable()
export class SeguidoresService {
  seguidores:Seguidores[]=[
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
    descripcion:"#Arduino no es la solución para todo pero si que es el comienzo para buscar esa solución #Maker #DIY #SAV https://campus.programarfacil.com/ ",
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
  getSeguidores(){
    return this.seguidores;
  }
}

export interface Seguidores{
  id:string;
  nombre:string;
  descripcion:string;
  fotoperfil:string;
  fotoportada:string;
}
