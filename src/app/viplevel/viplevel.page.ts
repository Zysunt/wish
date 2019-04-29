import { Component, OnInit } from '@angular/core';
import { Router , Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-viplevel',
  templateUrl: './viplevel.page.html',
  styleUrls: ['./viplevel.page.scss'],
  
})
export class ViplevelPage implements OnInit {
  miaosu="收到红包反反复复方法"
  myname="觉得生不逢时看吧"
  dj1=4
  daoju='游戏里也有道具，游戏中的道具是给玩家提供方便的物品。如网络游戏的道具通常通过花钱购买而获得的，这“钱”分为玩游戏时获得的游戏币或人民币，每款游戏的都有不同的道具。'
  show=false
  dj2=5
  money=90
  dsb=7687
  money1=900
  dsb1=7867
  money2=78
  dsb2=678
  state:any
  xieyi=false
  timeDown:any
  daojishi:any=30
  jinbi=234
  jine=900
  zhifu=false
  payment=false
  nowsjinbi=123
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  notice="你就是那大家滴滴答答滴滴答答"
  isVip=true
  constructor(
    public r:Router,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.xieyi=false
    this.show=false
    this.zhifu=false
  this.payment=false
  this.activeRoute.queryParams.subscribe((params: Params) => {
    this.state = params['state'];
  });
  
  if(this.state=='recharge'){
    this.zhifu=true
  this.payment=true
  }
  
  }
  toLeveldescription(){
    this.r.navigate(['leveldescription'])
  }
  torecharge(){
    this.r.navigate(['recharge'], {
      queryParams: {
        state: 'viplevel'
      }
    });
  }
  showtanc(){
    if(this.show==false){
      this.show=true
    }
  }
  guanbi(){
    if(this.show==true){
      this.show=false
    }
  }
  back(){
this.r.navigate(['tabs/tab5'])
  }
  tomon() {
      this.r.navigate(['money'], {
        queryParams: {
          state: 'viplevel'
        }
      });
  }
  Themebg(){
    this.r.navigate(['themebg'])
  }
  tomyhome(){
    this.r.navigate(['myhome'], {
      queryParams: {
        state: 'viplevel'
      }
    });
  }
  openpay() {
    if (this.payment == false) {
      this.payment = true
      this.zhifu=true
    }
    var times=30;
    if(times==30){
      this.timeDown = this.resetTime(times);
    }
    
  }
  toprivilege(){
    this.r.navigate(['privilege'])
  }
  toannouncement(){
    this.r.navigate(['announcement'])
  }
  guanbipayment() {
    if (this.payment == true) {
      this.payment = false
      this.zhifu=false
    }
  }
  toheadhanger(){
    this.r.navigate(['headhanger'])
  }
  tosuccess(){
    this.r.navigate(['successpayment'], {
      queryParams: {
        state: 'viplevel'
      }
    });
  }
  toxieyi(){
    this.r.navigate(['xieyi'], {
      queryParams: {
        state: 'viplevel'
      }
    });
  }
  onChecked(){
    if(this.xieyi==false){
      this.xieyi=true
    }
  }
  resetTime(time: number) {
    let that =this;
     function countdown() {
       var s = time % 60
       var m = Math.floor((time / 60)) % 60
       var msg = `${(m < 10 ? '0' : '') + m}分钟${(s < 10 ? '0' : '') + s}秒`
       if (--time > 0) {
         setTimeout(countdown, 1000)
         let daojishi;
         that.daojishi=msg
         // console.log(that.daojishi)
       } else {
         console.log('已结束')
         msg = `00分钟01秒`
       // clearInterval(time);
       }
     }
     countdown()
   }

}
