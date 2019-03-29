import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  xiaoxi = "aite"
public friendname = "卡尼斯但是";
public miaosu = "的舒服的就是改变的就是dsfsd管";
public neirong = "那是地方就是你的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴就是你的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴就是你的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答的"
public IsVip = true;



constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev:any){
    console.log('segment changed:',ev)
  }
  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }
}
