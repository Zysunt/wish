import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActionSheetController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage  } from "@ionic/storage";
import axios from 'axios'
@Component({
  selector: 'app-personalcard',
  templateUrl: './personalcard.page.html',
  styleUrls: ['./personalcard.page.scss'],
})
export class PersonalcardPage implements OnInit {
  show = false
  save = false
  showyy = false
  codeimg = false
  token:any='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC94aW55LndoNjYuY25cL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE1NTYyNjA1OTgsImV4cCI6MTU1NjI2NDE5OCwibmJmIjoxNTU2MjYwNTk4LCJqdGkiOiI1a3E3OU1KM0gwSExrRUxMIiwic3ViIjo3LCJwcnYiOiIxYmI0NTcxN2IzMzA3NDk1ZjU5NWQ3OThlZTcwNGE1MGZkMjk0YjAzIn0.Kd55ETiSc9lX6c8kfV8QhxUovkTMdPzXSzRt-ceucrw'

  constructor(
    public r: Router,
    public storage:Storage,
    public actionSheetController: ActionSheetController,
    public nav:NavController,
    public alertController: AlertController
  ) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '二维码名片',
      mode:'ios',
      buttons: [{
        text: '送给朋友',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: '收藏',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '保存图片',
        handler: () => {
          this.presentAlert()
          console.log('icon ion-image');
        }
      }, {
        text: '识别图中二维码',
        handler: () => {
          console.log('Favorite clicked');
        }
      },  {
        text: '编辑',
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: '定位到聊天内容',
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ionViewDidEnter(){
    this.storage.get('token').then((val) => {
        this.token = val
        console.log(this.token)
    })
}
ionViewWillEnter() {
    this.storage.get('token').then((val) => {
        this.token = val
        console.log(this.token)
    })
}
  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token= val
    })
    var url='/api/user/qrcode'
    axios({
      method: 'post',
      url: url,
      data: {token:this.token}
  }).then(res =>{
        console.log(res)
      }).catch(err =>{
        console.log(err)
              });
  }
  back() {
    // this.r.navigate(['set'])
    this.nav.back();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '保存成功',
      buttons: ['OK']
    });

    await alert.present();
  }
  guanbi() {

    if (this.showyy == true || this.codeimg==true) {
      this.showyy = false
      this.codeimg=false
    }
    // this.r.navigate(['set'])
  }
  saveimg(){
if(this.codeimg==false){
  this.codeimg = true;
}
this.show=false
  }
  savecode() {
    if (this.showyy == false || this.show==false) {
      this.showyy = true
      this.show = true
    }
  }
}
