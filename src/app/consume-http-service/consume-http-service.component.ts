import { JsonPlaceholderService } from './../service/json-placeholder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consume-http-service',
  templateUrl: './consume-http-service.component.html',
  styleUrls: ['./consume-http-service.component.scss']
})
export class ConsumeHttpServiceComponent implements OnInit {
  post: any;
  constructor(private api: JsonPlaceholderService) {   }
  ngOnInit(): void {
    //  this.getDataFromServices();
    // this.api.getData().subscribe((result)=>{
    //   console.log(result );
    //   this.post=result;
    // });
  }
  getDataFromServices(){
    this.api.getData().subscribe((result)=>{
      console.log(result );
      this.post=result;
    });
  }
  
  sendDataToServices(title:HTMLInputElement){
    this.api.postData(title.value).subscribe((result)=>{
      console.log(result);
      // this.getDataFromServices();
    });

    title.value='';
  }
  updatePostData(post:number){
    this.api.updateData(post).subscribe(()=>{

    })
  }
  deletePostData(id:number){
    this.api.deleteData(id).subscribe((id: any)=>{
      console.log(id);
    },
    (error:Response)=>{
      if(error.status===404)
        alert('This post has been delteted');
      else throw error;
    });
  }
}
