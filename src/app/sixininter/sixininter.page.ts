import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-sixininter',
  templateUrl: './sixininter.page.html',
  styleUrls: ['./sixininter.page.scss'],
})
export class SixininterPage implements OnInit {
  datetz="星期一 9:9"
  state = "sixin"
  states:any
  tongzhicont = "你撒啊阿啊阿啊阿啊阿啊阿啊阿啊阿"
  zi="是你家弟阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊阿啊"
  constructor(
    public activeRoute: ActivatedRoute,
    public r:Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.states = params['states'];
    });
  }
  toxittz(){
    this.r.navigate(['initiate'], {
      queryParams: {
        state: this.state
      }
    });
  }
  toelsehomepage(){
    this.r.navigate(['elsehomepage'], {
      queryParams: {
        state: this.state
      }
    });
  }
  tomyhome(){
    this.r.navigate(['tabs/tab5'])
  }
  back(){
    if(this.states=='addfriends'){
      this.r.navigate(['addfriends'])
    } else if(this.states=='xiaoxi'){
      this.r.navigate(['tabs/tab4'])
    }
  }
}
