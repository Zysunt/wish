import { Component, OnInit } from '@angular/core';
import {Router  } from "@angular/router";
@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.page.html',
  styleUrls: ['./welfare.page.scss'],
})
export class WelfarePage implements OnInit {

  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.r.navigate(['privilege'])
  }
}
