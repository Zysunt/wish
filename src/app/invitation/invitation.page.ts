import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage implements OnInit {
  state="yaoyue"
  uploadDown:any
  shi:any="苏州市"
  dizhi:any="相册大伤脑筋的大"
  imgsrc:any;
  commonConfig:any
  checked:any=false
//   uploader:FileUploader = new FileUploader({   
//     url: this.imgsrc.baseUrl + "/uploadFile",  
//     method: "POST",    
//     itemAlias: "uploadedfile",
//     autoUpload: false//是否手动上传 调用uploader.uploadAll()或者uploader.uploadItem(value: FileItem)方法进行手工上传。
// });
  constructor(
    public r:Router,
    
  ) { }
  ischecked(){
    if(this.checked==false){
      this.checked=true
    } else {
      this.checked=false
    }
  }
  ngOnInit() {
    // this.uploadDown = function () {
    //   var file = event.target.files[0];
    //    //判断类型是不是图片
    //   if (!/image\/\w+/.test(file.type)) {
    //     console.log("非图片");
    //     return;
    //   }
    //   var reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = function (e) {
    //     console.log(this.result);//base64
    //   }
    // }


  }

  back(){
this.r.navigate(['tabs/tab1'])
  }
toaitehaoyou(){
  this.r.navigate(['aitefirend'], {
    queryParams: {
      state: 'invitation'
    }
  });
}
fabu(){
  this.r.navigate(['initiate'], {
    queryParams: {
      state: this.state
    }
  });
console.log(this.imgsrc, typeof this.imgsrc)
}

  



      // 限制输入字数
    // wordlimit () {
    //   let textVal = this.$refs.description.value;
    //   let lengthMax = 60;
    //   let length;
    //   length = parseInt(lengthMax) - parseInt(textVal.length);
    //   if (length < 0) {
    //     length = 0
    //   }
    //   this.limit = length;
    //   if (textVal.length >= lengthMax) {
    //     this.$refs.description.value = textVal.substring(0, lengthMax)
    //   }
    // },
}
