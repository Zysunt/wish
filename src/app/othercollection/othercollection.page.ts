import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";


@Component({
  selector: 'app-othercollection',
  templateUrl: './othercollection.page.html',
  styleUrls: ['./othercollection.page.scss'],
})
export class OthercollectionPage implements OnInit {



  isdianzan=false
  isstart = "未开始"
    wishwall = true
    wishmiaosu = "你是斤斤计较斤斤计较斤斤计较坚持"
    manname = "百货商店吧"
    mancount = 90
    pinglun = 877
    aixin = 221
    start="已开始"
    dianzan = 1;
    guanzhu = false
    ishuangguan = true
    IsVip = true
    famouseman = false;
    talentshow = false
    yikaishi = false;
    weikaishi = true;
    yijieshu = false;
    public xinyuan = true;
    activity = "weikais"
    peoplename = "那就是掰成几瓣"
    qianming = "寄生虫病本宝宝宝宝宝宝宝宝宝宝的"
    meetsquare = false
    fabumiaosu = "你说的妇女解放不不不不不不不不不"
    searchs = [
      '心愿',
      '活动',
      '用户',
      '邀约',
    ];
    constructor(
      public nav: NavController,
      public router: Router
    ) { }
    weikaishifun(){
      this.router.navigate(['hddetails'], {
        queryParams: {
          states: 'othercollection'
        }
      });
    }
    yikaishifun(){
      this.router.navigate(['my-conductactive'], {
        queryParams: {
          state: 'othercollection'
        }
      });
  
    }
    
    hddetails() {
      this.router.navigate(['hddetails'], {
        queryParams: {
          states: 'othercollection'
        }
      });
  
    }
    
    initializeItems() {
      this.searchs = [
        '心愿',
        '活动',
        '用户',
        '邀约',
      ];
    }
    
    dianzanfun(){
      if(this.isdianzan==false){
        this.isdianzan=true
      } else{
        this.isdianzan=false
      }
    }
    back(){
      this.nav.back()
    }
    filters(searchbar) {
      //给作用域 items 一个默认值。
      this.initializeItems();
      //获取文本框里的 value
      var q = searchbar.target.value;
      console.log(q)
      //如果值是空字符串，则不过滤项目
      if (q.trim() && q == '') {
        return;
      }
      //否则 过滤一下 this.items
      if (q.trim() && q != '') {
        this.searchs = this.searchs.filter((v) => {
          if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            //return true;
            return (v.toLowerCase().indexOf(q.toLowerCase()) > -1)
          }
          return false;
        })
      }
    }
    
    dingwei() {
      console.log("定位");
      this.router.navigate(["location"]);
      //this.nav.navigateForward('LocationPage')
    }
    wish_wall() {
      console.log("心愿")
      this.meetsquare = false
      this.wishwall = true
      this.famouseman = false
      this.talentshow = false
    }
    famouse_man() {
      this.meetsquare = false
      this.wishwall = false
      this.famouseman = true
      this.talentshow = false
    }
    talent_show() {
      this.meetsquare = false
      this.wishwall = false
      this.famouseman = false
      this.talentshow = true
    }
    meet_square() {
      this.meetsquare = true
      this.wishwall = false
      this.famouseman = false
      this.talentshow = false
    }
    Isguanzhu() {
      if (this.guanzhu == false) {
        this.guanzhu = true
      } else {
        this.guanzhu = false
      }
    }
    tohuodong() {
      this.router.navigate(['tabs/tab2'])
    }
    toimgwish() {
      this.router.navigate(['imgwish'])
    }
    toelsehomepage() {
      this.router.navigate(['elsehomepage'])
    }
    ngOnInit() {
    }
  
  }
  