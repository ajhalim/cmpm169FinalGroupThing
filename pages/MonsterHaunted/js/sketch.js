// https://saliao.github.io/p5.js-files/creepy-shadow.jpg
// By Waldeck Schutzer
// https://openprocessing.org/user/421242?view=sketches&o=48

let img;
let sw = 10;
const reSize = 1;

function preload() {
  img = loadImage(
    "https://images.nightcafe.studio/jobs/1YAIX6bxAooDzGulhHTy/1YAIX6bxAooDzGulhHTy--1--yqkjj.jpg?tr=w-1600,c-at_max"
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
    let r = img.pixels[index+100];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    let a = img.pixels[index + 3];
    stroke(r, g, b, a);
    push();
    translate(x, y);
    let n = noise(x * 0.1, y * 0.1);
    rotate(radians(map(n, 0, 1, -180, 180)));
    let len = (random(5, 25) * 2) / 5;
    line(0, -len / 2, 0, len / 2);
    pop();
  }
}
