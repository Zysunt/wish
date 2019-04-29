import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-game1',
  templateUrl: './game1.page.html',
  styleUrls: ['./game1.page.scss'],
})
export class Game1Page implements OnInit {

  daojishi: any = '90s'
  pointer = 0
  End = false
  dui = 1
  
  daoju = false
  duicount: number = 10
  Answer = [{'o1':"我",'o2':"哈",'o3':"啊",'o4':'啥'},{'o1':"我",'o2':"哈",'o3':"啊",'o4':'啥'},{'o1':"我",'o2':"哈",'o3':"啊",'o4':'啥'},]
  isused: any = false
  labels = {
    text: 'test',
    selected: false
  }
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
    this.r.navigate(['sendsuccess'], {
      queryParams: {
        state: 'game1'
      }
    });
  }
  touploadself(){
    this.r.navigate(['uploadself'])
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
