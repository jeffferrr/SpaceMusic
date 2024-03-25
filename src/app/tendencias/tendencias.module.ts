import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TendenciasPageRoutingModule } from './tendencias-routing.module';

import { Tendenciaspage } from './tendencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TendenciasPageRoutingModule
  ],
  declarations: [Tendenciaspage]
})
export class TendenciasPageModule { }
