import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyclosedactivitiesPage } from './myclosedactivities.page';

const routes: Routes = [
  {
    path: '',
    component: MyclosedactivitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyclosedactivitiesPage]
})
export class MyclosedactivitiesPageModule {}
