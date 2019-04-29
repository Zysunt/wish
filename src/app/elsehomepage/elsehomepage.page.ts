import { Component, OnInit } from '@angular/core';
import {  Router,Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-elsehomepage',
  templateUrl: './elsehomepage.page.html',
  styleUrls: ['./elsehomepage.page.scss'],
})
export class ElsehomepagePage implements OnInit {
  public isVip = true;//是否会员
  talentshow = false
  wishwall = true
  meet = false
  public myname = "你几岁的你加班";
  fxx = false;
  public dianzan=1;
  public miaosu = "你觉得deeeess较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较";
  guanzhu = false
  wishmiaosu = "你的身份叫爸水电费"
  manname = "fdskn你觉得谁谁谁谁谁谁谁"
  mancount=900
  pinglun=6556
  dac=true
  aixin= 900
  wish = 78
  dacheng = 889
  yaoyue = 87
  darenxiuname = "你难上加难的"
  hour = 9
  fabumiaosu = "免税店能促进农村的"
  huodongbiaoti = "你的触觉神经你坚持你的脚能进能出"
  huodongmiaosu = "都是丝袜莫斯科当地滴滴答答滴滴答答的"
  stoptime = "2019-4-30"
  dizhi = "苏州古树"
  state:any
  isdianzan=false
  constructor(
    public activeRoute: ActivatedRoute,
    public router:Router,
  ) { }
  gootherend(){
    this.router.navigate(['otherend'])
  }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
      console.log(this.state)
    });
  }
  toothercollection(){
    this.router.navigate(['othercollection'])
  }
  tootherfans(){
    this.router.navigate(['otherfans'])
  }
  tootherfollow(){
    this.router.navigate(['otherfollow'])
  }
  tootherdianzan(){
    this.router.navigate(['otherdianzan'])
  }
  wishfun(){
    this.wishwall=true
    this.talentshow = false
    this.meet = false
  }
  famousefun(){
    this.wishwall=false
    this.talentshow = true
    this.meet = false
  }
  meetfun(){
    this.wishwall=false
    this.talentshow = false
    this.meet = true
  }
  guanzhufun(){
    if(this.guanzhu==false){
      this.guanzhu=true
    } else{
      this.guanzhu=false
    }
  }
back(){
  if(this.state=="sixin"){
    this.router.navigate(['sixininter'])
  } else if(this.state=="shouye")
  {
    this.router.navigate(['tabs/tab1'])
  } else if(this.state=="search"){
    this.router.navigate(['searchdetails'])
  }
  
}
huoxiangqing(){
  this.router.navigate(['activitydetails'])
}
guanbifenx(){
  this.fxx=false
}
fx(){
  this.fxx=true
}
}
