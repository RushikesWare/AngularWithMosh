import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-re-usable-component',
  templateUrl: './re-usable-component.component.html',
  styleUrls: ['./re-usable-component.component.scss']
})
export class ReUsableComponentComponent implements OnInit {

 @Input() isFavorite!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
