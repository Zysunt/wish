import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
@Component({
  selector: 'app-avataralbum',
  templateUrl: './avataralbum.page.html',
  styleUrls: ['./avataralbum.page.scss'],
})
export class AvataralbumPage implements OnInit {
  
      imgurls:any=[
        {
        "u1":"assets/icon/mine/txzj.png",
        "u2":"assets/icon/mine/txzj.png",
        "u3":"assets/icon/mine/txzj.png",
        "u4":"assets/icon/mine/txzj.png",
        "u5":"assets/icon/mine/gk.png",
        "u6":"assets/icon/mine/gk.png",
        "u7":"assets/icon/mine/gk.png",
        "u8":"assets/icon/mine/gk.png"
      }]
       
sha=false
show=false
    xuanzhe=false
showxuanz = false
    constructor(
      public r:Router,
      public alertController: AlertController
    ) { }
  
    ngOnInit() {
    }
    toalbum(){
      this.r.navigate(['albumx'])
    }
    guanbi(){
if(this.show==true){
this.show=false
}
    }
    async shanchufun() {
      const alert = await this.alertController.create({
        mode:'ios',
        message: '确认删除吗？',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: '确定',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }
    shanchufun0(){
      if(this.show==false){
        this.show=true
      }
    }
    ionViewWillLeave(){
      this.xuanzhe=false
      this.showxuanz = false
    }
    showxz(){
      if(this.showxuanz==false || this.sha==false){
        this.showxuanz=true
        this.sha=true
      } else{
        this.showxuanz=false
        this.sha = false
      }
     
    }
    xuanzhefun(){
      if(this.xuanzhe==false){
        this.xuanzhe=true
      } else{
        this.xuanzhe=false
      }
    }
    back(){
      this.r.navigate(['activityalbum'])
    }
  }
  