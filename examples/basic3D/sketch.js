function setup(){
  // createCanvas(710, 400, WEBGL);
  createStereoCanvas(WEBGL, 50);
  teapot = loadModel('teapot.obj');
  orientationLock();

}

function draw(){
  background(0);
  var radius = width * 1.5;

  VRorbitControl();
  // orbitControl();
  console.log( vrX() )

  normalMaterial();

  // box();
  model(teapot);


  updateStereo();
}