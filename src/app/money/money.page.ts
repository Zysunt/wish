import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute  } from "@angular/router";
@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
})
export class MoneyPage implements OnInit {
  dinshen = true
  jifen = false
  mimalog = "mi"
  date:any = "2019-8-9"
  state:any
  date1:any = "2019-2-9"
  mons=[
    {
      date:"2019-8-9",
      xitmsg:"恭喜您，完成三级的男男女女男男女女男男女女男女呢"
    },
    {
      date:"2019-8-9",
      xitmsg:"恭喜您，完成三级的男男女女男男女女男男女女男女呢"
    },
    {
      date:"2019-8-9",
      xitmsg:"恭喜您，完成三级的男男女女男男女女男男女女男女呢"
    },
    {
      date:"2019-8-9",
      xitmsg:"恭喜您，完成三级的男男女女男男女女男男女女男女呢"
    }
  ]
  public xitmsg:any="恭喜您，完成三级的男男女女男男女女男男女女男女呢"
  constructor(
    public activeRoute: ActivatedRoute,
    public r:Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });
  }
  back(){
    if(this.state=='mine'){
      this.r.navigate(['tabs/tab5'])
    } else if(this.state=='privilege'){
      this.r.navigate(['privilege'])
    } else if(this.state=='viplevel'){
      this.r.navigate(['viplevel'])
    }else if(this.state=='myhome'){
      this.r.navigate(['myhome'])
    }
  }
  dingshenfun(){
    if(this.dinshen==false){
      this.dinshen=true
      this.jifen=false
    }
  }
  jifenfun(){
    if(this.jifen==false){
      this.jifen=true
      this.dinshen=false
    }
  }
}
