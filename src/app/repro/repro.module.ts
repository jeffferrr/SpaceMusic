import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproPageRoutingModule } from './repro-routing.module';

import { ReproPage } from './repro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproPageRoutingModule
  ],
  declarations: [ReproPage]
})
export class ReproPageModule { }
