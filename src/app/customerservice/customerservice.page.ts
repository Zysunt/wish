import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
@Component({
  selector: 'app-customerservice',
  templateUrl: './customerservice.page.html',
  styleUrls: ['./customerservice.page.scss'],
})
export class CustomerservicePage implements OnInit {
  datetz="星期一 9:9"
  tongzhicont = "你撒啊阿啊阿啊阿啊阿啊阿啊阿啊阿"
  zi="是你家弟阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
this.r.navigate(['tabs/tab5'])
  }
}
