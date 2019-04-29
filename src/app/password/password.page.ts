import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import axios  from "axios";
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
  }
  login_info: any
  tel: any
  code: any
  public headers: any = new Headers({ 'Content-Type': 'application/json' });
  constructor(public r: Router,
    public alertController: AlertController,
    public http: HttpClient,
    public storage: Storage) { }

  ngOnInit() {
  }
  back() {
    this.r.navigate(['login'])
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '手机号码不正确',
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async codeb() {
    const alert = await this.alertController.create({
      message: '验证码不正确',
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  topass() {
    var url = '/api/judgeSms';
    console.log(this.code)
    if (this.tel == undefined || /^1[3456789]\d{9}$/.test(this.tel) == false) {
      this.presentAlert()
    } else if(this.code == undefined){
      this.codeb()
    } else {
      this.r.navigate(['password0'], {
        queryParams: {
          mobile: this.tel
        }
      });
  
      var that = this
      this.http.post(url, { mobile: this.tel, code: this.code }, { headers: this.headers })
        .subscribe(function (res) {
          let a = JSON.stringify(res)
          let dat = JSON.parse(a)
          console.log(res)
        })
    }

  }

  async codefun() {
    const alert = await this.alertController.create({
      message: '手机号码格式不正确',
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  settime() {
    var that = this
    var e = /^1[3456789]\d{9}$/
    var url = '/api/sendSms';
    if (this.tel == undefined || !e.test(this.tel)) {
      this.codefun()
    }
    else {
      axios({
        method: 'post',
        url: url,
        data: { 'mobile': this.tel }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
      this.dingshiqi()
    }
  }
  dingshiqi() {
    if (this.verifyCode.countdown == 0) {
      this.verifyCode.countdown = 60;
      this.verifyCode.verifyCodeTips = "获取验证码";
      this.verifyCode.disable = true;
      return;
    } else {
      this.verifyCode.countdown--;
      this.verifyCode.disable = false;
    }
    setTimeout(() => {
      this.verifyCode.verifyCodeTips = "重新获取" + this.verifyCode.countdown + "秒";
      this.dingshiqi();
    }, 1000);
  }

}
