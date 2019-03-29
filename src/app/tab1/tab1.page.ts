import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 public dianzan=1;
 public xinyuan = "wish-wall";
 wishwall = true;
 famouseman=false;
 talentshow=false;
 meetsquare=false;
 guanzhu = false;
 IsVip = true;
 huodongbiaoti = "水电费机阿迪 iiiii 次"
 huodongmiaosu = "门口 i 居委会报废车丢不好"
 stoptime = "2019-12-3";
 dizhi = "额外容光焕发的是"
 miaosu = 'nindfb测大说不不擅长表达出sdbjhsdb';
 name = '迪奥阿斯顿';
 darenxiuname = "牛腩粉 i 多少"
 wishmiaosu = 'asndshfbdhfbsdhfbsdhfbsdbfhsbdhsdbhsdb';
 pinglun = 89989;
 aixin = 89767;
 peoplename = "即可收到回复呗"
 fabumiaosu = "内附呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜不好惹啊单位发放风格"
 hour = "12分钟前"
 qianming = "hi 史蒂夫而为国分忧活动及史蒂夫而为国分忧活动及史蒂夫而为国分忧活动及搜狐就是你"
 constructor(
   public router:Router,
  ){}
  wish_wall(){
    console.log("心愿")
    this.meetsquare=false
    this.wishwall=true
    this.famouseman=false
    this.talentshow = false
  }
  famouse_man(){
    this.meetsquare=false
    this.wishwall=false
    this.famouseman=true
    this.talentshow = false
  }
  talent_show(){
    this.meetsquare=false
    this.wishwall=false
    this.famouseman=false
    this.talentshow = true
  }
  meet_square(){
    this.meetsquare=true
    this.wishwall=false
    this.famouseman=false
    this.talentshow = false
  }
 dingwei(){
   console.log("定位");
   this.router.navigate(["location"]);
   //this.nav.navigateForward('LocationPage')
 }
 toselect(){
   this.router.navigate(['select'])
 }
 Isguanzhu(){
   if(this.guanzhu==false){
     this.guanzhu=true
   } else{
     this.guanzhu=false
   }
 }
 tohand(){
  this.router.navigate(['hand'])
 }

}
