import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-yaoyuecanyu',
  templateUrl: './yaoyuecanyu.page.html',
  styleUrls: ['./yaoyuecanyu.page.scss'],
})
export class YaoyuecanyuPage implements OnInit {
  
  
      IsVip = true;
      name = [
        '水电费bfh',
        '届合肥举阿斯顿生',
        '个人奋斗',
        '俄无法绕过',
        '年底恢复'
      ]
      constructor(
        public r:Router
      ) { }
    
      ngOnInit() {
      }
    back(){
      this.r.navigate(['initiate'])
    }
    }
    