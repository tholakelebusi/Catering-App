import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlattersPage } from './platters.page';

const routes: Routes = [
  {
    path: '',
    component: PlattersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlattersPageRoutingModule {}
