import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mima = true;
  public mimalog= "mi";
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
  constructor(
    public router:Router,
  ) { }
  ionViewDidEnter(){
  }
  tomine(){
    this.router.navigate(["tabs/tab5"], {
      queryParams: {
        logined: 'logined'
      }
    });
  }
  ngOnInit() {
  }
  mianmi(){
    console.log('免密登陆')
    this.mima = false;
  }
  mimalogin(){
    console.log('密码登陆')
    this.mima = true;
  }
  zhuce(){
    this.router.navigate(["register"]);
  }
  settime() {
    if (this.verifyCode.countdown == 0) {
      this.verifyCode.countdown=60;
        this.verifyCode.verifyCodeTips = "获取验证码";
        this.verifyCode.disable = true;
        return;
    } else {
        this.verifyCode.countdown--;
        this.verifyCode.disable=false;
    }
    setTimeout(() => {
        this.verifyCode.verifyCodeTips = "重新获取" + this.verifyCode.countdown + "秒";
            this.settime();
    }, 1000);
}

  login(){
    // if(this.tel!=undefined&&this.psd!=undefined){
    //   var url=''
    //   var loading=super.showLoading(this.loadingCtrl,'提交中...')
    //   this.http.post(url,JSON.stringify({tel:this.tel,psd:this.psd}),{headers:this.headers}).subscribe(res =>
    //     console.log(res.json())
    //     )
    //     loading.dismiss()
    // }else{
    //   super.showToast(this.toastCtrl,'请填写完整...')
    // }
  }
}
