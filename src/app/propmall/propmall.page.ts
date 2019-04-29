import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router , Params, ActivatedRoute} from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-propmall',
  templateUrl: './propmall.page.html',
  styleUrls: ['./propmall.page.scss'],
})
export class PropmallPage implements OnInit {
  jinbi=800
  nowsjinbi=400
  state:any
  money=32423
  showcz=false
  daojishi:any=30
  payment=false
  Goldcoin=0
  timeDown:any
  constructor(
    public alertController: AlertController,
    public r:Router, public activeRoute: ActivatedRoute,
  ) { }
  @ViewChild('slide1') slide1;
  slideOpts = {
    effect: 'flip',  //轮播效果
    autoplay: {
      delay: 2000,
    },
    loop:true
  };
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });
  }
  slideDidChange(){
    this.slide1.startAutoplay();
  }
  toexchange(){
    this.r.navigate(['exchange'])
  }
  back(){
    if(this.state=='mine'){
      this.r.navigate(['tabs/tab5'])
    } else if(this.state=='annoucement'){
      this.r.navigate(['announcement'])
    } else if(this.state=='privilege'){
      this.r.navigate(['privilege'])
    }
  }
  toposter(){
    this.r.navigate(['poster'])
  }
  toallprops(){
    this.r.navigate(['allprops'])
  }
  tosuccess() {
    this.payment=true;
    if(this.Goldcoin==1){
      this.r.navigate(['successpayment'], {
        queryParams: {
          state: 'zhifu'
        }
      });
    } else{
      this.presentAlertConfirm()
     
    }
    
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: '丁神币不足，无法支付',
      mode:'ios',
      buttons: [
        {
          text: '确认',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '去充值',
          handler: () => {
            if(this.showcz==true){
              this.showcz=false
            }
            this.r.navigate(['recharge'], {
              queryParams: {
                state: 'propmall'
              }
            });
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  guanbipayment() {
    if (this.payment == true) {
      this.payment = false
    }
  }
  guanbicz(){
    if(this.showcz==true){
      this.showcz=false
    }
  }
  gorecharge(){
    if(this.showcz==true){
      this.showcz=false
    }
    this.r.navigate(['recharge'], {
      queryParams: {
        state: 'propmall'
      }
    });
  }
  openpay() {
    if (this.payment == false) {
      this.payment = true
    }
    this.timeDown = this.resetTime(30);
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
