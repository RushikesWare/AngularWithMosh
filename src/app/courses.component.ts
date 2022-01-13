import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector:'courses',
    template: `<h2>{{getTitle() }}</h2>
        <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
        </ul>
        <img class="myImg" [src]="imgUrl" alt="no Photo"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan">test</td>
            </tr>
        </table>
        <hr>

        <button class="btn btn-primary" [class.active]='isActive'>Save</button>
        <hr>
        
        <div (click)="onDivClick()">
        <button [style.backgroundColor]="isActive ? 'blue' : 'red'" (click)="onSaveClick($event)"> save</button>
        </div>
        <hr>
        <input (keyup.enter)="onKeyUp($event)">
        <hr>
        <input #email (keyup.enter)="onKeyUp2(email.value)">
        <hr>
        <input  [(ngModel)]="myEmail" (keyup.enter)="onKeyUp3()" />
        <hr>
        <div>
        {{myCourse.title | uppercase }}<br/>
        {{myCourse.rating | number:'1.3-3'}}<br/>
        {{myCourse.students | number}}<br/>
        {{myCourse.price | currency:'INR':true}}<br/>
        {{myCourse.releaseDate | date:'short'}}<br/>
        
        </div>
        <hr>
        {{myText | summary}}
        <hr>
        

        `
})
export class CoursesComponent{
    constructor ( service :CoursesService){
        this.courses= service.getCourses();
    }
    title="My Courses";
    imgUrl='https://images.livemint.com/img/2021/07/13/1600x900/71939a6c-e3d2-11eb-b32c-f876157e8ab9_1626201653877_1626201700467.jpg'
    courses: any;
    isActive=true;
    colSpan=2;
    myEmail = "Me@example.com";
    myText="You can construct a format string using symbols to specify the components of a date-time value, as described in the following table. Format details depend on the locale. Fields marked with (*) are only available in the extra data set for the given locale.";
    getTitle(){
        return this.title;
    }
    onSaveClick($event: any){

        $event.stopPropagation();
        console.log('Clicked', $event);
    }
    onDivClick(){
        console.log('Clicked on Div');

    }
    onKeyUp($event:any){
        console.log('Value: ', $event.target.value ); 
    }
    onKeyUp2(email: any){
        console.log(email);
    }
    onKeyUp3(){
        console.log(this.myEmail);
        
    }
    myCourse={
        title:'The Complete Angular course',
        rating:4.18444,
        students:41552,
        price:8000,
        releaseDate: new Date(2022,3,1)
    }
}