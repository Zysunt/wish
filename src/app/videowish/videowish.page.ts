import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
@Component({
  selector: 'app-videowish',
  templateUrl: './videowish.page.html',
  styleUrls: ['./videowish.page.scss'],
})
export class VideowishPage implements OnInit {

 isdianzan=false
 fxx=false
    peoplename = "njn思念"
    hour = 90
    zan = true
    IsVip = true
    issc=false
    guanzhu = false
    myname = "是豆腐脑进口机"
    mymsg = "smdkfonjvsansjnjno"
    manname = "你就打死你发 i 俄方的私家车"
    manmsg ="马丁车内神马快递"
    qianming ="年纪我阿斯顿发去污粉撒assassin"
    pinlun = 890
    namepeople = "呢 u 你的你孙女"
    dianzan = 90909
    shouc = 900
    faimg=false
    miaosu = "米大年三十是生生世世生生世世生生世世"
    hours = "8小时前"
    constructor(
      public r:Router
    ) { }
    ionViewDidLeave(){
      this.faimg=false
    }
    ngOnInit() {
      
    }
    showfaimg(){
if(this.faimg==false){
  this.faimg=true
} else{
  this.faimg=false
}
    }
    openfenx(){
      if(this.fxx==false){
        this.fxx=true
      }
    }
    guanbifenx(){
      if(this.fxx==true){
        this.fxx=false
      }
    }
    back(){
  this.r.navigate(['tabs/tab1'])
    }
    ishouc(){
      if(this.issc==false){
        this.issc=true
      } else{
        this.issc=false
      }}
    dianzanfun(){
      if(this.isdianzan==false){
        this.isdianzan=true
      } else{
        this.isdianzan=false
      }
    }
    Isguanzhu(){
      if(this.guanzhu==false){
        this.guanzhu=true
      } else{
        this.guanzhu=false
      }
    }
  }
  
