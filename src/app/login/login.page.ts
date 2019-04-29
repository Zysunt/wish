import { Component, OnInit ,Injectable} from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
// import { Http, Jsonp } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs/';
import axios from 'axios'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mima = true;
  public mimalog = "mi";
  arr = new Array("18245126321", "123456");
  list = {}
  tel: any
  passw: any
  code1: any
  data: any
  public login_info:any;
  islogin=false
  alert:any
  type=1
  code:number=123456
  public headers: any = new Headers({ 'Content-Type': 'application/json' });
  // public sto=window.localStorage;
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
  }
  constructor(
    public router: Router,
    public storage: Storage,
    public alertController: AlertController,
    // public http: Http,
    // public jsonp: Jsonp,
    public http: HttpClient,

  ) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '账号密码不正确',
      mode:'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async zhanghao() {
    const alert = await this.alertController.create({
      message: '账号不存在',
      mode:'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async presentA() {
    const alert = await this.alertController.create({
      message: '账号不正确',
      mode:'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async mimabu() {
    const alert = await this.alertController.create({
      message: '密码不能为空',
      mode:'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async loginf() {
    const alert = await this.alertController.create({
      message: '登录成功',
      mode:'ios',
      buttons: [{
        text: '确定',
        handler:()=>{
          this.router.navigate(["tabs/tab5"], {
            queryParams: {
              logined: this.tel
            }
          });
        }
      }]
    });
    await alert.present();
  }
  tomine(){
    var url = "/api/login";
    var myreg = /^1[3456789]\d{9}$/;
    var datau={ 'mobile': this.tel, 'password': this.passw,'type':this.type,'code':this.code }
    if(this.type==1){
      if (this.tel == undefined || !myreg.test(this.tel) || this.passw == undefined) {
        this.presentAlert()
      } else {
        this.http.post(url,datau,{headers:this.headers}).subscribe(res => {
            let a = JSON.stringify(res)
            console.log(res)
            if( JSON.parse(a).message=="密码不能为空！"){
              this.mimabu()
            }
            if(JSON.parse(a).message=="账户不存在"){
              this.zhanghao() 
            }
            if( JSON.parse(a).message=='登录成功'){
              Promise.all([
              this.storage.set('xinxi', JSON.parse(a).data),
              this.storage.set('token', JSON.parse(a).token),
              this.storage.set('status_code',JSON.parse(a).status_code)]).then(()=>{
                this.loginf();
                console.log(JSON.parse(a).data)
              });
            }
        });
      }
    } else if(this.type==2){
      if (this.tel == undefined || !myreg.test(this.tel)) {
        this.presentA()
      } else {
        this.http.post(url,{ 'mobile': this.tel, 'type':this.type,'code':this.code }).subscribe(res => {
            let a = JSON.stringify(res)
            console.log(res)
            if( JSON.parse(a).message=='登录成功'){
              Promise.all([
                this.storage.set('xinxi', JSON.parse(a).data),
                this.storage.set('token', JSON.parse(a).token),
                this.storage.set('status_code',JSON.parse(a).status_code)]).then(()=>{
                  this.loginf();
                  console.log(JSON.parse(a).data)
                });
           }
        });
      }
    }
  }
  ionViewDidLeave() {
    this.data = {
      tel: this.tel,
      pass: this.passw
    }
    this.storage.set('data', this.data);
  }
  topassword() {
    this.router.navigate(['password'])
  }
  ngOnInit() {
  }
  mianmi() {
    this.mima = false;
    this.type=2
    console.log(this.type)
  }
  mimalogin() {
    this.mima = true;
    this.type=1
    console.log(this.type)
  }
  zhuce() {
    this.router.navigate(["register"]);
  }
  async codefun() {
    const alert = await this.alertController.create({
      message: '手机号码格式不正确',
      mode:'ios',
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
        data: { 'mobile': this.tel ,'type':1 }
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
