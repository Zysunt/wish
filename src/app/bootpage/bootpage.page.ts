import { Component, OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-bootpage',
  templateUrl: './bootpage.page.html',
  styleUrls: ['./bootpage.page.scss'],
})
export class BootpagePage implements OnInit {
  
  @ViewChild('slide1') slide1;
  slideOpts = {
    effect: 'flip',  //轮播效果
    autoplay: {
      delay: 2000,
    },
    loop:true
  };
  constructor() { }
  ngOnInit() {  }
  slideDidChange(){
    console.log('111');
    this.slide1.startAutoplay();
  }
  ionViewDidEnter() {
    // this.slides.startAutoplay();
    }
    ionViewDidLeave() {
      // this.slide1.stopAutoplay();
  }
  startAutoplay() {
    var slides = document.querySelector('ion-slides');
    slides.options = {
      effect: 'flip'
    }
  }

}
