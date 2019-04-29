import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-otherdianzan',
  templateUrl: './otherdianzan.page.html',
  styleUrls: ['./otherdianzan.page.scss'],
})
export class OtherdianzanPage implements OnInit {

  
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
      public r:Router,
      public nav:NavController
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
      this.nav.back()
    }
  }
  