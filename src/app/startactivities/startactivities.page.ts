import { Component, OnInit } from '@angular/core';
import { Router ,Params, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-startactivities',
  templateUrl: './startactivities.page.html',
  styleUrls: ['./startactivities.page.scss'],
})
export class StartactivitiesPage implements OnInit {

    isyiguan=true
      yikaishi=false
      weikaishi=true
      state:any
      fxx = false
      issc=false
      days = 12;
      hours = 8
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
      guanka=0
      wanc=false
      isdianzan=false
      pinl = "今年滴滴答答滴滴答答的错是否过得很淡粉色无大事淡粉色无大事你才不发货"
    public jieshao = "活动是由共同目的联合起来并完成一定社会职能的动作的总和。活动由目的、动机和动作构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。其中Α.Н.列昂节夫的活动理论对苏联心理学的发展影响很大，成为现代苏联心理学的重要理论基石。"
      constructor(
        public r:Router,
        public activeRoute: ActivatedRoute,
      ) { }
      isscfun(){
        if(this.issc==false){
          this.issc=true
        } else{
          this.issc=false
        }
      }
      ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
          this.state = params['state'];
          console.log(this.state)
        });
        if(this.state=='game'){
          this.guanka=1
        }
      }
      ionViewDidEnter(){
        if(this.state=='game'){
          this.guanka=1
        }
      }
      togame(){
        this.r.navigate(['game'])
      }
      togamecai(){
        this.r.navigate(['game1'])
      }
      duoguan(){
        if(this.isyiguan==true){
          this.isyiguan=false
        } else{
          this.isyiguan=true
        }
      }
      tocanyu(){
        this.r.navigate(['canyu'], {
          queryParams: {
            state: 'startactivities'
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
      iswanchen(){
      if(this.wanc==false){
        this.wanc=true;
      } else {
        this.wanc=false;
      }
      }
      guanbifenx(){
        this.fxx=false
      }
      back(){
    this.r.navigate(['yikaishi'])
      }
      huan(){
        this.r.navigate(['appoint'])
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
    }
    