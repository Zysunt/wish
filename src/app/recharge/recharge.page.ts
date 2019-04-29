import { Component, OnInit } from '@angular/core';
import { Router ,Params, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
  money:any=10
  dsb:any=900
  money1:any=102
  timeDown:any
  dsb1:any=27389
  money2:any=324
  dsb2:any=23425
  state:any
  items:any=[12,120,321]
  payment=false
  zhifu=false
  daojishi:any=90
  jine=8999
  xieyi=false

  constructor(
    public r:Router,public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });
  }
  openpay() {
    if (this.payment == false) {
      this.payment = true
      this.zhifu=true
    }
    this.timeDown = this.resetTime(30);
  }
  guanbipayment() {
    if (this.payment == true) {
      this.payment = false
      this.zhifu=false
    }
  }
  tosuccess(){
    this.r.navigate(['successpayment'], {
      queryParams: {
        state: 'recharge'
      }
    });
  }
  toxieyi(){
    this.r.navigate(['xieyi'], {
      queryParams: {
        state: 'recharge'
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
back(){
  if(this.state=='propmall'){
    this.r.navigate(['propmall'])
  } else if(this.state=="allprops"){
    this.r.navigate(['allprops'])
  } else if(this.state=='exchange'){
    this.r.navigate(['exchange'])
  } else if(this.state=='viplevel'){
    this.r.navigate(['viplevel'])
  } else if(this.state=='mine'){
    this.r.navigate(['tabs/tab5'])
  }
  
}
toviplevel(){
  this.r.navigate(['viplevel'], {
    queryParams: {
      state: 'recharge'
    }
  });

}
}
