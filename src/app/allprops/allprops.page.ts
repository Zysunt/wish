import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-allprops',
  templateUrl: './allprops.page.html',
  styleUrls: ['./allprops.page.scss'],
})
export class AllpropsPage implements OnInit {
  payment = false
  Goldcoin=0
  daojishi:any=30
  showcz=false
  jinbi = [
    123, 345, 67567, 7876, 324, 4352234, 2345
  ]
  money = 8976
  timeDown: any;
  constructor(
    public r: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    
  }
  guanbicz(){
    if(this.showcz==true){
      this.showcz=false
    }
  }
  
  back() {
    this.r.navigate(['propmall'])
  }
  guanbipayment() {
    if (this.payment == true) {
      this.payment = false
    }
    // this.timeDown = this.resetTime(30);
  }
  openpay() {
    if (this.payment == false) {
      this.payment = true
    }
    this.timeDown = this.resetTime(30);
  }
  gorecharge(){
    if(this.showcz==true){
      this.showcz=false
    }
    this.r.navigate(['recharge'], {
      queryParams: {
        state: 'allprops'
      }
    });
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
                state: 'allprops'
              }
            });
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
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
        console.log(that.daojishi)
      } else {
        console.log('已结束')
        // clearInterval(time);
      }
    }
    countdown()
  }

  

}
