console.log("+~+~ p5.vr ~+~+");

p5.prototype._duplicateCanvas
p5.prototype._originalCanvas

p5.prototype.createStereoCanvas = function(renderer){

  createCanvas(windowWidth/2, windowHeight, renderer);

  _originalCanvas = document.getElementById('defaultCanvas0');

  _duplicateCanvas = document.createElement('canvas');
  _duplicateCanvas.id = "duplicateCanvas";
  document.body.appendChild(_duplicateCanvas);

  var dc = document.querySelector("#duplicateCanvas");
  dc.width = _originalCanvas.width;
  dc.height = _originalCanvas.height;
  dc.style.position = 'absolute';
  dc.style.top = 0;
  dc.style.left = _originalCanvas.width/2;
  dc.style.width = _originalCanvas.width/2;
  dc.style.height = _originalCanvas.height/2;

  _duplicateCanvas.getContext('2d').drawImage(_originalCanvas, 0, 0);

}

p5.prototype.updateStereo = function(){
  _duplicateCanvas.getContext('2d').drawImage(_originalCanvas, 0, 0);
}

p5.prototype.vrX = function(){
  var x = radians(rotationY) + HALF_PI;
  return x;
}

p5.prototype._compassdir = false;
  window.addEventListener('deviceorientation', function(e) {
      _compassdir = e.webkitCompassHeading;
  })

p5.prototype.vrY = function(){
  return radians(_compassdir);
}

p5.prototype.VRorbitControl = function(){

  // rotateZ(radians(rotationZ));
  this.rotateX( vrX() );
  this.rotateY( vrY() );

  return this;
};