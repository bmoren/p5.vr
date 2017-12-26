# p5.vr
![p5.vr](p5.vr.png)
#### VR stereo canvas and orbit controls for p5.js

## Status
This repo is no longer under active development (if you want to adopt it and/or expand it, let me know!)

## Tested Phones / Browsers
+ iPhone 6s / iOS safari 10

## Tested Viewers
+ Google Cardboard (Sundance Edition)

## Live examples
code found in the examples folder
+ [Basic 2D example](https://bmoren.github.io/p5.vr/examples/basic2D/)
+ [Basic 3D example](https://bmoren.github.io/p5.vr/examples/basic3D/)
+ [many teapots](https://bmoren.github.io/p5.vr/examples/teapot_city/)

## Setup
+ [How to Add a library to your p5.js sketch](http://p5js.org/libraries/#using-a-library)
+ [using Safari's tethered development tools](http://appletoolbox.com/2014/05/use-web-inspector-debug-mobile-safari/)
+ for most stable results, add the following inside of your `index.html`'s head tag
```html
<meta name="viewport" content="width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no" />
```
+ Remember that .obj files cannot be loaded in cross origins! 

## Documentation

#### `createStereoCanvas([renderer], [bufferDistance])`
Creates a stereo canvas which fills the screen. You do not need to use the normal createCanvas() when using createStereoCanvas().  
bufferDistance adds space between the stereo images (in pixels) which can be used to push the images apart from each other to reduce eye strain. play with this value depending on your phone and viewer combo
```javascript
function setup(){
  // createStereoCanvas(50) //2D
  createStereoCanvas(WEBGL,50) //3D
}
```

#### `updateStereo()`
Keep the right and left eyes in sync. This should be the last thing in the draw loop.
```javascript
function draw() {

  x += 1;
  y += 1;
  ellipse(x,y,100,100)
  //...

  updateStereo() // duplicate the left eye to the right eye
}
```

#### `VRorbitControl()`
Add sensor/gyroscope based orbit control to the camera in 3D scenes
```javascript
function draw() {
  VRorbitControl() //look to move the world
  //...
}
```

<!-- #### `orientationLock()`
locks the phone in landscape mode to prevent it from going to portrait or doing a landscape 'flip'. coming soon, if this is even possible......
```javascript
function setup(){
  orientationLock()
}
``` -->

#### `vrX()`
returns the X orientation of of the orbit. The wide axis when looking at a 'landscape' mode phone.
```javascript
function draw() {
  console.log( vrX() ) // returns a value between PI, TWO_PI
  //...
}
```

#### `vrY()`
returns the Y orientation of of the orbit.
```javascript
function draw() {
  console.log( vrY() ) //returns a value between -PI, PI
  //...
}
```

#### `getDeviceType()`
returns the type of device. Returns a value of 'iphone', 'ipad', 'android', 'macintosh', 'windows'
```javascript
function setup() {
  if(getDeviceType() == 'iphone'){
    //iphone specific changes here
  }
}
```

#### [`deviceOrientation`](http://p5js.org/reference/#/p5/deviceOrientation)
p5js' standard system variable deviceOrientation always contains the orientation of the device. The value of this variable will either be set 'landscape' or 'portrait'. If no data is available it will be set to 'undefined'.
```javascript
function setup(){
  if(deviceOrientation == 'portrait'){
    alert('please rotate your phone!')
  }
}
```



#### [`orbitControl()`](http://p5js.org/examples/3d-orbit-control.html)
prjs' built in mouse based orbit control for non-vr use. This is a useful function for debugging your projects. You can toggle between this and VRorbitControl() when moving between desktop and mobile development environments.
```javascript
function draw() {
  orbitControl() // drag to move the world.
  // VRorbitControl(); //turn me off to use the mouse based orbitControl()
  //...
}
```

## Full example
```javascript
function setup(){
  createStereoCanvas(WEBGL, 50); //make a new stereo canvas with a 50 pixel buffer between each eye to reduce eyestrain.
  teapot = loadModel('teapot.obj');
  orientationLock(); //not yet functioning.

}

function draw(){
  VRorbitControl(); // enable & update the X/Y vr orbit controls for a 3D scene, this is not needed for a 2D scene.

  //add something to the scene
  normalMaterial();
  model(teapot);


  updateStereo(); //update the Stereo Image, without this, the 2 eyes will not be in sync.
}
```



