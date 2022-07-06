import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  items: MenuItem[] = [
    {
      label: "Pipes de Angular",
      icon: "pi pi-code",
      items: [
        {
          label: 'Pipes Comunes',
          icon: "pi pi-bolt",
          routerLink: "comunes",
          badge: "new"
        },
        {
          label: 'Pipes No comunes',
          icon: "pi pi-star",
          routerLink: "/"
        }
        ,
        {
          label: 'Pipes de Números',
          icon: "pi pi-hashtag",
          routerLink: "numeros"
        }
      ]
    },
    {
      label: "Pipes Personalizados",
      icon: "pi pi-heart",
      items: [
        {
          label: 'Pipes Ordenados',
          icon: "pi pi-angle-double-down",
          routerLink: "ordenado"
        }
      ]
    },
    {
      label: "Documentación oficial",
      icon: "pi pi-book",
      url: "https://angular.io/guide/pipes-overview",
      target: "_blank"
    }
  ];


}
