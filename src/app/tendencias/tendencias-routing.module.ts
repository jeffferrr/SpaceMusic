import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tendenciaspage } from './tendencias.page';

const routes: Routes = [
  {
    path: '',
    component: Tendenciaspage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TendenciasPageRoutingModule { }
