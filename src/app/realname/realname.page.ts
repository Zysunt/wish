import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import axios from 'axios'
import { HttpClient } from '@angular/common/http';
import { Storage  } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-realname',
  templateUrl: './realname.page.html',
  styleUrls: ['./realname.page.scss'],
})
export class RealnamePage implements OnInit {
  imgsrc1:any
  imgsrc2:any
  imgsrc3:any
  token:any='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC94aW55LndoNjYuY25cL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE1NTYyNjA1OTgsImV4cCI6MTU1NjI2NDE5OCwibmJmIjoxNTU2MjYwNTk4LCJqdGkiOiI1a3E3OU1KM0gwSExrRUxMIiwic3ViIjo3LCJwcnYiOiIxYmI0NTcxN2IzMzA3NDk1ZjU5NWQ3OThlZTcwNGE1MGZkMjk0YjAzIn0.Kd55ETiSc9lX6c8kfV8QhxUovkTMdPzXSzRt-ceucrw'
  constructor(
    public r: Router,
    public http: HttpClient,
    public storage:Storage,
    public alertController: AlertController,
    public nav:NavController
  ) { }

  ngOnInit() {
  }
  toauthenticationdata() {
    this.r.navigate(['authenticationdata'])
  }
  back() {
    this.nav.back();
    // this.r.navigate(['set'])
  }
  upload(){
    var url='/api/userAuthent/authent'
    this.storage.get('token').then((val) => {
      this.token= val
    })
    axios({
      method: 'post',
      url: url,
      headers: {token:this.token}
  }).then(res =>{
        console.log(res)
      }).catch(err =>{

              });
  }
  tohelp() {
    this.r.navigate(['help'], {
      queryParams: {
        state: 'realname'
      }
    });
  }
}
