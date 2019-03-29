import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'set', loadChildren: './set/set.module#SetPageModule' },
  { path: 'sendwish', loadChildren: './sendwish/sendwish.module#SendwishPageModule' },
  { path: 'invitation', loadChildren: './invitation/invitation.module#InvitationPageModule' },
  { path: 'select', loadChildren: './select/select.module#SelectPageModule' },
  { path: 'hand', loadChildren: './hand/hand.module#HandPageModule' },
  { path: 'appoint', loadChildren: './appoint/appoint.module#AppointPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
