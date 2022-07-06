import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styleUrls: ['./comunes.component.css']
})
export class ComunesComponent implements OnInit {

  nombreLower: string = "johan jimenez";
  nombreUpper: string = "JOHAN JIMENEZ";
  nombreMixto: string = "jOhaN jIMENez";

  fecha: Date = new Date();//fecha de hoy



  ngOnInit(): void {
    console.log(this.fecha);
  }
  localE() {
    

    let x: string = "d"
  }

}
