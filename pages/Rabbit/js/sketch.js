let img;
let sw = 10;
const reSize = 0.2;
let colors = ['red', 'green', 'blue'];
let currentColorIndex = 0;

function preload() {
  img = loadImage(
    "https://saliao.github.io/p5.js-files/rabbit.jpg"
  );
  img.loadPixels();
}

function setup() {
  createCanvas(img.width * reSize * 3, img.height * reSize * 3);
  frameRate(30);
  img.resize(width, height);
  strokeWeight(0.5);
  background(0);
  setInterval(updateSketch, 10); // Update every second
}

function draw() {
  // Empty draw function, everything is handled in updateSketch function
}

function updateSketch() {
  sw -= 0.025;
  strokeWeight(1);
  if (sw <= 0) {
    sw = 10;
    noiseSeed(random(123456789));
    redraw();
  }

  for (let i = 0; i < 1200; i++) {
    let x = floor(random(0, img.width));
    let y = floor(random(0, img.height));
    let index = (y * img.width + x) * 4;
    
    // Get alternating color components
    let r, g, b;
    if (currentColorIndex === 0) {
      r = img.pixels[index];
      g = img.pixels[index + 10];
      b = img.pixels[index - 20];
    } else if (currentColorIndex === 1) {
      r = img.pixels[index - 10];
      g = img.pixels[index + 20];
      b = img.pixels[index];
    } else {
      r = img.pixels[index + 20];
      g = img.pixels[index];
      b = img.pixels[index + 10];
    }
    
    // Increment color index
    currentColorIndex = (currentColorIndex + 1) % 3;

    let a = img.pixels[index + 3];
    stroke(r, g, b, a);
    push();
    translate(x, y);
    let n = noise(x * 0.1, y * 0.1);
    rotate(radians(map(n, 0, 1, 0, 180)));
    let len = (random(5, 25) * 2) / 10;
    line(0, -len / 2, 0, len / 2);
    pop();
  }
}
