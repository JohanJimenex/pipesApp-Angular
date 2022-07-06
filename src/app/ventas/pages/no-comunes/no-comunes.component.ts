import { Component, } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelectMap
  nombre: string = "Johan";
  genero: string = "masculino";

  i18nSelectMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  CambiarPersona(): void {

    if (this.genero == "masculino") {
      this.nombre = "María";
      this.genero = "femenino"

    } else {
      this.nombre = "Johan"
      this.genero = "masculino"
    }

  }

  // i18nPlural
  arrClientes: string[] = ["Carol", "Pedro", "Ana", "Miguel", "Tilin", "Johan"];

  i18nPluralMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': `tenemos # clientes esperando`
  }

  Agregar(): void {
    this.arrClientes.push("Johan")
    console.log(this.arrClientes);
  }

  Disminuir(): void {
    this.arrClientes.pop()
    console.log(this.arrClientes);
  }


}
