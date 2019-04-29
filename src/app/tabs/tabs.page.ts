import { Component } from '@angular/core';
import { ActionSheetController, NavController, Events } from '@ionic/angular';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  // login = 1
  public a1 = false;
  public a2 = false;
  public a3 = false;
  public a4 = false;
  constructor(public actionSheetCtrl:ActionSheetController,
    public navCtrl:NavController,
    public events:Events,
    public router:Router) {

  }

  changeTab1(){
    this.a1 = true
    this.a2=false
    this.a3=false
    this.a4=false
  }
  changeTab2(){
    this.a2 = true
    this.a1=false
    this.a3=false
    this.a4=false
  }
  changeTab3(){
    this.a3 = true
    this.a2=false
    this.a1=false
    this.a4=false
  }
  changeTab4(){
    this.a4 = true
    this.a2=false
    this.a3=false
    this.a1=false
  }
sendwish(){
  this.router.navigate(['tab3'])
}

 

}
