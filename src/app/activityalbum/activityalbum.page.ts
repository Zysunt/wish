import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-activityalbum',
  templateUrl: './activityalbum.page.html',
  styleUrls: ['./activityalbum.page.scss'],
})
export class ActivityalbumPage implements OnInit {
  txcount=90
  guankacount=80
  wishcount= 78
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  towishalbum(){
    this.r.navigate(['wishalbum'])
  }
  toavataralbum(){
    this.r.navigate(['avataralbum'])
  }
  tocheckpoint(){
    this.r.navigate(['checkpoint'])
  }
  back(){
    this.r.navigate(['tabs/tab5'])
  }
}
