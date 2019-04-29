import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  yikaishi = false;
  weikaishi = true;
  yijieshu = false;
  fenlei=false;
  a=false
  b=false
  c=false
  pointer:any=0
  Answer = [
    '时间', '评论数', '收藏数', '浏览'
  ]
  public xinyuan = true;
  activity = "weikais"
  constructor(
    public router:Router,
   ){}
   changePointer(item) {
    item++
    this.pointer = item - 1
    console.log(this.pointer)
    if(this.fenlei==true){
      this.fenlei=false;
      this.a=false;
      this.b=false;
      this.c=false
    }
    // item.selected=!item.selected;
  }
   closeyinyin(){
     if(this.fenlei==true){
       this.fenlei=false;
       this.a=false;
       this.b=false;
       this.c=false
     }
   }
   showa(){
     if(this.fenlei==false){
       this.fenlei=true
       this.a=true
       this.b=false
       this.c=false
     } else{
       this.fenlei=false
       this.a=false
     }
   }
   showb(){
    if(this.fenlei==false){
      this.fenlei=true
      this.b=true
      this.a=false
       this.c=false
    } else{
      this.fenlei=false
      this.b=false
    }
  }
  showc(){
    if(this.fenlei==false){
      this.fenlei=true
      this.c=true
      this.b=false
       this.a=false
    } else{
      this.fenlei=false
      this.c=false
    }
  }
   weikaishifun(){
     this.weikaishi=true;
     this.yikaishi = false;
     this.yijieshu = false
   }
   yikaishufun(){
    this.weikaishi=false;
    this.yikaishi = true;
    this.yijieshu = false
   }
   yijieshufun(){
    this.weikaishi=false;
    this.yikaishi = false;
    this.yijieshu = true
   }
  dingwei(){
    console.log("定位");
    this.router.navigate(["location"]);
  }
  segmentButtonClicked(ev:any){
    console.log('segment changed:',ev)
  }
  toselect(){
    this.router.navigate(['select'])
  }
  hddetails(){
    this.router.navigate(['hddetails'],{
      queryParams: {
        states:'hd'
      }
    });
  }
  yikaishifun(){
    this.router.navigate(['yikaishi'])
  }
  hdyijieshu(){
    this.router.navigate(['hdyijieshu'])
  }
}
