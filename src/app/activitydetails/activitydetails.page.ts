import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-activitydetails',
  templateUrl: './activitydetails.page.html',
  styleUrls: ['./activitydetails.page.scss'],
})
export class ActivitydetailsPage implements OnInit {
  IsVip = true
  guanzhu = false
  zf=false
  miaos = "挥洒了就快点吧"
public darenxiuname = "舒服的计划课程"
hour = "243"
ispl=false
isdianzan=false
pinlcount=900
huodongbiaoti = "就流口水的份吧"
huodongmiaosu = "蠡湖俄方我根本滴滴答答的是阿三开激发宝宝宝宝宝宝宝卅饭店的宝宝宝的"
stoptime = '2019-23-2'
dizhi = "及哩哩啦啦哩哩啦啦城市"
fabumiaosu = "jioahscb你是几点开看看"
namepeople = "in 觉得是废话"
dianzan = 808;
pinl = "年级开始的那份空白 v 基础上"
hourt = 898
  constructor(
    public r:Router
  ) { }
  showzhaunfa(){
    if(this.zf==false){
      this.zf=true
    } else{
      this.zf=false
    }
  }
  guanbi(){
    if(this.zf==true){
      this.zf=false
    } 
  }
  ngOnInit() {
  }
  showpinl(){
if(this.ispl==false){
  this.ispl=true
}
  }
  Isguanzhu(){
    if(this.guanzhu==false){
      this.guanzhu=true
    } else{
      this.guanzhu=false
    }
  }
  dianzanfun(){
    if(this.isdianzan==false){
      this.isdianzan=true
    } else{
      this.isdianzan=false
    }
  }
  back(){
this.r.navigate(['/tabs/tab1'])
  }
}
