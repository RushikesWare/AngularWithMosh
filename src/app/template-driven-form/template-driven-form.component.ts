import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent  {

  constructor() { }
  contactMethod=[
    {id:1, name:'Email'},
    {id:2, name:'Phone'},
  ]
public firstName:any;

  logFirstName(x:any){
    console.log(x)
  }
  submit(form:any){
    console.log(form);
    console.log(form.value);
  }
}
