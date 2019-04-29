import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-my-prop',
  templateUrl: './my-prop.page.html',
  styleUrls: ['./my-prop.page.scss'],
})
export class MyPropPage implements OnInit {
  xiaoxi = "sixin"
  sixin =true
  tongguan=false
  tishi=false
  dati=false
  show=false
  isVip =true
  myname = "那是假的吧"
  miaosu = "电视剧男男女女男男女女男男女女男女"
  startdate = "2-30"
  enddate = "4-9"
  showtong=false
  showtishi=false
  showtihuan=false
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.r.navigate(['tabs/tab5'])
  }
  guanbi(){
    if(this.show==true){
      this.show=false
    } else if(this.showtong==true){
this.showtong=false
    } else if(this.showtishi==true){
      this.showtishi=false
    } else if(this.showtihuan==true){
      this.showtihuan=false
    }
  }
  tihuanka(){
    if(this.showtihuan==false){
      this.showtihuan=true
    }
  }
  tishika(){
    if(this.showtishi==false){
      this.showtishi=true
    }
  }
  tongguanka(){
if(this.showtong==false){
  this.showtong=true
}
  }
  showjieda(){
this.show=true
  }
  a(){
    if(this.sixin==false){
      this.sixin =true
      this.tongguan=false
      this.tishi=false
      this.dati=false
    }
    
  }
  b(){
    if(this.tongguan==false){
      this.sixin =false
      this.tongguan=true
      this.tishi=false
      this.dati=false
    }
  }
  c(){
    if(this.tishi==false){
      this.sixin =false
      this.tongguan=false
      this.tishi=true
      this.dati=false
    }
  }
  d(){
    if(this.dati==false){
      this.sixin =false
      this.tongguan=false
      this.tishi=false
      this.dati=true
    }
  }
tomon(){
this.r.navigate(['money'])
}
}
