import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consume-http-service',
  templateUrl: './consume-http-service.component.html',
  styleUrls: ['./consume-http-service.component.scss']
})
export class ConsumeHttpServiceComponent implements OnInit {

  constructor(private http:HttpClientModule) { 
    // this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  ngOnInit(): void {
  }
  test(){
  }

}
