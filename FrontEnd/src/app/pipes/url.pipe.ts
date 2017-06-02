import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {
	constructor(private domSanitizer:DomSanitizer){

	}
  transform(uri: string): any {
  	console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(uri))
    return this.domSanitizer.bypassSecurityTrustResourceUrl(uri);
  }

}
