import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  xiaoxi = "sixin"
public friendname = "卡尼斯但是";
public miaosu = "的舒服的就是改变的就是dsfsd管";
public neirong = "那是地方就是你的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴就是你的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴就是你的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答的"
public IsVip = true;
manname = "你说sdffewfds的那句"
name = "内那地方"
msg = "男士冬季男男女女男男女女男男女女"
sixin = true;
tongzhicont = "难道是坎坎坷坷坎坎坷坷坎坎坷坷看看"
date = "2019-4-4"
datetz = "星期一 9:12"
pinglun = false;
aiteme = false;
tongzhi = false;
isvip1 = false
hours = 90
isvip2=false
state:any="xiaoxi"
constructor( public r:Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  async showshanchu() {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '是否清除所有未读数',
      buttons: [
        {
          text: '取消',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
 
  tohuod(){
    this.r.navigate(['hddetails'])
  }
  toxittz(){
    this.r.navigate(['initiate'], {
      queryParams: {
        state: this.state
      }
    });
  }
  sixinfun(){
    this.sixin = true;
    this.pinglun = false;
    this.aiteme = false;
    this.tongzhi = false;
  }
  tocommentcont(){
    this.r.navigate(['commentcont'])
  }
  pinglunfun(){
    this.sixin = false;
    this.pinglun = true;
    this.aiteme = false;
    this.tongzhi = false;
  }
  aitemefun(){
    this.sixin = false;
    this.pinglun = false;
    this.aiteme = true;
    this.tongzhi = false;
  }

  tosixininter(){
    this.r.navigate(['sixininter'], {
      queryParams: {
        states: 'xiaoxi'
      }
    });

  }
  tongzhifun(){
    this.sixin = false;
    this.pinglun = false;
    this.aiteme = false;
    this.tongzhi = true;
  }
  tonewsatme(){
this.r.navigate(['news-at-me'])
  }
}
