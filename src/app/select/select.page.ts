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
    public navc:NavController) { }

  ngOnInit() {
  }
  back(){
    this.navc.navigateRoot(["/tabs/tab1"]);
  }
}
