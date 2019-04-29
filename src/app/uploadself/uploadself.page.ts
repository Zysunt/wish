import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-uploadself',
  templateUrl: './uploadself.page.html',
  styleUrls: ['./uploadself.page.scss'],
})
export class UploadselfPage implements OnInit {
  isimg = 1
  daoju = false
  isused = false
  constructor(
    public r: Router,
    public alertController: AlertController
  ) { }
  guanbi() {
    if (this.daoju == true) {
      this.daoju = false
    }
  }
  showdaoju() {
    if (this.daoju == false) {
      this.daoju = true
    }
  }
  async used() {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '确定使用道具吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: (blah) => {
            this.daoju = false
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            this.daoju = false
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  used0() {
    if (this.isused == false) {
      this.isused = true
    }
  }
  guanbiuse() {
    if (this.isused == true) {
      this.isused = false
    }
  }
  ngOnInit() {
  }
  isimgfun() {
    if (this.isimg == 1) {
      this.isimg = 0
    } else {
      this.isimg = 1
    }
  }
  back() {
    this.r.navigate(['game'])
  }
  touploadcredentials() {
    this.r.navigate(['uploadcredentials'])
  }
}
