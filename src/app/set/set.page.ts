import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['tabs/tab5'])
      }

}
