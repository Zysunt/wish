import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  fxx = false
  hour = 90
  guanzhu=false
  jinbi=9798
  huodong="魏晋以后，历代都有跳绳活动的记载。唐人段成式在《酉阳杂俎·境异》：“八月十五日，行像及透索为戏。”可见，唐代不仅有跳跃穿过绳索的游戏，还将这种游戏命名为“透索”，使跳绳活动开始有了专门的名称。南宋以后，跳绳活动发展为杂技百戏，还有了“跳索”的名称。宋吴自牧《梦粱录·宰执亲王南班百官入内上寿赐宴》记载：“百戏呈拽，乃上竿、跳索、倒立、折腰、弄碗、踢磐瓶、筋斗之类。” 宋孟元老《东京梦华录·六月六日崔府君生日二十四日神保观神生日》：“自早呈拽百戏，如上竿、趯弄、跳索、相扑、鼓板小唱、斗鸡。”从唐代的“透索”，到南宋的“跳索”，跳绳的名称更为形象而具体了。"
  constructor(
    public r: Router
  ) { }
  topropmall(){
    this.r.navigate(['propmall'],{
      queryParams: {
        state:'annoucement'
      }
    });

  }
  ngOnInit() {
  }
  Isguanzhu(){
    if(this.guanzhu==false){
      this.guanzhu=true
    } else{
      this.guanzhu=false
    }
  }
  back() {
    this.r.navigate(['viplevel'])
  }
  fx() {
    if (this.fxx == false) {
      this.fxx = true
    }
  }
  guanbifenx() {
    if (this.fxx == true) {
      this.fxx = false
    }
  }
}
