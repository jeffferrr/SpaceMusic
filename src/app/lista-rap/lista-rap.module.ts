import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRapPageRoutingModule } from './lista-rap-routing.module';

import { ListaRapPage } from './lista-rap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRapPageRoutingModule
  ],
  declarations: [ListaRapPage]
})
export class ListaRapPageModule { }
