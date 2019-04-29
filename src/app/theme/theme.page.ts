import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
})
export class ThemePage implements OnInit {

  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
back(){
  this.r.navigate(['themebg'])
}
toviplevel(){
  this.r.navigate(['viplevel'])
}
}
