import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
  }
  tel: any
  passw: any
  pass: any
  code: any
  password_confirmation: any
  code1: any
  data: any
  token: any
  login_info: any
  status_code: any
  // local headers = {
  //   ['Access-Control-Allow-Origin'] = '*',
  //   ['Access-Control-Allow-Credentials'] = true,
  // } 
  // public headers: any = new Headers({ 'Content-Type': 'application/json' });
  constructor(public router: Router,
    public alertController: AlertController,
    public http: HttpClient,
    public storage: Storage) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.data = {
      tel: this.tel,
      pass: this.passw
    }
    this.storage.set('data', this.data);
  }
  tomine() {
    var datau = { 'mobile': this.tel, 'password': this.passw, 'password_confirmation': this.pass, 'code': this.code1 }
    var myreg = /^1[3456789]\d{9}$/;
    if (this.tel == undefined || !myreg.test(this.tel) || this.passw == undefined) {
      this.presentAlert()
    } else if (this.pass !== this.passw) {
      this.mimabu()
    } else {
      var url = "/api/register";
      //    var headers = {
      //     ['Access-Control-Allow-Origin'] : '*', 
      //     ['Access-Control-Allow-Credentials'] :true,
      //  }
      axios({
        method: 'post',
        url: url,
        data: datau,
        // headers:headers
      }).then(res => {
        console.log(res)
        var data = JSON.parse(JSON.stringify(res)).data
        if (data.message == "密码长度6-32之间！") {
          this.mimab()
        }
        if (data.message == "手机号不能重复！") {
          this.telc()
        }
        if (data.message == "密码和重复密码不同！") {
          this.mimabu()
        }
        if (data.message == "验证码不能为空！") {
          this.codenull()
        }
        if (data.message == '注册成功') {
          var promise1 = this.storage.set('status_code', data.status_code);
          var promise2=this.storage.set('token', data.token);
          var promise3 = this.storage.set('data', data);
          Promise.all([promise1, 
            promise2,
             promise3]).then(function(values) {
            console.log(values);
            this.zhuce()
          });
         
          
        }
      }).catch(err => {
        console.log(err)
      });
    }
  }

  back() {
    this.router.navigate(['tabs/tab5'])
  }
  login() {
    this.router.navigate(['login'])
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
        data: { 'mobile': this.tel ,'type':2 }
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
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '账号密码不正确',
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async mimabu() {
    const alert = await this.alertController.create({
      message: '两次密码不一致',
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async mimab() {
    const alert = await this.alertController.create({
      message: "密码长度6-32之间！",
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async telc() {
    const alert = await this.alertController.create({
      message: "手机号不能重复！",
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async codenull() {
    const alert = await this.alertController.create({
      message: "验证码不能为空！",
      mode: 'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async zhuce() {
    const alert = await this.alertController.create({
      message: "注册成功",
      mode: 'ios',
      buttons: [{
        text: ' 确定',
        handler: (blah) => {
          this.router.navigate(['tabs/tab5'])
        }
      }]
    });
    await alert.present();
  }
}
