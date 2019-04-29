import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Router, Params, ActivatedRoute } from "@angular/router";

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {
  login :any;
  chache = 100
  showcache = false
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public storage: Storage,
    public alertController: AlertController
  ) { }

  tomine() {
    // this.storage.clear()
    // console.log(this.storage)
    //登录的信息
    var promise1=this.storage.remove('xinxi').then((val) => {
            console.log('退出 ', val);
      console.log('删除账号密码信息');
    });
    //注册的信息
    var promise2=this.storage.remove('data').then((val) => {
      console.log('退出 ', val);
console.log('删除账号密码信息');
});
//判断是否登录的状态
var promise3=this.storage.remove('status_code').then((val) => {
      this.router.navigate(['tabs/tab5'])
      console.log('退出 ', val);
console.log('删除state');
});
    
Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.login = params['logined'];
      console.log(this.login)
    });
  }
  guanbic() {
    if (this.showcache == true) {
      this.showcache = false
    }
  }
  cache0() {
    if (this.showcache == false) {
      this.showcache = true
    }
  }

  torealname() {
    this.router.navigate(['realname'])
  }
  toaddress() {
    this.router.navigate(['address'])
  }
  topersonalcard() {
    this.router.navigate(['personalcard'])
  }
  topersonalinfo() {
    this.router.navigate(['personalinfo'])
  }
  back() {
    this.router.navigate(['tabs/tab5'])
  }
  toFeedback() {
    this.router.navigate(['feedback'])
  }
  tocheckupdate() {
    this.router.navigate(['checkupdate'])
  }
  toaboutus() {
    this.router.navigate(['aboutus'])
  }
  tohelp() {
    this.router.navigate(['help'], {
      queryParams: {
        state: 'set'
      }
    });
  }
  async cache() {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '是否清除缓存',
      buttons: [
        {
          text: '取消',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
