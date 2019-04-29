import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otherend',
  templateUrl: './otherend.page.html',
  styleUrls: ['./otherend.page.scss'],
})
export class OtherendPage implements OnInit {

  mingci="五"
    isdianzan=false
        yikaishi=false
        weikaishi=true
        state='weikaishi'
        fxx = false
        days = 2;
        hours = 8
        guanzhu=false
        manmsg="梅开三度放你飞机上你"
  
        mancount = 12435
        public time = "2019-1-14至56328:000"
        timemiaosu = "你姐夫虐待成的动作的总和。活动由"
        reward = "rew的联合起来并完成一定社会职能的动作的总和。活动由目ard";
        canyu = 2435;
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
        namepeople = "的那就看你";
        zhankai = 0
        dianzan = '12W'
        hour = "1小时前"
        pinl = "今年滴滴答答滴滴答答的错是否过得很淡粉色无大事淡粉色无大事你才不发货"
      public jieshao = "活动是由共同目的联合起来并完成一定社会职能的动作的总和。活动由目的、动机和动作构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。其中Α.Н.列昂节夫的活动理论对苏联心理学的发展影响很大，成为现代苏联心理学的重要理论基石。"
        constructor(
          public r:Router,
          public nav:NavController
        ) { }
      
        ngOnInit() {
        }
        towinpage(){
          this.r.navigate(['winpage'], {
            queryParams: {
              state: 'otherend'
            }
          });
        }
        dianzanfun(){
          if(this.isdianzan==false){
            this.isdianzan=true
          } else{
            this.isdianzan=false
          }
        }
        Isguanzhu(){
          if(this.guanzhu==false){
            this.guanzhu=true
          } else{
            this.guanzhu=false
          }
        }
        tocanyu(){
          this.r.navigate(['canyu'], {
            queryParams: {
              state: 'otherend'
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
        guanbifenx(){
          this.fxx=false
        }
        back(){
      this.nav.back()
        }
        huan(){
          this.r.navigate(['appoint'], {
            queryParams: {
              state: 'otherend'
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
        fx(){
      this.fxx =true
        }
        towin(){
          this.r.navigate(['winprize'], {
            queryParams: {
              state: 'otherend'
            }
          });
      
        }
      }
      
