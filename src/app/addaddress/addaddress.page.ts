import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.page.html',
  styleUrls: ['./addaddress.page.scss'],
})
export class AddaddressPage implements OnInit {
  lianxiren = "是你姐姐"
  tel: number
  token: any
  dizhi: any
  constructor(
    public http: HttpClient,
    public r: Router,
    public storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '添加地址成功',
    });
    await alert.present();
  }
  async shibai() {
    const alert = await this.alertController.create({
      message: '添加地址失败',
    });
    await alert.present();
  }
  ionViewWillEnter() {
    this.storage.get('token').then((val) => {
      this.token = val
    })
  }
  add() {
    var url = "/api/userAddress/store"
    this.http.post(url, {}, {
      headers: {
        "token": this.token
      }
    }).subscribe(res => {
      let a = JSON.stringify(res)
      var dat = JSON.parse(a).data;
      console.log(JSON.parse(a))
      // this.lianxiren=dat.name
      this.tel = dat.mobile
      this.dizhi = dat.address

      if (JSON.parse(a).message == '添加成功') {
        this.presentAlert()
        this.r.navigate(['address'])
      } else {
        this.shibai()
      }
    });
  }
  back() {
    this.r.navigate(['address'])
  }


}
