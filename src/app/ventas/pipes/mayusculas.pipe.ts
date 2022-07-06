import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
  name: 'mayusculas'
})


export class MayusculasPipe implements PipeTransform {

  transform(texto: string, converMiniscula: boolean = false): string {

    // if (converMiniscula) {
    //   return texto.toLowerCase();
    // } else {
    //   return texto.toUpperCase();
    // }

    return converMiniscula ? texto.toLowerCase() : texto.toUpperCase();

  }

}