import { Component, OnInit } from '@angular/core';
// import html2canvas from 'html2canvas';
// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Router, Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-sendsuccess',
  templateUrl: './sendsuccess.page.html',
  styleUrls: ['./sendsuccess.page.scss'],
})
export class SendsuccessPage implements OnInit {
  peoplename = "你的手机内存"
  IsVip = true
  baocun: any;
  canvasImg: any;
  state:any
  commonUtils
  translateObj
  element: any 
  //要显示图片的img标签
  image: any 
  wishcont = "是你简单发反反复复反反复复反反复复反反复复反反复复反反复反复复反反复复反反复复反反复复反反复反复复反反复复反反复复反反复复反反复反复复反反复复反反复复反反复复反反复反复复反反复复反反复复反反复复反反复复反反复复"
  qianming = "女生才斤斤事实是生生世世计较斤斤计较"
  constructor(
    public r: Router,
    public activeRoute:ActivatedRoute
    // private photoLibrary: PhotoLibrary
  ) { }

  html_img(){
// //调用html2image方法
    // html2canvas(element).then( canvas=> {

    // this.canvasImg = canvas.toDataURL("image/png");
    // }
    // 然后给初始化的public canvasImg: any = ""; 复制，他就是图片地址。 // 展示图片 <img src="{{canvasImg}}" />
    
  }
  // Savepictures() {

  //   this.photoLibrary.requestAuthorization().then(() => {
  //     this.photoLibrary.getLibrary().subscribe({
  //       next: library => {
  //         library.forEach(function (libraryItem) {
  //           console.log(libraryItem.id);          // ID of the photo
  //           console.log(libraryItem.photoURL);    // Cross-platform access to photo
  //           console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
  //           console.log(libraryItem.fileName);
  //           console.log(libraryItem.width);
  //           console.log(libraryItem.height);
  //           console.log(libraryItem.creationDate);
  //           console.log(libraryItem.latitude);
  //           console.log(libraryItem.longitude);
  //           console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
  //         });
  //       },
  //       error: err => { console.log('could not get photos'); },
  //       complete: () => { console.log('done getting photos'); }
  //     });
  //   })
  //     .catch(err => console.log('permissions weren\'t granted'));

  // }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.state = params['state'];
    });
  }
  ionViewWillEnter() {
    this.baocun = false
  }
  back() {
    if(this.state=='upload'){
      this.r.navigate(['uploadcredentials'])
    } else if(this.state=='wish'){
      this.r.navigate(['tabs/tab1'])
    }  else if(this.state=='game1'){
      this.r.navigate(['game1'])
    }
   
  }
  baocunalbum() {
    this.baocun = true
  }
  tohome() {
    if(this.state=='upload'){
      this.r.navigate(['startactivities'])
    } else if(this.state=='wish')
    this.r.navigate(['tabs/tab1'])
  
  }
}
