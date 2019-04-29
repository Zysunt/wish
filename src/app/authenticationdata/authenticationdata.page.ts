import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-authenticationdata',
  templateUrl: './authenticationdata.page.html',
  styleUrls: ['./authenticationdata.page.scss'],
})
export class AuthenticationdataPage implements OnInit {
  name:any="不好就变成精神病好的绊脚石"
  shenfz:any="789797999998888"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
this.r.navigate(['realname'])
  }
  totab5(){
    this.r.navigate(['tabs/tab5'])
  }
}
