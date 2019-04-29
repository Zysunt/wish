import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-uploadcredentials',
  templateUrl: './uploadcredentials.page.html',
  styleUrls: ['./uploadcredentials.page.scss'],
})
export class UploadcredentialsPage implements OnInit {
  imgsrc:any
 
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.r.navigate(['uploadself'])
  }
  tosuccess(){
    this.r.navigate(['sendsuccess'], {
      queryParams: {
        state: 'upload'
      }
    });
  }
 
}
