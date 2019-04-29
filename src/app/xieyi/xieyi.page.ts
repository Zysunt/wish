import { Component, OnInit } from '@angular/core';
import { Router,Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-xieyi',
  templateUrl: './xieyi.page.html',
  styleUrls: ['./xieyi.page.scss'],
})
export class XieyiPage implements OnInit {
state:any
  constructor(
    public r:Router,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });
  }
  back(){
    if(this.state=='viplevel'){
      this.r.navigate(['viplevel'])
    } else if(this.state=='recharge'){
      this.r.navigate(['recharge'])
    }

  }
}
