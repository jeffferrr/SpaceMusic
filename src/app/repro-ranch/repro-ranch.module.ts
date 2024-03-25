import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproRanchPageRoutingModule } from './repro-ranch-routing.module';

import { ReproRanchPage } from './repro-ranch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproRanchPageRoutingModule
  ],
  declarations: [ReproRanchPage]
})
export class ReproRanchPageModule { }
