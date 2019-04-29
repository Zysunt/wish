import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.page.html',
  styleUrls: ['./checkpoint.page.scss'],
})
export class CheckpointPage implements OnInit {
 
  imgurls:any=[
    {
    "u1":"assets/icon/mine/gk.png",
    "u2":"assets/icon/mine/gk.png",
    "u3":"assets/icon/mine/gk.png",
    "u4":"assets/icon/mine/gk.png",
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
    