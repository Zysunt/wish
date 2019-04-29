import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-headhanger',
  templateUrl: './headhanger.page.html',
  styleUrls: ['./headhanger.page.scss'],
})
export class HeadhangerPage implements OnInit {
  isused=false
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  usedfun(){
    if(this.isused==false){
      this.isused=true
    } else{
      this.isused=false
    }
  }
  back(){
    this.r.navigate(['viplevel'])
  }
}
