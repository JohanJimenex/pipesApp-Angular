import { Component, OnInit } from '@angular/core';
import { Car, Colores } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  cambiar() {
    this.enMayusculas = !this.enMayusculas;
    // this.enMayusculas = this.enMayusculas ? false : true;
  }

  cars: Car[] = [

    {
      vin: "Honda",
      year: 2000,
      brand: "Accord",
      color: Colores.azul
    },
    {
      vin: "Hyundai",
      year: 2020,
      brand: "Civic",
      color: Colores.negro
    },
    {
      vin: "Zusuki",
      year: 2440,
      brand: "New",
      color: Colores.rojo
    },
    {
      vin: "Honda",
      year: 2003,
      brand: "New",
      color: Colores.verde
    },
    {
      vin: "Mercedes",
      year: 2004,
      brand: "Rav4",
      color: Colores.rojo
    },
    {
      vin: "Toyota",
      year: 2005,
      brand: "Corolla",
      color: Colores.negro
    },
    {
      vin: "Honda",
      year: 2000,
      brand: "New",
      color: Colores.rojo
    },

  ];

  ordenarPor: string = "nombre";

}
