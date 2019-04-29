import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
 
    payment = false
    Goldcoin=1
    daojishi:any=30
    showcz=false
    jinbi = [
      123, 345, 67567, 7876, 324, 42234, 2345
    ]
    money = 8976
    timeDown: any;
    constructor(
      public r: Router
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
          state: 'exchange'
        }
      });
    }
    tosuccess() {
      this.payment=true;
      if(this.Goldcoin==1){
        this.r.navigate(['successpayment'], {
          queryParams: {
            state: 'duihuan'
          }
        });
      } else{
        if(this.showcz==false){
          this.showcz=true
        }
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
          // clearInterval(time);
        }
      }
      countdown()
    }
  
    
  
  }
  