import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-checkupdate',
  templateUrl: './checkupdate.page.html',
  styleUrls: ['./checkupdate.page.scss'],
})
export class CheckupdatePage implements OnInit {
  show = false
  company="不得不升级换代"
  constructor(
    public r:Router,
    public nav:NavController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: '已是最新版本',
      mode:'ios'
    });

    await alert.present();
  }
  back(){
    // this.r.navigate(['set'])
    this.nav.back();
  }
  guanbi() {

    if (this.show == true) {
      this.show = false
    }
    // this.r.navigate(['set'])
  }
  saveinof() {
    if (this.show == false) {
      this.show = true
    }
  }
}
