import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GadiPageRoutingModule } from './gadi-routing.module';

import { GadiPage } from './gadi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadiPageRoutingModule
  ],
  declarations: [GadiPage]
})
export class GadiPageModule { }
