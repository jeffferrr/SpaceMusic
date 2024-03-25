import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRancherasPageRoutingModule } from './lista-rancheras-routing.module';

import { ListaRancherasPage } from './lista-rancheras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRancherasPageRoutingModule
  ],
  declarations: [ListaRancherasPage]
})
export class ListaRancherasPageModule { }
