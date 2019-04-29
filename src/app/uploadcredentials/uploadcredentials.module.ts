import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadcredentialsPage } from './uploadcredentials.page';

const routes: Routes = [
  {
    path: '',
    component: UploadcredentialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadcredentialsPage]
})
export class UploadcredentialsPageModule {}
