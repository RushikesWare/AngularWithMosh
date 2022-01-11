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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var bacgroundColor = Color.Blue;
var drowPoint = function (point) {
};
drowPoint({
    x: 1,
    y: 2
});
//Classes
var Points = /** @class */ (function () {
    function Points() {
    }
    Points.prototype.drow = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Points.prototype.getDistance = function () {
    };
    return Points;
}());
var drowPoints = function (point) {
    //....
};
//object
var myPoint = new Points();
myPoint.x = 10;
myPoint.y = 20;
myPoint.drow();
