import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-news-at-me',
  templateUrl: './news-at-me.page.html',
  styleUrls: ['./news-at-me.page.scss'],
})
export class NewsAtMePage implements OnInit {
  peoplename = "你的思念"
  hour = 90
  zan = true
  issc=false
  IsVip = true
  guanzhu = false
  isdianzan=false
  fxx=false
  myname = "是豆腐脑进口机"
  mymsg = "smdkfonjvsansjnjno"
  manname = "你就打死你发 i 俄方的私家车"
  manmsg ="马丁车内神马快递"
  qianming ="年纪我阿斯顿发去污粉撒assassin"
  pinlun = 890
  namepeople = "呢 u 你的你孙女"
  dianzan = 90909
  ispl=false
  shouc = 900
  miaosu = "米大年三十是生生世世生生世世生生世世"
  hours = "8小时前"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  fx() {
    if (this.fxx == false) {
      this.fxx = true
    }
  }
  guanbifenx() {
    if (this.fxx == true) {
      this.fxx = false
    }
  }
  ionViewWillLeave(){
    this.ispl=false
  }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  showpinl(){
    if(this.ispl==false){
      this.ispl=true
    }
      }
  ishouc(){
if(this.issc==false){
  this.issc=true
} else{
  this.issc=false
}
  }
  back(){
this.r.navigate(['tabs/tab4'])
  }
  Isguanzhu(){
    if(this.guanzhu==false){
      this.guanzhu=true
    } else{
      this.guanzhu=false
    }
  }
}
