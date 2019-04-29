import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-news-at-me',
  templateUrl: './commentcont.page.html',
  styleUrls: ['./commentcont.page.scss'],
})
export class CommentcontPage implements OnInit {
  change:any
  statusclass: boolean = false;
  peoplename = "asfas"
  hour = 90
  zan = true
  isdianzan=false
  IsVip = true
  faso=false
  guanzhu = false
  myname = "是豆腐脑进口机"
  mymsg = "smdkfonjvsansjnjno"
  manname = "你就打死你发 i 俄方的私家车"
  manmsg ="马丁车内神马快递"
  qianming ="年纪我阿斯顿发去污粉撒assassin"
  pinlun = 890
  namepeople = "fefr反倒是"
  dianzan = 90909
  shouc = 900
  miaosu = "米大年三十是生生世世生生世世生生世世"
  hours = "8小时前"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  ionViewWillLeave(){
    this.faso=false
  }
  showfaso(){
    if(this.faso==false){
      this.faso=true
    }
  }
  clickEvent(){
    this.statusclass = !this.statusclass;       
}
  back(){
this.r.navigate(['tabs/tab4'])
  }
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
