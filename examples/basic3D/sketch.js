function setup(){
  // createCanvas(710, 400, WEBGL);
  createStereoCanvas(WEBGL, 50);
  teapot = loadModel('teapot.obj');
  orientationLock();

  if(deviceOrientation == 'portrait'){
    alert('please rotate your phone!')
  }

}

function draw(){
  background(0);

  VRorbitControl();
  // orbitControl();
  console.log( vrX() )
  console.log( vrY() )

  normalMaterial();

  // box();
  model(teapot);

  updateStereo();
}