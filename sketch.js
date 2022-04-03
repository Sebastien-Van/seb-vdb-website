let x = 0;
let img;
let cnv;
let y = 0;
let dim = 80.0;
let width = 1200;


function preload(){
  img = loadImage('img/skateb2.png');
}
function setup() {
  cnv=createCanvas(1200, 80);
  image(img, 0 ,0);
  noStroke();
 
}

function draw(){
   background(240, 222, 234);
  // Animate by increasing our x value
    x = x + 2;
    if (x == width){
      x= -dim;
    }
  image(img, x,y);
  translate(x,y);
  
}




//attempt to hover over for event listener
// function setup() {
//   cnv=createCanvas(1200, 80);
//   image(img, 0 ,0);
//   noStroke();
//   while(cnv.mouseOver(1)){
//     cnv.mouseOver(trs);
//   }
//   // cnv.mouseOver(trs);
// }




// function draw(){
//    background(255);
//   // Animate by increasing our x value

//   image(img, x,y);
  
  
// }
// function trs(){
//   x = x + 2;
//   if (x == width){
//     x= -dim;
//   }

//   translate(x,y);
// }