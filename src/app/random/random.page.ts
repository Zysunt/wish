import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  name:any="asndjnjin"
  IsVip=true
  juli=8
  guanzhu=90
  constructor(
    public r:Router
  ) { }
  back(){
    this.r.navigate(['yaoqinghaou'])
  }
  ngOnInit() {
  }
  tointsuccess(){
    this.r.navigate(['intsuccess'])
  }
}
