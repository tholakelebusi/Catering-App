import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlattersPageRoutingModule } from './platters-routing.module';

import { PlattersPage } from './platters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlattersPageRoutingModule
  ],
  declarations: [PlattersPage]
})
export class PlattersPageModule {}
