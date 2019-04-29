import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-leveldescription',
  templateUrl: './leveldescription.page.html',
  styleUrls: ['./leveldescription.page.scss'],
})
export class LeveldescriptionPage implements OnInit {

  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.r.navigate(['viplevel'])
  }
}
