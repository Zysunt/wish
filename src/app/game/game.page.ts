import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  daojishi: any = '90s'
  pointer = 0
  End = false
  dui = 1
  success = false
  daoju = false
  duicount: number = 10
  titlegame: any = "1.请问是你的静安寺的不接啊办法"
  Answer = [
    '吃西瓜', '吃香蕉', '开汽车', '打喷嚏'
  ]
  isused: any = false

  constructor(
    public r: Router,
    public alertController: AlertController
  ) { }
  
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
  showSuccess() {
    if (this.success == false) {
      this.success = true
      this.End=false
    }
  }
  touploadself(){
    this.r.navigate(['uploadself'], {
      queryParams: {
        state: 'game'
      }
    });
  }
  closesuccess() {
    if (this.success == true) {
      this.success = false
    }
  }
  openend(){
    if (this.success == false) {
      this.success = true
    }
  }
  guanbiend() {
    if (this.End == true) {
      this.End = false
    }
  }
  ngOnInit() {
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
    if (this.success == false) {
      this.success = true
    }
  }
  back() {
    this.r.navigate(['startactivities'], {
      queryParams: {
        state: 'game'
      }
    });
  }
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
  changePointer(item) {
    item++
    this.pointer = item - 1
    console.log(this.pointer)
    // item.selected=!item.selected;
  }

}
