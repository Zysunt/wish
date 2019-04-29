import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.page.html',
  styleUrls: ['./initiate.page.scss'],
})
export class InitiatePage implements OnInit {
  state:any
zf=false;
date=90
IsVip:boolean=true;
guanzhu:any=false
iscanyu=false
name:any="你萨阿啊阿啊"
miaos:any="时间才能彻底"
hour=900
pinlun = 2
yaoq=true
activebiaoti:any="户外活动海边性别不限"
shi:any="北京市"
dizhi:any="阿萨德和斑斑驳驳吧"
yaoyudate:any="2019-10-2"
yaoyudate1:any="2019-12-9"
canyu=89
namepeople="说的那句"
dianzan=900
pinl = "参加坎坎坷坷看看款式"
hours=90
shou=false
isdianzan=false
faso=false
imgs = [
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',
  'assets/icon/hand/tx.png',

];
  constructor(
    public r:Router,
    public activeRoute: ActivatedRoute,
  ) { }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  shoufaso(){
if(this.faso==false){
  this.faso=true
}
  }
  ionViewWillLeave(){
    this.faso=false
  }
  canyufun(){
    this.iscanyu=true
  }
  ionViewWillEnter(){
    // this.activeRoute.queryParams.subscribe((params: Params) => {
    //   this.state = params['state'];
    //   console.log(this.state)
    // });
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
      console.log(this.state)
    });
  }
  isshou(){
    if(this.shou==false){
      this.shou=true
    } else{
      this.shou=false
    }
  }
  tocanyu(){
    this.r.navigate(['yaoyuecanyu'])
  }
  Isguanzhu(){
if(this.guanzhu==false){
  this.guanzhu=true
} else{
  this.guanzhu=false
}
  }
  zhuanfa(){
    if(this.zf==false){
      this.zf=true
    } 
  }
  yaoqingfun(){
    this.r.navigate(['yaoqinghaou'])
  }
  guanbi(){
    if(this.zf==true){
      this.zf=false
    }
  }
  back(){
    if(this.state=="shouye"){
      this.r.navigate(['tabs/tab1'])
    } else if(this.state=="yaoyue"){
      this.r.navigate(['invitation'])
    } else if(this.state=="xiaoxi"){
      this.r.navigate(['tabs/tab4'])
    } else if(this.state=='sixin'){
      this.r.navigate(['sixininter'])
    } else if(this.state=="myhome"){
      this.r.navigate(['myhome'])
    }
  }
}
