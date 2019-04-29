import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
// import { Toast } from '@ionic-native/toast/ngx';
// import { JsonpModule, HttpModule} from "@angular/http";
// import { HTTP } from '@ionic-native/http/ngx';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [
  ],
  imports: [BrowserModule, IonicModule.forRoot({
    mode:'md'
  }), AppRoutingModule,
  // MultiPickerModule,
  // HttpModule,
  // JsonpModule,
  HttpClientModule,
  IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    // Http,
    // HTTP,
    // Toast,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
