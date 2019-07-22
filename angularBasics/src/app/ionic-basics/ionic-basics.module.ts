import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonicBasicsPage } from './ionic-basics.page';

const routes: Routes = [
  {
    path: '',
    component: IonicBasicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonicBasicsPage]
})
export class IonicBasicsPageModule {}
