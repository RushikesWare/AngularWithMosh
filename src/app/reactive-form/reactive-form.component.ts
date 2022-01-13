import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  constructor() { }

  login=new FormGroup({
    account: new FormGroup({
      username : new FormControl(''),
      password : new FormControl(''),
    })  
   })
   formArray=new FormGroup({
     topics : new FormArray([])
   })
   addTopic(topic:HTMLInputElement){
    (this.formArray.get('topics') as FormArray).push(new FormControl(topic.value))
   }
  collectLoginData(){
    console.log(this.login.value);
  }
  get f(){
    return this.login.controls;
  }
  get userName(){
    return this.login.get('userName');
  }
 
}
