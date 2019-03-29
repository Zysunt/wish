import { Component } from '@angular/core';
import { ActionSheetController, NavController, Events } from '@ionic/angular';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public a1 = true;
  public a2 = true;
  public a3 = true;
  public a4 = true;

  constructor(public actionSheetCtrl:ActionSheetController,
    public navCtrl:NavController,
    public events:Events,
    public router:Router) {

  }

  changeTab1(){
    this.a1 = true
    for(var i = 0 ; i < 3 ; i ++){
      console.log(i)
    }
  }
  changeTab2(){
    this.a2 = true
  }
  changeTab3(){
    this.a3 = true
  }
  changeTab4(){
    this.a4 = true
  }
sendwish(){
  console.log('弹窗')
}

  // presentActionSheet(){
  //   const actionSheet = this.actionSheetCtrl.create({
  //     cssClass:'tab-tab-action',
  //     buttons: [
  //       {
  //         text: '出借人',
  //         cssClass:'tab-actionsheet',
  //         role:'destructive',
  //         handler: () => {
  //           this.router.navigate(['sendwish']) 
  //         }
  //       },{
  //         text: '借款人',
  //         cssClass:'tab-actionsheet',
  //         role:'destructive',
  //         handler: () => {
  //           this.router.navigate(['invitation']) 
  //         }
  //       },{
  //         text: '取消',
  //         role:'cancle',
  //         cssClass:'tab-actionsheet',
  //         handler: () => {
  //           console.log('Archive clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.catch

  // }


}
