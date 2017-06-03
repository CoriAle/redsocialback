import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadletras'
})
export class CantidadletrasPipe implements PipeTransform {

  transform(value: any): any {
    let frase = value;
    let fraseCortada ="";
    let contador:number =0;
    for(let i=0;i<119;i++){
      fraseCortada= fraseCortada+frase.charAt(i);
    }
    return fraseCortada;
  }

}
