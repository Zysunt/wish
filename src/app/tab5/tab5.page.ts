import { Component, OnInit } from '@angular/core';
import { Router,Params,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
logined:any;
public isVip = true;//是否会员
public myname = "那是南方29大厦";
public miaosu = "你觉得分就斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较";
public login = false;//是否登陆状态
  constructor(
    public router:Router,
    public activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.logined= params['logined'];
      console.log(this.logined)
    });
   }
  ionViewDidEnter(){
    // if(this.logined == "logined")
    // {
    //   this.login = true;
    //   console.log('已登陆')
    // }
  }
  set(){
    this.router.navigate(['set'])
  }
  ngOnInit() {
  }
  denglu(){
    console.log("跳转到登陆")
    this.router.navigate(["login"]);
  }
  zhuce(){
    console.log("跳转到注册")
    this.router.navigate(["register"]);
  }
}
