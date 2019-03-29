import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.page.html',
  styleUrls: ['./appoint.page.scss'],
})
export class AppointPage implements OnInit {
  IsVip = false;
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
    this.r.navigate(['hand'])
      }
}
