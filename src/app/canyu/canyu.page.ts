import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-canyu',
  templateUrl: './canyu.page.html',
  styleUrls: ['./canyu.page.scss'],
})
export class CanyuPage implements OnInit {
  IsVip = true
  guanzhu = false
  state:any
  manname = "的few景不长"
  miaos = " 就是豆腐脑开发"
  hour = "2019-4-23 1:22"
  mingchen = "能坚持多少年呢"
  neirong = "dnjs你觉得谁谁谁谁谁谁"
  dizhi = "出门时打进精彩呢"
  constructor(
    public r:Router,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
      console.log(this.state)
    });
  }
  ionViewWillEnter(){
    
  }
  Isguanzhu(){
    if(this.guanzhu==false){
      this.guanzhu=true
    } else{
      this.guanzhu=false
    }
  }
  back(){
    if(this.state=="yikaishi"){
      this.r.navigate(['yikaishi'])
    } else if(this.state=="jieshu"){
      this.r.navigate(['hdyijieshu'])
    } else if(this.state=="myyikaishi"){
      this.r.navigate(['my-conductactive'])
    } else if(this.state=="myclosed"){
      this.r.navigate(['myclosedactivities'])
    } else if(this.state=='startactivities'){
      this.r.navigate(['startactivities'])
    } else if(this.state){
      this.r.navigate(['otherend'])
    }

  }

}
