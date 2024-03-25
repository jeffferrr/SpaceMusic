import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapCPageRoutingModule } from './rap-c-routing.module';

import { RapCPage } from './rap-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapCPageRoutingModule
  ],
  declarations: [RapCPage]
})
export class RapCPageModule { }
