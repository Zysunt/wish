import { Component, OnInit } from '@angular/core';
import { Router,Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-hddetails',
  templateUrl: './hddetails.page.html',
  styleUrls: ['./hddetails.page.scss'],
})
export class HddetailsPage implements OnInit {
  yikaishi=false
  weikaishi=true
  state='weikaishi'
  fxx = false
  days = 2;
  hours = 8
  mancount = 12435
  states:any
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
  issc=false
  yuyue = false
  IsVip =true;
  faso=false
  namepeople = "的那就看你";
  zhankai = 0
  dianzan = '12W'
  hour = "1小时前"
  pinl = "今年滴滴答答滴滴答答的错是否过得很淡粉色无大事淡粉色无大事你才不发货"
public jieshao = "活动是由共同目的联合起来并完成一定社会职能的动作的总和。活动由目的、动机和动作构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。其中Α.Н.列昂节夫的活动理论对苏联心理学的发展影响很大，成为现代苏联心理学的重要理论基石。"
  constructor(
    public activeRoute: ActivatedRoute,
    public r:Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.states = params['states'];
    });
  }
  toaitefirend(){
    this.r.navigate(['aitefirend'], {
      queryParams: {
        state: 'hddetails'
      }
    });

  }
  fasofun(){
    if(this.faso==false){
      this.faso=true
    } else{
      this.faso=false
    }
  }
  guanbifaso(){
    if(this.faso==true){
      this.faso=false
    }
  }
  tocanyu(){
    this.r.navigate(['canyu'])
  }
  yuyuehans(){
  if(this.yuyue==false){
    this.yuyue=true;
  } else {
    this.yuyue=false;
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
  back(){
    if(this.states=='colle'){
      this.r.navigate(['collection'])
    } else if(this.states=='hd'){
      this.r.navigate(['tabs/tab2'])
    } else if(this.states=='myactivity'){
      this.r.navigate(['myactivities'])
    }  else if(this.state=='othercollection')
    {
      this.r.navigate(['othercollection'])
    }
  }
  huan(){
    this.r.navigate(['appoint'], {
      queryParams: {
        state: 'hddetails'
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
}
