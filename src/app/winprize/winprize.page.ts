import { Component, OnInit } from '@angular/core';
  import { Router, Params, ActivatedRoute } from "@angular/router";
 
@Component({
  selector: 'app-winprize',
  templateUrl: './winprize.page.html',
  styleUrls: ['./winprize.page.scss'],
})
export class WinprizePage implements OnInit {
  manmsg="你是觉得你反反复复反反复复反反复复方法"
    state:any
    man="你撒旦家 "
    faso=false
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
  isdianzan=false
    constructor(
      public r:Router,
      public activeRoute: ActivatedRoute,
    ) { }
    fasofun(){
      if(this.faso==false){
        this.faso=true
      } else{
        this.faso=false
      }
    }
    canyufun(){
      this.iscanyu=true
    }
    dianzanfun(){
      if(this.isdianzan==false){
        this.isdianzan=true
      } else{
        this.isdianzan=false
      }
    }
    ionViewWillEnter(){
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.state = params['state'];
        console.log(this.state)
      });
    }
    ngOnInit() {
     
    }

    towinpage(){
      this.r.navigate(['winpage'], {
        queryParams: {
          state: 'winprize'
        }
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
      if(this.state=="hdyijieshu"){
        this.r.navigate(['hdyijieshu'])
      } else if(this.state=='mine'){
        this.r.navigate(['myclosedactivities'])
      } else if(this.state=='otherend'){
        this.r.navigate(['otherend'])
      }
    }
  }
  