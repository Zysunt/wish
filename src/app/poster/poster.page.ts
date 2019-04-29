import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-poster',
  templateUrl: './poster.page.html',
  styleUrls: ['./poster.page.scss'],
})
export class PosterPage implements OnInit {
  fxx=false
  jinbi=900
  nowsjinbi=700
  appmiaosu="丁神app v1.0版本正式上线，为了庆祝app上线。我们开放了首冲折扣。"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  fx(){
    if(this.fxx==false){
      this.fxx=true
    }
  }
  guanbifenx(){
    if(this.fxx==true){
      this.fxx=false
    }
  }
  back(){
this.r.navigate(['propmall'])
  }
}
