import { Component, OnInit } from '@angular/core';
import { Router,Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-myactivities',
  templateUrl: './myactivities.page.html',
  styleUrls: ['./myactivities.page.scss'],
})
export class MyactivitiesPage implements OnInit {
  huodong = "第二关进行中"
  baoming="04-29开始"
state:any
  yikaishi = false;
  weikaishi = true;
  yijieshu = false;
  public xinyuan = true;
  activity = "weikais"
  constructor(
    public activeRoute: ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });
  }
  back(){
    if(this.state=='mine'){
      this.router.navigate(['tabs/tab5'])
    }
  
  }
   weikaishifun(){
     this.weikaishi=true;
     this.yikaishi = false;
     this.yijieshu = false
   }
   yikaishufun(){
    this.weikaishi=false;
    this.yikaishi = true;
    this.yijieshu = false
   }
   yijieshufun(){
    this.weikaishi=false;
    this.yikaishi = false;
    this.yijieshu = true
   }
  dingwei(){
    console.log("定位");
    this.router.navigate(["location"]);
  }
  segmentButtonClicked(ev:any){
    console.log('segment changed:',ev)
  }
  tomyconductactive(){
this.router.navigate(['my-conductactive'], {
  queryParams: {
    state: 'myactivity'
  }
});

  }
  tomyclosedactivities(){
    this.router.navigate(['myclosedactivities'], {
      queryParams: {
        state: 'myactivities'
      }
    });
  }
  toselect(){
    this.router.navigate(['select'])
  }
  hddetails(){
    this.router.navigate(['hddetails'], {
      queryParams: {
        states: 'myactivity'
      }
    });
  }
  
}
