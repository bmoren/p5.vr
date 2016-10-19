var gridSpacing = 100
var px, py, x , y;

var speed = 30;

function setup() {
    background(0)
  createStereoCanvas(50);
  x = width / 2
  y = height / 2;
}

function draw() {
  // background(0)
  fill(random(255),random(255),random(255))
  stroke(255)
  px = x;
  py = y;
  x = px + random(-speed,speed)
  y = py + random(-speed,speed)
  if(x >= width){
    x = width;
  }
  if(x <= 0){
    x = 0;
  }
  if(y >= height){
    y = height;
  }
  if(y <= 0){
    y = 0;
  }
  ellipse(x,y,100,100)

  updateStereo();
}