import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {  Params, ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-password0',
  templateUrl: './password0.page.html',
  styleUrls: ['./password0.page.scss'],
})
export class Password0Page implements OnInit {
passw:any
pass:any
tel:any
  constructor(
    public r:Router,
    public alertController: AlertController,
    public http: HttpClient,
    public activeRoute: ActivatedRoute,
    public storage: Storage
  ) { }

  ngOnInit() {


 this.activeRoute.queryParams.subscribe((params: Params) => {
      this.tel = params['mobile'];
      console.log(this.tel)
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '两次密码不一致',
      mode:'ios',
      buttons: ['确认']
    });
    await alert.present();
  }
  async gaixiu() {
    const alert = await this.alertController.create({
      message: '修改密码成功',
      mode:'ios',
      buttons: [
       {
          text: '确定',
          handler: () => {
           this.r.navigate(['login'])
          }
        }
      ]
    });
    await alert.present();
  }
  fns(msg){
    if(msg=='修改成功'){
      this.gaixiu()
    }
  }
back(){
  this.r.navigate(['password'])
}
tologin(){
  var url = '/api/forgetPassword';
if(this.passw!==this.pass){
  this.presentAlert()
} else{
  var that=this
  this.http.post(url,{"mobile":this.tel,"password":this.passw,"password_confirmation":this.pass,'type':3 })
  .subscribe(function(res){
    let a = JSON.stringify(res)
    let dat=JSON.parse(a)
    if(dat.message=="修改成功"){
      that.fns(dat.message)
    }
    console.log(res)
  })
}
}
}
