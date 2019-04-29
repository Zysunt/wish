import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  s = false
  s1 = false
  s2 = false
  s3 = false
  token: any
  s4 = false
  s5 = false
  s6 = false
  state: any
  datas = [
    {
      'id': 1,
      'img': 'assets/icon/set/h1.png',
      'title': '如何发布心愿？',
      'content': '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'
    },
    {
      'id': 2,
      'img': 'assets/icon/set/h2.png',
      'title': '如何成为会员？',
      'content': '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'
    },
    {
      'id': 3,
      'img': 'assets/icon/set/h3.png',
      'title': '是否支持任何手机号码验证码？',
      'content': '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'
    },
    {
      'id': 4,
      'img': 'assets/icon/set/h4.png',
      'title': '我一直没有收到绑定手机的短信验证码？',
      'content': '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'
    },
    {
      'id': 5,
      'img': 'assets/icon/set/h5.png',
      'title': '注册时提示手机号码已经被使用该如何处理？',
      'content': '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'
    },
    {
      'id': 6,
      'img': 'assets/icon/set/h6.png',
      'title': '我没有身份证，是否可以购买？',
      'content': '会员是注册之后，就自动成为铜牌会员，然后根据成长值的不同，会员等级会升级'
    },
    {
      'id': 7,
      'img': 'assets/icon/set/h7.png',
      'title': '为什么一直收不到验证码？',
      'content': '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'
    }
  ]
  title: any = '如何发布心愿？'
  content: any = '点击首页+号按钮，即可发布心愿。不仅可以自己发布也可以为您的好友许愿哦。'

  constructor(
    public http: HttpClient,
    public storage: Storage,
    public alertController: AlertController,
    public activeRoute: ActivatedRoute,
    public r: Router,
    public nav: NavController
  ) { }
  ionViewDidEnter() {
    this.storage.get('token').then((val) => {
      this.token = val
    })
    var url = '/api/help/index'
    this.http.post(url, {}, { headers: { 'token': this.token } }).subscribe(res => {
      let a = JSON.stringify(res)
      var dat = JSON.parse(a).data;
      console.log(JSON.parse(a))
      if (JSON.parse(a).message == '获取成功' || JSON.parse(a).status_code == 200) {
        this.title = dat.title
        this.content = dat.content
      }
    });
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });

  }
  show(id) {
    if (this.s == false) {
      this.s = true
    } else {
      this.s = false
    }
  }
  show1() {
    if (this.s1 == false) {
      this.s1 = true
    } else {
      this.s1 = false
    }
  }
  show2() {
    if (this.s2 == false) {
      this.s2 = true
    } else {
      this.s2 = false
    }
  }
  show3() {
    if (this.s3 == false) {
      this.s3 = true
    } else {
      this.s3 = false
    }
  }
  show4() {
    if (this.s4 == false) {
      this.s4 = true
    } else {
      this.s4 = false
    }
  }
  show5() {
    if (this.s5 == false) {
      this.s5 = true
    } else {
      this.s5 = false
    }
  }
  show6() {
    if (this.s6 == false) {
      this.s6 = true
    } else {
      this.s6 = false
    }
  }
  back() {
    if (this.state == 'realname') {
      this.r.navigate(['realname'])
    } else if (this.state == 'set') {
      // this.r.navigate(['set'])
      this.nav.back()
    }

  }
}
