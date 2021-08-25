import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullMealPageRoutingModule } from './full-meal-routing.module';

import { FullMealPage } from './full-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullMealPageRoutingModule
  ],
  declarations: [FullMealPage]
})
export class FullMealPageModule {}
