import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dianzan',
  templateUrl: './dianzan.page.html',
  styleUrls: ['./dianzan.page.scss'],
})
export class DianzanPage implements OnInit {
  wishmiaosu = "你几时才拿啊阿啊阿啊阿啊"
  pinglun= 99
  IsVip=true
  isdianzan=false
  dianzan = 1
   manname = "时间"
   mancount = 900
   aixin = 8989
   ishuangguan = true
  constructor(
    public r:Router
  ) { }
  toimgwish(){

  }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  ngOnInit() {
  }
  back(){
this.r.navigate(['tabs/tab5'])
  }
}
