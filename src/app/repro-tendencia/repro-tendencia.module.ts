import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproTendenciaPageRoutingModule } from './repro-tendencia-routing.module';

import { ReproTendenciaPage } from './repro-tendencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproTendenciaPageRoutingModule
  ],
  declarations: [ReproTendenciaPage]
})
export class ReproTendenciaPageModule {}
