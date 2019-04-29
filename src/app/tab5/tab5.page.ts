import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  data: any
  logined: any;
  dataStr: any
  valStr: any
  days = 90
  jifen = 898
  public isVip = true;//是否会员
  public myname = "那是南方29大厦";
  public miaosu = "你觉得分就斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较斤斤计较";
  public login = false;//是否登陆状态
  tel: any
  qiandao = false
  public password: any
  public telfun: any
  public passwfun: any
  // sto=window.localStorage;
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public storage: Storage
  ) {

  }
  ionViewWillEnter() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.logined = params['logined'];
    });
    this.storage.get('status_code').then((val) => {
      console.log(val)
      if (val == 200) {
        this.login = true
        console.log(this.login)
      }
    });
  }
  ionViewDidEnter() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.logined = params['logined'];
    });
    this.storage.get('status_code').then((val) => {
      console.log(val)
      if (val == 200) {
        this.login = true
        console.log(this.login)
      }
    });
  }
  ngOnInit() {

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.logined = params['logined'];
    });
    this.storage.get('status_code').then((val) => {
      console.log(val)
      if (val == 200) {
        this.login = true
        console.log(this.login)
      }
    });

  }
  toviplevel() {
    this.router.navigate(['viplevel'])
  }
  tocustomerservice() {
    if (this.login == true) {
      this.router.navigate(['customerservice'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  tomyProp() {
    if (this.login == true) {
      this.router.navigate(['my-prop'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  tomyhome() {
    this.router.navigate(['myhome'], {
      queryParams: {
        state: 'mine'
      }
    });
  }
  tomon() {
    if (this.login == true) {
      this.router.navigate(['money'], {
        queryParams: {
          state: 'mine'
        }
      });
    } else {
      this.router.navigate(["login"]);
    }
  }
  toactivityalbum() {
    if (this.login == true) {
      this.router.navigate(['activityalbum'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  torecharge() {
    this.router.navigate(['recharge'], {
      queryParams: {
        state: 'mine'
      }
    });
  }
  topropmall() {
    this.router.navigate(['propmall'], {
      queryParams: {
        state: 'mine'
      }
    });
  }
  todianzan() {
    if (this.login == true) {
      this.router.navigate(['dianzan'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  qiaodaofun() {
    if (this.qiandao == false) {
      this.qiandao = true
    }
  }
  guanbi() {
    if (this.qiandao == true) {
      this.qiandao = false
    }

  }
  tocollection() {
    if (this.login == true) {
      this.router.navigate(['collection'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  tomyactivities() {
    if (this.login == true) {
      this.router.navigate(['myactivities'], {
        queryParams: {
          state: 'mine'
        }
      });
    } else {
      this.router.navigate(["login"]);
    }
  }
  jiahaoU() {
    if (this.login == true) {
      this.router.navigate(['addfriends'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  tofollow() {
    if (this.login == true) {
      this.router.navigate(['follow'])
    } else {
      this.router.navigate(["login"]);
    }
  }
  tofans() {
    if (this.login == true) {
      this.router.navigate(['fans'])
    } else {
      this.router.navigate(["login"]);
    }

  }
  set() {
    console.log(this.login)
    this.router.navigate(['set'], {
      queryParams: {
        logined: this.login
      }
    });
  }


  denglu() {
    console.log("跳转到登录")
    this.router.navigate(["login"]);
  }
  zhuce() {
    console.log("跳转到注册")
    this.router.navigate(["register"]);
  }
}
