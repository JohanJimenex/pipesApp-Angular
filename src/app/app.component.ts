import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "joHan jIMENEz";

  valor: number = 1000;

  objeto: any = {
    nombre: "johan"
  }

  MostrarNombre(): void {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);

  }


}
