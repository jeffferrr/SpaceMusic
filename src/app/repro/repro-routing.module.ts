import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReproPage } from './repro.page';

const routes: Routes = [
  {
    path: '',
    component: ReproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReproPageRoutingModule { }
