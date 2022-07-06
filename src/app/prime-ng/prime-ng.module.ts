import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { ToolbarModule } from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TagModule,
    ProgressSpinnerModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
