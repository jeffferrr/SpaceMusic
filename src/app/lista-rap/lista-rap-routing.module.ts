import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRapPage } from './lista-rap.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRapPageRoutingModule { }
