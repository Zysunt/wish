import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-albumx',
  templateUrl: './albumx.page.html',
  styleUrls: ['./albumx.page.scss'],
})
export class AlbumxPage implements OnInit {
show1=false
  constructor(
    public router:Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '确认删除吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  guanbi(){
    if(this.show1==true){
      this.show1=false
    }
  }
  showdelete(){
    if(this.show1==false){
      this.show1=true
    }
  }
  cancel(){
    this.router.navigate(['wishalbum'])
  }
}
