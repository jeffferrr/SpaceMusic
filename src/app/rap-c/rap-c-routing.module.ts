import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapCPage } from './rap-c.page';

const routes: Routes = [
  {
    path: '',
    component: RapCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapCPageRoutingModule { }
