import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
 private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getData():Observable<{}>{
    return this.http.get(this.url);
  }
  postData(data:any):Observable<{}>{
    alert('done....!' + data);
    return this.http.post(this.url,data);
  }
  updateData(data:any){
    alert('done....!' + data);

   return this.http.put(this.url +'/'+data, data);
  }
  deleteData(id:number){
    alert('done....!' + id);
    return this.http.delete(this.url +'/'+ id);
    // return this.http.delete(this.url +'/'+ id).pipe((data)=>{
    //   return data;
    // }), catchError(error => {
    //   return Observable.throw('somthing went wrong');
    // });
  }
}
