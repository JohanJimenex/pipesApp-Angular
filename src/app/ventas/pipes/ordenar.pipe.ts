import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(arreglo: Car[], ordernarPor: string): Car[] {

    if (ordernarPor == "nombre") {
      arreglo = arreglo.sort((a, b) => (a.vin > b.vin) ? 1 : -1)
    }

    if (ordernarPor == "ano") {
      arreglo = arreglo.sort((a, b) => (a.year > b.year) ? 1 : -1)
    }

    if (ordernarPor == "color") {
      arreglo = arreglo.sort((a, b) => (a.color > b.color) ? 1 : -1)
    }

    return arreglo;

  }

}
