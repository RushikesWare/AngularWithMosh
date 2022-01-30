import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.scss']
})
export class AngularMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isChecked=false;
  isCheckedRadio=true;
  onClick($event: any){
    console.log($event);
  }

}
