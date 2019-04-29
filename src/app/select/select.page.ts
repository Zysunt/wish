import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
public zuijin = '香水'
public changyong = "演出"
zuijinsuosou:any = [
  '心愿',
  '活动',
  '用户',
  '邀约'
]
suosouchangyong:any = [
  '心愿香水',
  '活动',
  '用户',
  '邀约asides'
]

  constructor(
    public router:Router,
    public navc:NavController) { 
    }

  ngOnInit() {
  }
  tocontent(){
    this.router.navigate(['searchdetails'])
  }
  back(){
    this.navc.navigateRoot(["/tabs/tab1"]);
  }
  initializeItems() {
    this.zuijinsuosou = [
      '心愿',
      '活动',
      '用户',
      '邀约',
        ];
      }
  filters(searchbar){
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
  this.zuijinsuosou = this.zuijinsuosou.filter((v) => {
    if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
      //return true;
      return (v.toLowerCase().indexOf(q.toLowerCase()) > -1)
    }
    return false;
  })
}
this.router.navigate(['searchdetails'])
  }
}
