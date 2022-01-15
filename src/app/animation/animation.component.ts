import { bounceOutLeftAnimation, fade, slide } from './global-animation';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('todoAnimation',[
      transition(':enter',[
        style({opacity:0}),
        animate(2000)
      ]),
      transition(':leave',[
        style({backgroundColor:'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
    // fade, slide
    // trigger('fade', [
    //   state('void', style({ opacity: 0 })),

    //   transition(':enter, :leave', [
    //     animate(2000)
    //   ])
    // ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
