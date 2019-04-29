import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editadd',
  templateUrl: './editadd.page.html',
  styleUrls: ['./editadd.page.scss'],
})
export class EditaddPage implements OnInit {
  lianxiren = "是你姐姐"
  tel: number
  dizhi: any
  num: any
  moren = 1
  token: any = 'eaXN2IzMzA3NDk1ZjU5NWQonV9EOVy4'
  constructor(
    public http: HttpClient,
    public r: Router,
    public alertController: AlertController,
    public storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val
    })
  }

  ionViewWillEnter() {
    this.storage.get('token').then((val) => {
      this.token = val
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '修改成功',
      mode: 'ios',
    });
    await alert.present();
  }
  async delet() {
    const alert = await this.alertController.create({
      message: '删除成功',
      mode: 'ios',
    });
    await alert.present();
  }
  changemoren() {
    if (this.moren == 1) {
      this.moren = 2
      console.log(this.moren)
    } else {
      this.moren = 1
      console.log(this.moren)
    }

  }
  deletefun() {
    var url = '/api/userAddress/delete'
    this.http.post(url, {}, {
      headers: {
        "token": this.token
      }
    }).subscribe(res => {
      let a = JSON.stringify(res)
      console.log(JSON.parse(a))
      if (JSON.parse(a).message == '删除成功') {
        this.delet()
      }

    });

  }
  updatefun() {
    var url = '/api/userAddress/update'
    this.http.post(url, { 'token': this.token }).subscribe(res => {
      let a = JSON.stringify(res)
      console.log(JSON.parse(a))
      this.lianxiren = JSON.parse(a).name
      this.tel = JSON.parse(a).mobile
      this.num = JSON.parse(a).address
      this.moren = JSON.parse(a).is_default
      if (JSON.parse(a).message == '修改成功') {
        this.presentAlert()
        this.r.navigate(['address'])
      }

    });

  }
  back() {
    this.r.navigate(['address'])
  }

}
