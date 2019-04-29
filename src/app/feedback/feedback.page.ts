import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  token: any
  sub: any
  constructor(
    public http: HttpClient,
    public r: Router,
    public storage: Storage,
    public alertController: AlertController,
    public nav: NavController
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
      message: '提交信息成功',
    });
    await alert.present();
  }
  submit() {
    var url = "/api/feedback/index"
    this.http.post(url, { 'data': this.sub },
      {
        headers: {
          "token": this.token
        }
      }).subscribe(res => {
        let a = JSON.stringify(res)
        var dat = JSON.parse(a).data;
        this.sub = dat;
        console.log(JSON.parse(a))
        if (JSON.parse(a).message == '添加成功') {
          this.presentAlert()
          this.r.navigate(['tabs/tab5'])
        }
      });
  }
  back() {
    // this.r.navigate(['set'])
    this.nav.back();
  }
  tomine() {
    this.r.navigate(['tabs/tab5'])
  }

}
