import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import axios from "axios";
@Component({
  selector: 'app-wishcontent',
  templateUrl: './wishcontent.page.html',
  styleUrls: ['./wishcontent.page.scss'],
})
export class WishcontentPage implements OnInit {
  weizhi = "苏州城区";
  token:any="";
  constructor(
    public alertController: AlertController,
    public r: Router,
    public storage:Storage,
  ) { }

  ngOnInit() {
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
  async seccussfabu() {
    const alert = await this.alertController.create({
      message: '发布成功',
      mode:'ios',
      buttons: [{
        text: '确定',
        handler:()=>{
          this.r.navigate(['sendsuccess'], {
            queryParams: {
              state: 'wish'
            }
          });
        }
      }]
    });
    await alert.present();
  }
  toaitefirend() {
    this.r.navigate(['wishfriend']);
  }
  back() {
    this.r.navigate(['tabs/tab1']);
  }
  
  fabu() {
    var ajaxUrl = "/api/wish";
    var header = {"Authorization":'Bearer'+this.token};
    axios({
      method: 'post',
      url: ajaxUrl,
      headers: header
    }).then(res => {
      console.log(res);

    }).catch(err => {
      console.log(err);
    });
    
  }
}
