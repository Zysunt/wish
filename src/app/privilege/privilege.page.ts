import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-privilege',
  templateUrl: './privilege.page.html',
  styleUrls: ['./privilege.page.scss'],
})
export class PrivilegePage implements OnInit {
  myname="身边的黄金时代"
  miaosu="你说的金币啊"
  isVip=true
  dj1=2
  dj2=4
  jinbi=900
  constructor(
    public r:Router
  ) { }
  tomyhome(){
    this.r.navigate(['myhome'], {
      queryParams: {
        state: 'privilege'
      }
    });
  }
  towelfare(){
    this.r.navigate(['welfare'])
  }
  topropmall(){
    this.r.navigate(['propmall'],{
      queryParams: {
        state:'privilege'
      }
    });

  }
  tomon(){
    this.r.navigate(['money'], {
      queryParams: {
        state: 'privilege'
      }
    });
  }
  ngOnInit() {
  }
  back(){
    this.r.navigate(['viplevel'])
  }
}
