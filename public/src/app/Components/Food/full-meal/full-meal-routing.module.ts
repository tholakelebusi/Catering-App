import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullMealPage } from './full-meal.page';

const routes: Routes = [
  {
    path: '',
    component: FullMealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullMealPageRoutingModule {}
