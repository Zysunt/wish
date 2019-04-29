import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-wishalbum',
  templateUrl: './wishalbum.page.html',
  styleUrls: ['./wishalbum.page.scss'],
})
export class WishalbumPage implements OnInit {

    imgurls:any=[
      {
      "u1":"assets/icon/home/n2.png",
      "u2":"assets/icon/home/n2.png",
      "u3":"assets/icon/home/n2.png",
      "u4":"assets/icon/home/n2.png",
      "u5":"assets/icon/home/n2.png",
      "u6":"assets/icon/home/n2.png",
      "u7":"assets/icon/mine/gk.png",
      "u8":"assets/icon/mine/gk.png"
    }]
sha=false
show=false
    xuanzhe=false
showxuanz = false
    constructor(
      public r:Router
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
    shanchufun(){
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
  