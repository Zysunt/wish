import { Component, OnInit } from '@angular/core';
import { Router , Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-winpage',
  templateUrl: './winpage.page.html',
  styleUrls: ['./winpage.page.scss'],
})
export class WinpagePage implements OnInit {
  fxx = false
  pinlun=234
  huifu=false
  someone="基本三撒娇"
  state:any
  IsVip=true
  guanzhu=false
  name="送到你家啊点"
  miaos="是哪的加速度"
  hour=90
  hourt=89
  showhui=false
  faso=false
  pinl="你的那份 i 能否 i 不哈睡不好"
  dianzan=897
  isdianzan=false
  namepeople="nsjdnjbiwhsisa"
  windes="你的就是你粉丝"
  constructor(
    public r:Router,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.huifu=false
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
      console.log(this.state)
    });

  }
  toaitefirend(){
    this.r.navigate(['aitefirend'], {
      queryParams: {
        state: 'winpage'
      }
    });

  }
  showhuifu(){
    // if(this.showhui==false){
    //   this.showhui=true
    // }
    if(this.huifu==false){
this.huifu=true
    }
    
  }
  guanbihui(){
    if(this.huifu==true){
      this.huifu=false
    }
  }

  ionViewWillLeave(){
    this.huifu=false
  }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  showfaso(){
    if(this.faso==false){
      this.faso=true
    } else{
      this.faso=false
    }
  }
  guanbifenx(){
    this.fxx=false
  }
  fx(){
    this.fxx =true
      }
  back(){
    if(this.state=='close'){
      this.r.navigate(['myclosedactivities'])
    } else if(this.state=='jieshu'){
      this.r.navigate(['hdyijieshu'])
    } else if(this.state=='otherend')
    {
      this.r.navigate(['otherend'])
    } else if(this.state=='winprize'){
      this.r.navigate(['winprize'])
    }
  
  }
  
  Isguanzhu(){
    if(this.guanzhu==false){
      this.guanzhu=true
    } else{
      this.guanzhu=false
    }
        }
}
