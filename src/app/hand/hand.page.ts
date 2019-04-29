import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
@Component({
  selector: 'app-hand',
  templateUrl: './hand.page.html',
  styleUrls: ['./hand.page.scss'],
})
export class HandPage implements OnInit {
  public time = "214738194至56328:000"
  timemiaosu = "起来并完成一定社会职能的动作的总和。活动由目的、sdf"
  reward = "rew的联合起来并完成一定社会职能的动作的总和。活动由目ard";
  canyu = 2435;
  fxx = false
  issc=false
  someone:any='加拿大籍'
  faso=false
  txsrc = 'assets/icon/hand/tx.png';
  imgs = [
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
    'assets/icon/hand/tx.png',
  
  ];
  pinlun = 678
  yuyue = false
  IsVip =true;
  namepeople = "你单反";
  zhankai = 0
  dianzan = '89W'
  hour = "8小时前"
  pinl = "你是十年大脑神经你经常能见到hdsufijaghja是否过得很年大脑神经你经常能见到hdsufijaghja是否过得很淡粉色无大事淡粉色无大事你才不发货"
public jieshao = "活动是由共同目的联合起来并完成一定社会职能的动作的总和。活动由目的、动机和动作构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。其中Α.Н.列昂节夫的活动理论对苏联心理学的发展影响很大，成为现代苏联心理学的重要理论基石。"
  constructor(
    public r:Router
  ) { }

  ngOnInit() {
  }
  guanbifaso(){
    if(this.faso==true){
      this.faso=false
    }
  }
  fasofun(){
    if(this.faso==false){
      this.faso=true
    } else {
      this.faso=false
    }
  }
  toaitefirend(){
    this.r.navigate(['aitefirend'], {
      queryParams: {
        state: 'hand'
      }
    });

  }
  yuyuehans(){
  if(this.yuyue==false){
    this.yuyue=true;
  } else {
    this.yuyue=false;
  }
  }
  back(){
this.r.navigate(['tabs/tab1'])
  }
  huan(){
    this.r.navigate(['appoint'], {
      queryParams: {
        state: 'hand'
      }
    });
  }
  details(){
    if(this.zhankai==0){
      this.zhankai = 1
    } else{
      this.zhankai = 0
    }
   
  }
  isscfun(){
    if(this.issc==false){
      this.issc=true
    } else{
      this.issc=false
    }
  }
  guanbifenx(){
    this.fxx=false
  }
  fx(){
    this.fxx=true
  }
}
