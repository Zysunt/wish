import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public xinyuan = true;
  activity = "weikais"
  constructor(
    public router:Router,
   ){}
  dingwei(){
    console.log("定位");
    this.router.navigate(["location"]);
  }
  segmentButtonClicked(ev:any){
    console.log('segment changed:',ev)
  }
}
