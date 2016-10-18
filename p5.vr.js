console.log("+~+~ p5.vr ~+~+");

p5.prototype._duplicateCanvas
p5.prototype._originalCanvas

p5.prototype.createStereoCanvas = function(renderer, PD){

 // <meta name="viewport" content = "width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no" />
  // var meta = document.createElement('meta');
  // meta.name = "viewport";
  // meta.content = "width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no";
  // document.getElementsByTagName('head')[0].appendChild(meta);

  createCanvas((windowWidth/2)-PD, windowHeight, renderer);

  _originalCanvas = document.getElementById('defaultCanvas0');

  _duplicateCanvas = document.createElement('canvas');
  _duplicateCanvas.id = "duplicateCanvas";
  document.body.appendChild(_duplicateCanvas);

  var dc = document.querySelector("#duplicateCanvas");
  dc.width = _originalCanvas.width;
  dc.height = _originalCanvas.height;
  dc.style.position = 'absolute';
  dc.style.top = 0;
  dc.style.left = (_originalCanvas.width/2) + PD*2;
  dc.style.width = _originalCanvas.width/2;
  dc.style.height = _originalCanvas.height/2;

  _duplicateCanvas.getContext('2d').drawImage(_originalCanvas, 0, 0);

}

p5.prototype.updateStereo = function(){
  _duplicateCanvas.getContext('2d').drawImage(_originalCanvas, 0, 0);
}

p5.prototype.vrY = function(){
  var rotation = radians(rotationY) + HALF_PI; // +half+pi so it's 'infront of you'
  var x = map(rotation, 0,PI, -PI, PI);
  return x;
}

p5.prototype._compassdir = false;
  window.addEventListener('deviceorientation', function(e) {
      _compassdir = e.webkitCompassHeading;
  })

p5.prototype.vrX = function(){
  if(_compassdir == undefined){
    return false
  }
  return radians(_compassdir);
}

p5.prototype.VRorbitControl = function(){

  // rotateZ(radians(rotationZ));
  this.rotateX( vrY() );
  this.rotateY( vrX() );

  return this;
};


p5.prototype.orientationLock = function(){
//... coming soon?
}


