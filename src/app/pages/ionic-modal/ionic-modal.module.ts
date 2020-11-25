import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicModalPageRoutingModule } from './ionic-modal-routing.module';

import { IonicModalPage } from './ionic-modal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonicModalPage]
})
export class IonicModalPageModule {}
