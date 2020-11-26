import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AvatarPageModule } from '../avatar/avatar.module';
import { InfinityScrollPageModule } from '../infinity-scroll/infinity-scroll.module';
import { ListReoderPageModule } from '../list-reoder/list-reoder.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'account',
        loadChildren: ()=>import('../avatar/avatar.module').then(m=>AvatarPageModule)
      },
      {
        path: 'contacts',
        loadChildren: ()=>import('../infinity-scroll/infinity-scroll.module').then(m=>InfinityScrollPageModule)
      },
      {
        path:'settings',
        loadChildren: ()=>import('../list-reoder/list-reoder.module').then(m=>ListReoderPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
