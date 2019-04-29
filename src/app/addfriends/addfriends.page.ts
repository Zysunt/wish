import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.page.html',
  styleUrls: ['./addfriends.page.scss'],
})
export class AddfriendsPage implements OnInit {
  namepeople = "那就是电"
  IsVip = true
  haou = "tongxunlu"
  guanzhu = false
  tongxunlu = true
  weibo = false;
  weixin = false;
  qianming = "nasjbdjhbfabjsadbfjhbj哦额风华绝代个 i 哈"
  constructor(
    public r: Router
  ) { }

  ngOnInit() {
  }
  tochat(){
    this.r.navigate(['sixininter'], {
      queryParams: {
        states: 'addfriends'
      }
    });

  }
  weibofun() {
    // if (this.weibo = false) {
      this.weibo = true

    // } 
    this.weixin = false
    this.tongxunlu = false
  }
  weixinfun() {
    // if (this.weixin = false) {
      this.weixin = true

    // }
    this.weibo = false
    this.tongxunlu = false
  }
  txlfun() {
    // if (this.tongxunlu = false) {
      this.tongxunlu = true
    // }
    this.weibo = false
    this.weixin = false
  }
  isguanzhu() {
    if (this.guanzhu == false) {
      this.guanzhu = true
    } else {
      this.guanzhu = false
    }
  }
  back() {
    this.r.navigate(['tabs/tab5'])
  }
}
