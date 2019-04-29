import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage  } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
import axios from 'axios'
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  token:any
  guanyuwomen = "丁神坚守“正道成功”的价值取向，坚定地践行用合法方式获得商业成功，致力于成为一家为社会创造最大价值的公司。自创立之初，丁神就秉持诚信经营的核心理念，坚守正品行货、倡导品质经济，成为中国备受消费者信赖的零售平台；丁神坚定“客户为先”的服务理念，大力发展自建物流，保障用户体验，成为领先全球的新标杆；依托于所有丁神人的拼搏和激情，丁神持续十五年保持接近140%的年均复合增长率。丁神以丰富的应用场景和精准的大数据为根基，创新性地在数字科技等领域大胆探索，一次又一次地创造了发展奇迹！"
  constructor(
    public r:Router,
    public http: HttpClient,
    public storage:Storage,
    public alertController: AlertController,
    public nav:NavController
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.storage.get('token').then((val) => {
      this.token= val
    })
    var url ='/api/other/index'
    axios({
      method: 'post',
      url: url,
      headers: {token:this.token}
  }).then(res =>{
    console.log(res)
        let a = JSON.stringify(res)
            if( JSON.parse(a).message=='获取成功'){
             this.guanyuwomen=JSON.parse(a).data.content
            }
      }).catch(err =>{
console.log(err)
              });
  }
back(){
// this.r.navigate(['set'])
this.nav.back();
}
}
