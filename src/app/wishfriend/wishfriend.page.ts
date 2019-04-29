import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-wishfriend',
  templateUrl: './wishfriend.page.html',
  styleUrls: ['./wishfriend.page.scss'],
})
export class WishfriendPage implements OnInit {
  IsVip = true;
  name = [
    'jskadbfh',
    '届合肥举办的女生',
    '而脱氧核糖个人奋斗',
    '俄无法绕过',
    '年底恢复'
  ]
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
back(){
  this.r.navigate(['wishcontent'])
}
}
