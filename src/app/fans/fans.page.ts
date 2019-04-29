import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-fans',
  templateUrl: './fans.page.html',
  styleUrls: ['./fans.page.scss'],
})
export class FansPage implements OnInit {
    searchs = [
      '心愿',
      '活动',
      '用户',
      '邀约',
    ];
    iszaixian = "在线"
    count = 90
    IsVip=true
    guanzhu = true
    namepeople = "说你就安静啊"
    constructor(
      public r: Router
    ) { }
  
    ngOnInit() {
    }
    isguanzhu(){
      if(this.guanzhu==true){
        this.guanzhu=false
      } else{
        this.guanzhu= true
      }
    }
    back() {
      this.r.navigate(['tabs/tab5'])
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
  