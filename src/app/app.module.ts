import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';


//Cambiar la localidad de la app (fecha idioma)
import localEs from '@angular/common/locales/es-DO';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);
// agregar al provider abajo providers: [{ provide: LOCALE_ID, useValue: 'es-DO' }],

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],
  providers: [
    //Aplica el idioma a todo el codigo global.
    // sino solo lo deja disponible para su uso en los pies 
    { provide: LOCALE_ID, useValue: 'es-DO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
