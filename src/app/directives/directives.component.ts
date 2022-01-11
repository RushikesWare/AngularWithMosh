import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 course=['C++']
viewMode='list';
courses:any;
onLoadCourses(){
this.courses=[
  {id:1, name:'C++'},
  {id:2, name:'Java'},
  {id:3, name:'Python'}
]
}
trackCourses (index: any, courses: any){
 return courses? courses.id:undefined;
}
onAddNew(){
  this.courses.push({id:4,name:'Javascript'})
}
onRemove(obj:any){
  console.log(obj);
  let index=this.courses.indexOf(obj);
  this.courses.splice(index, 1);
}
isSelected=true;
changeBg(){
this.isSelected= !this.isSelected;
}

canSave=false;
saveStyle(){
  this.canSave=!this.canSave;
}
}
