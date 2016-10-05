console.log("+~+~ p5.vr ~+~+");

p5.prototype._duplicateCanvas
p5.prototype._originalCanvas

p5.prototype.createStereoCanvas = function(renderer){

  createCanvas(windowWidth/2, windowHeight, renderer);

  _originalCanvas = document.getElementById('defaultCanvas0');
  // console.log(_originalCanvas);

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

p5.prototype.VRorbitControl = function(){

  // rotateZ(radians(rotationZ));
  this.rotateX(radians(rotationY) + HALF_PI);
  this.rotateY(radians(rotationX));

    // this.rotateY((this.mouseX - this.width / 2) / (this.width / 2));
    // this.rotateX((this.mouseY - this.height / 2) / (this.width / 2));

  return this;
};