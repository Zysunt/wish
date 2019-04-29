import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YaoyuecanyuPage } from './yaoyuecanyu.page';

const routes: Routes = [
  {
    path: '',
    component: YaoyuecanyuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YaoyuecanyuPage]
})
export class YaoyuecanyuPageModule {}
