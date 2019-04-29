import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealnamePage } from './realname.page';
// import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
const routes: Routes = [
  {
    path: '',
    component: RealnamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // ProgressBarComponent
  ],
  declarations: [RealnamePage]
})
export class RealnamePageModule {}
