var pots = []

function setup(){
  // createCanvas(710, 400, WEBGL);
  createStereoCanvas(WEBGL, 50);
  teapot = loadModel('teapot.obj');

  if(deviceOrientation == 'portrait'){
    alert('please rotate your phone!')
  }

  //generate some random positions for pots and store them.
  for(var i=0; i < 100;i++){
    var edge = 1500
    var x = random(-edge,edge)
    var y = random(-edge,edge)
    var z = random(-edge,edge)
    var pos = {'x':x, 'y':y, 'z':z}
    pots.push(pos);
  }
  // _getDeviceType();
  console.log(getDeviceType())
}

function draw(){
  background(0);
  VRorbitControl();

  console.log(vrX())

  normalMaterial();
  for(var i=0; i < 100;i++){
    push()
    translate(pots[i].x,pots[i].y,pots[i].z)
    model(teapot);
    pop()
  }

  updateStereo();
}