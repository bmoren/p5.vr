# p5.vr
### stereo VR and orbit controls for p5.js
---

#### createStereoCanvas(renderer)
creates a duplicate stereo canvas for the right eye

```javascript
function setup(){
  // createStereoCanvas() //2D
  createStereoCanvas(WEBGL) //3D
}

```

#### updateStereo()
updates the stereo canvas to a copy of the original p5 cavnas, this should be the last thing in the draw step
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
add orbit control to the camera in 3D scenes
```javascript
function draw() {
VRorbitControl()

//...

}
```