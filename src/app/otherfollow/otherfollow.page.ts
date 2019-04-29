import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-otherfollow',
  templateUrl: './otherfollow.page.html',
  styleUrls: ['./otherfollow.page.scss'],
})
export class OtherfollowPage implements OnInit {

    searchs = [
      '心愿',
      '活动',
      '用户',
      '邀约',
    ];
    iszaixian = "在线"
    count = 90
    IsVip=true
    guanzhu = false
    namepeople = "说你就安静啊"
    constructor(
      public r: Router,
      public nav:NavController
    ) { }
  
    ngOnInit() {
    }
    guanzhufun(){
      if(this.guanzhu==false){
        this.guanzhu=true
      } else{
        this.guanzhu=false
      }
    }
    back() {
      this.nav.back()
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
  }
  
