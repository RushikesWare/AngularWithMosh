// function log(message: string){
//     console.log(message);
// }

// var message="Hello World";
// log(message);

// function doSomthing(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log('finaly :' + i);
// }

// doSomthing(); 

// let count:string;
// count='str';
// count=1;
// let f:any[]=[1,true, 3,5];

 enum Color { Red=0, Green=1, Blue=2};
let bacgroundColor=Color.Blue;

// inerfaces

interface Point{
    x:number,
    y:number
}
let drowPoint=(point: Point)=>{
    
}

drowPoint({
    x:1,
    y:2
})

//Classes

class Points{
    x!: number;
    //constutor
    constructor(x:number, private y:number){
        this.x=x;
        this.y=y;
    }
    drow(){
        console.log('X: '+ this.x + ', Y: '+ this.y);
    }
    getDistance(){

    }
}

let drowPoints= (point:Points)=>{
    //....
}

//object

let myPoint = new Points(1,2);

myPoint.x=10;
// myPoint.y=20;
myPoint
myPoint.drow();

