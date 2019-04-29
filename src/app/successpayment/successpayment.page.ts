import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute  } from "@angular/router";
@Component({
  selector: 'app-successpayment',
  templateUrl: './successpayment.page.html',
  styleUrls: ['./successpayment.page.scss'],
})
export class SuccesspaymentPage implements OnInit {
state:any
  constructor(
    public r:Router,
    public activeRoute: ActivatedRoute,
  ) { }
  ionViewWillEnter(){
    // this.activeRoute.queryParams.subscribe((params: Params) => {
    //   this.state = params['state'];
    //   console.log(this.state)
    // });
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
      console.log(this.state)
    });
  }
  
  back(){
    if(this.state=='zhifu'){
      this.r.navigate(['allprops'])
    } else if(this.state=='duihuan'){
      this.r.navigate(['exchange'])
    } else if(this.state='viplevel'){
      this.r.navigate(['viplevel'])
    } else if(this.state=='recharge'){
      this.r.navigate(['recharge'])
    }
  }
}
