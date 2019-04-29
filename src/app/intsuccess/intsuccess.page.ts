import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
@Component({
  selector: 'app-intsuccess',
  templateUrl: './intsuccess.page.html',
  styleUrls: ['./intsuccess.page.scss'],
})
export class IntsuccessPage implements OnInit {

  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.r.navigate(['yaoqinghaou'])
  }
  tohome(){
this.r.navigate(['tabs/tab1'])
  }
}
