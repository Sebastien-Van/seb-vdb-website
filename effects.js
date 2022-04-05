// declare my variables
let x = 0;
let img;
let cnv;
let y = 0;
let dim = 80;
let width = 1200;

//preload function
function preload(){
  img = loadImage('img/plane.png');
}
//make a canvas and set up image
function setup() {
  cnv=createCanvas(1200, 80);
  image(img, 0 ,0);
  noStroke();
 
}
//loop function for my image
function draw(){
   background(253, 235, 249);
  // Animate by increasing value of x
    x = x + 3;
    if (x == width){
      x= -dim;
    }
  image(img, x,y);
  translate(x,y);
  
}