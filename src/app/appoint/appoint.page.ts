import { Component, OnInit } from '@angular/core';
import { Router,Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.page.html',
  styleUrls: ['./appoint.page.scss'],
})
export class AppointPage implements OnInit {
  IsVip = false;
  state:any
  name = [
    'jskadbfh',
    '届合肥举办的女生',
    '而脱氧核糖个人奋斗',
    '俄无法绕过',
    '年底恢复'
  ]
  constructor(
    public activeRoute: ActivatedRoute,
    public r:Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
      console.log(this.state)
    });
  }
  back(){
    if(this.state=='otherend'){
      this.r.navigate(['otherend'])
    } else if(this.state=='hand'){
      this.r.navigate(['hand'])
    } else if(this.state=='myclosed'){
      this.r.navigate(['myclosedactivities'])
    } else if(this.state=='hddetails'){
      this.r.navigate(['hddetails'])
    }
      }
}
