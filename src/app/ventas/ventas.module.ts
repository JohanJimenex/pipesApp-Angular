import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ComunesComponent } from './pages/comunes/comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent,
    MayusculasPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    ComunesComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
