function setup(){
  // createCanvas(710, 400, WEBGL);
  createStereoCanvas(WEBGL);
}

function draw(){
  background(250);
  var radius = width * 1.5;

  VRorbitControl();
  console.log( vrX() ) 

  normalMaterial();

  box();


  updateStereo();
}