import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.page.html',
  styleUrls: ['./searchdetails.page.scss'],
})
export class SearchdetailsPage implements OnInit {
  wishwall = true
  wishmiaosu = "你是斤斤计较斤斤计较斤斤计较坚持"
  manname = "百货商店吧"
  mancount = 90
  pinglun = 877
  aixin = 221
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
  isdianzan=false
  fabumiaosu = "你说的妇女解放不不不不不不不不不"
  searchs = [
    '心愿',
    '活动',
    '用户',
    '邀约',
  ];
  constructor(
    public navc: NavController,
    public router: Router
  ) { }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  initializeItems() {
    this.searchs = [
      '心愿',
      '活动',
      '用户',
      '邀约',
    ];
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
  weikaishifun() {
    this.weikaishi = true;
    this.yikaishi = false;
    this.yijieshu = false
  }
  yikaishufun() {
    this.weikaishi = false;
    this.yikaishi = true;
    this.yijieshu = false
  }
  hddetails() {
    this.router.navigate(['hddetails'])
  }
  yijieshufun() {
    this.weikaishi = false;
    this.yikaishi = false;
    this.yijieshu = true
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
    this.router.navigate(['elsehomepage'], {
      queryParams: {
        state: 'search'
      }
    });
    
  }
  ngOnInit() {
  }
  back() {
    this.navc.navigateRoot(["/tabs/tab1"]);
  }
}
