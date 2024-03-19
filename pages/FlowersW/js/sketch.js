// By Waldeck Schutzer
// https://openprocessing.org/user/421242?view=sketches&o=48

let img;
let sw = 10;
const reSize = 0.14;

function preload() {
  img = loadImage(
    "https://openprocessing-usercontent.s3.amazonaws.com/files/user426045/visual2178645/hc176f803ad8240b36c57f8ca6d91ab28/Firefly%20give%20me%20a%20vase%20with%20flower%2069350.jpg"
  );
  img.loadPixels();
}
function setup() {
  createCanvas(img.width * reSize * 3, img.height * reSize * 3);
  frameRate(30);
  img.resize(width, height);
  strokeWeight(1);
  // sw = 5;
  background(0);
}

function draw() {
  sw -= 0.025;
  strokeWeight(sw);
  if (sw <= 0) {
    noLoop();
  }
  for (let i = 0; i < 1200; i++) {
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
    let n = noise(x * 0.004, y * 0.004);
    rotate(radians(map(n, 0, 1, -180, 180)));
    let len = (random(5, 25) * sw) / 5;
    line(0, -len / 2, 0, len / 2);
    pop();
  }
}

function mousePressed() {
  noiseSeed(random(123456789));
  sw = 10;
  strokeWeight(sw);
  background(255);
  loop();
  redraw();
}
