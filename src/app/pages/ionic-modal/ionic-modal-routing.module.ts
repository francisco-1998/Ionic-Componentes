import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModalPage } from './ionic-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IonicModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicModalPageRoutingModule {}
