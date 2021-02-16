let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');

var r = 199;
var g = 25;
var b = 105;

ctx.fillStyle = `rgb(${r},${g},${b})`;

let x = 30;
let y =195;

let canvasHeight = 20;
let canvasWidth = 20;

for(let n=1; n<=6; n++){
x=30;
    for(let k=1; k<=6; k++){
        if(n<1) {
        continue;
        }
    ctx.fillRect(x,y, canvasWidth, canvasHeight);
    x=x+3+30;
        //ctx.fillStyle = `rgb(${r},${g},${b})`;
    }
}
ctx.fillStyle = `rgb(${r},${g},${b})`;