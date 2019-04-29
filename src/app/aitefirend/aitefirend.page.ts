import { Component, OnInit } from '@angular/core';
import { Router ,Params, ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aitefirend',
  templateUrl: './aitefirend.page.html',
  styleUrls: ['./aitefirend.page.scss'],
})
export class AitefirendPage implements OnInit {
state:any
    IsVip = true;
    name = [
      'jskadbfh',
      '届合肥举办的女生',
      '而脱氧核糖个人奋斗',
      '俄无法绕过',
      '年底恢复'
    ]
    constructor(
      public r:Router,
      public activeRoute: ActivatedRoute,
      public nav:NavController
    ) { }
  
    ngOnInit() {
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.state = params['state'];
      });
    }
  back(){
    // if(this.state=='winpage'){
    //   this.r.navigate(['winpage'])
    // } else if(this.state=='invitation'){
    //   this.r.navigate(['invitation'])
    // } else if(this.state=='hand'){
    //   this.r.navigate(['hand'])
    // } else if(this.state=='hddetails'){
    //   this.r.navigate(['hddetails'])
    // } else if(this.state=='yikaishi'){
    //   this.r.navigate(['yikaishi'])
    // }
    
this.nav.back()
  }
  }
  