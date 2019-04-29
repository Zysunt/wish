import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-themebg',
  templateUrl: './themebg.page.html',
  styleUrls: ['./themebg.page.scss'],
})
export class ThemebgPage implements OnInit {
  imgsrc
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
back(){
  this.r.navigate(['viplevel'])
}
totheme(){
  this.r.navigate(['theme'])
}
}
