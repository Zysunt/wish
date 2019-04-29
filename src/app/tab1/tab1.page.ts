import { Component,ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  state="shouye"
 public dianzan=1;
 public xinyuan = "wish-wall";
 manname = "黑科技啊斯巴达克"
 wishwall = true;
 mancount = 78970;
 famouseman=false;
 talentshow=false;
 meetsquare=false;
 ispl=false
 guanzhu = false;
 ishuangguan = true
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
 isdianzan=false
 peoplename = "即可收到回复呗"
 fabumiaosu = "内附呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜不好惹啊单位发放风格"
 hour = "12分钟前"
 qianming = "hi 史蒂夫而为国分忧活动及史蒂夫而为国分忧活动及史蒂夫而为国分忧活动及搜狐就是你"
 constructor(
   public router:Router,
  ){}
  @ViewChild('slide1') slide1;
  slideOpts = {
    effect: 'flip',  //轮播效果
    autoplay: {
      delay: 2000,
    },
    loop:true
  };
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  tovideo(){
    this.router.navigate(['videowish'])
  }
  toclosed(){
    this.router.navigate(['myclosedactivities'], {
      queryParams: {
        state: 'shouye'
      }
    });
  }
  slideDidChange(){
    this.slide1.startAutoplay();
  }
  ionViewDidEnter() {
    // this.slides.startAutoplay();
    }
    ionViewDidLeave() {
      // this.slide1.stopAutoplay();
  }
  startAutoplay() {
    var slides = document.querySelector('ion-slides');
    slides.options = {
      effect: 'flip'
    }
  }
  toyaoyue(){
    this.router.navigate(['initiate'], {
      queryParams: {
        state: this.state
      }
    });
  }
  toxiaoxi(){
    this.router.navigate(['tabs/tab4'])
  }
  huoxiangqing(){
    this.router.navigate(['activitydetails'])
  }
  toelsehomepage(){
    this.router.navigate(['elsehomepage'], {
      queryParams: {
        state: this.state
      }
    });
  }
  toimgwish(){
    this.router.navigate(['imgwish'])
  }
  tohuodong(){
    this.router.navigate(['tabs/tab2'])
  }
 
  tomine(){
    this.router.navigate(['tabs/tab5'])
  }
  toscan(){
    this.router.navigate(['bootpage'])
  }
  location(){
    this.router.navigate(['countdown'])
  }
  wish_wall(){
    console.log("心愿")
    this.meetsquare=false
    this.wishwall=true
    this.famouseman=false
    this.talentshow = false
  }
  showpinl(){
    if(this.ispl==false){
      this.ispl=true
    }
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
