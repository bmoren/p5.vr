# p5.vr
![p5.vr](p5.vr.png)
#### VR stereo canvas and orbit controls for p5.js

## Live examples
coming soon...

## Documentation

#### createStereoCanvas(renderer)
creates a stereo canvas which fills the screen. You do not need to use the normal createCanvas() when using createStereoCanvas()

```javascript
function setup(){
  // createStereoCanvas() //2D
  createStereoCanvas(WEBGL) //3D
}

```

#### updateStereo()
keep the right and left eyes in sync. This should be the last thing in the draw loop.
```javascript
function draw() {

  x += 1;
  y += 1;
  ellipse(x,y,100,100)
  //...

  updateStereo();
}
```

#### VRorbitControl()
add sensor/gyroscope based orbit control to the camera in 3D scenes
```javascript
function draw() {
  VRorbitControl()
  //...

}
```