import { Component, OnInit } from '@angular/core';
import { Router,Params,ActivatedRoute } from "@angular/router";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {
 
  logined:any;
  public isVip = true;//是否会员
  public myname = "那是南方29大厦";
  public miaosu = "你觉得分就斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较";
  public login = true;//是否登陆状态
  tel:any
  password:any
    constructor(
      public router:Router,
      public activeRoute: ActivatedRoute,
      private storage: Storage
    ) {
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.logined= params['logined'];
        console.log(this.logined)
        
      });
     }
     ionViewWillEnter(){
      if(this.logined=='1'){
        this.tel = this.storage.get("tel")
        console.log(this.storage.get("tel"))
        this.password = this.storage.get("passw")
        console.log(this.tel,this.password)
        if(this.tel=='1' && this.password == '1'){
          this.login = true;
        } else{
          this.login = false;
        }
       } else{
         return;
       }
    }
    set(){
      this.router.navigate(['set'])
    }
    ngOnInit() {
      // if(this.logined=='1'){
      //   this.tel = this.storage.get("tel")
      //   this.password = this.storage.get("passw")
      //   console.log(this.tel,this.password)
      //   if(this.tel=='1' && this.password == '1'){
      //     this.login = true;
      //   } else{
      //     this.login = false;
      //   }
      //  } else{
      //    return;
      //  }
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
  