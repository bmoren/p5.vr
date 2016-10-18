# p5.vr
![p5.vr](p5.vr.png)
#### VR stereo canvas and orbit controls for p5.js

## Tested Phones
iPhone 6s

## Tested Viewers
+ Google Cardboard (Sundance Edition)

## Tips
[using Safari's tethered development tools](http://appletoolbox.com/2014/05/use-web-inspector-debug-mobile-safari/)
for most stable results, add the following inside of your `index.html`'s head tag
```html
<meta name="viewport" content="width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no" />
```

## Live examples
coming soon...

## Documentation

#### createStereoCanvas(renderer, bufferDistance)
Creates a stereo canvas which fills the screen. You do not need to use the normal createCanvas() when using createStereoCanvas()
bufferDistance adds space between the stereo images (in pixels) which can be used to push the images apart from each other to reduce eye strain. play with this value depending on your phone and viewer combo
```javascript
function setup(){
  // createStereoCanvas() //2D
  createStereoCanvas(WEBGL,50) //3D
}
```

#### updateStereo()
Keep the right and left eyes in sync. This should be the last thing in the draw loop.
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
Add sensor/gyroscope based orbit control to the camera in 3D scenes
```javascript
function draw() {
  VRorbitControl()
  //...
}
```

#### orientationLock()
locks the phone in landscape mode to prevent it from going to portrait or doing a landscape 'flip'. coming soon, if this is even possible......
```javascript
function setup(){
  orientationLock()
}
```

#### vrX()
returns the X orientation of of the orbit. The wide axis when looking at a 'landscape' mode phone. Returns false if the browser cannot get the webkitCompassHeading
```javascript
function draw() {
  console.log( vrX() )
  //...
}
```

#### vrY()
returns the Y orientation of of the orbit.
```javascript
function draw() {
  console.log( vrY() )
  //...
}
```

#### [deviceOrientation](http://p5js.org/reference/#/p5/deviceOrientation)
p5js' standard system variable deviceOrientation always contains the orientation of the device. The value of this variable will either be set 'landscape' or 'portrait'. If no data is available it will be set to 'undefined'.




