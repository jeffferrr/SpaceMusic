import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReproRanchPage } from './repro-ranch.page';

const routes: Routes = [
  {
    path: '',
    component: ReproRanchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReproRanchPageRoutingModule { }
