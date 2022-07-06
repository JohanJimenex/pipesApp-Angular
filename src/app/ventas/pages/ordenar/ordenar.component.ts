import { Component, OnInit } from '@angular/core';

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



}
