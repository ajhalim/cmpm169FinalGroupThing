let img;
let sw = 6;
const reSize = 0.4;

function preload() {
  img = loadImage(
    "https://saliao.github.io/p5.js-files/forest-fairy-portrait-generative-ai.jpg"
  );
  img.loadPixels();
}

function setup() {
  createCanvas(img.width * reSize * 3, img.height * reSize * 3);
  frameRate(30);
  img.resize(width, height);
  strokeWeight(1);
  background(0);
}

function draw() {
  sw -= 0.025;
  strokeWeight(sw);
  if (sw <= 0) {
    noLoop();
  }
  for (let i = 0; i < 500; i++) {
    let x = floor(random(0, img.width));
    let y = floor(random(0, img.height));
    let index = (y * img.width + x) * 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    let a = img.pixels[index + 3];
    stroke(r, g, b, a);
    push();
    translate(x, y);
    let n = noise(x * 0.004, y * 0.004, frameCount * 0.01);
    rotate(radians(map(n, 0, 1, -45, 45)));
    let len = (random(5, 5) * sw) / 5;
    let deviation = sin(frameCount * 0.1 + n * TWO_PI) * 5;
    let spread = cos(frameCount * 0.05 + n * TWO_PI) * 5;
    let startX = deviation;
    let startY = len / 2;
    let endX = deviation + spread;
    let endY = -len / 2;
    line(startX, startY, endX, endY);
    pop();
  }
}

function mousePressed() {
  noiseSeed(random(123456889));
  sw = 6;
  strokeWeight(sw);
 // background(255);
  loop();
  redraw();
}
