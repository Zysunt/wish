import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-yaoqinghaou',
  templateUrl: './yaoqinghaou.page.html',
  styleUrls: ['./yaoqinghaou.page.scss'],
})
export class YaoqinghaouPage implements OnInit {
imgsrc:any=[
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
  'assets/icon/activity/i5.png',
]
nameu="你家snjds的山山水水"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
this.r.navigate(['initiate'])
  }
  tosendsuccess(){
  this.r.navigate(['intsuccess'])  
  }
  torandom(){
    this.r.navigate(['random'])
  }
}
