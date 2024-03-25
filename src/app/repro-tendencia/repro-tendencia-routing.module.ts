import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReproTendenciaPage } from './repro-tendencia.page';

const routes: Routes = [
  {
    path: '',
    component: ReproTendenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReproTendenciaPageRoutingModule {}
