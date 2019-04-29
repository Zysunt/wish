import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  names = "sadness"
  tels = 18723439987
  moren = true
  sheng = "江苏"
  shi = "苏州"
  qu = "古树"
  jiedao = "那就是"
  dizhi = "bshadjb才不会接受吧啊"
  moren1 = true
  token: any
  constructor(
    public http: HttpClient,
    public r: Router,
    public storage: Storage
  ) { }
  ionViewWillEnter() {
    this.storage.get('token').then((val) => {
      this.token = val
    })
    var url = "/api/userAddress/index"
    this.http.post(url, {}, {
      headers: {
        "token": this.token
      }
    }).subscribe(res => {
      let a = JSON.stringify(res)
      var dat = JSON.parse(a).data;
      console.log(JSON.parse(a))
      if (JSON.parse(a).message == '获取成功') {
        this.names = dat.names
        this.tels = dat.mobile
        this.sheng = dat.get_province
        this.shi = dat.get_city
        this.qu = dat.get_district
        this.dizhi = dat.address
      }
    });
  }
  ngOnInit() {

  }
  toeditadress() {
    this.r.navigate(['editadd'])
  }

  back() {
    this.r.navigate(['set'])
    // this.nav.back();
  }
  toadd() {
    this.r.navigate(['addaddress'])
  }
}
