import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  public now = '苏州';

  constructor(
    public router:Router,
    public navc:NavController) { }

  ngOnInit() {
  }
goRoot(){
  console.log("返回首页");
  this.navc.navigateRoot(["/tabs/tab1"]);
}
}
