// By Donald
// https://openprocessing.org/user/132610?view=sketches&o=3
let seed;
let size = 1500;
let fineness = 200;
let img;

function preload() {
  img = loadImage(
    "https://64.media.tumblr.com/5b8e15e9c7526127d3b1dbb74162e2a7/tumblr_p315l8981d1uxfkl5o1_1280.jpg"
  );
}

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  imageMode(CENTER);
  noStroke();
  seed = random(1, 20);
}

function draw() {
  randomSeed(seed);
  for (let i = 0; i < size; i += fineness) {
    push();
    translate(width / 2, height / 2);
    drawArc(0, int(random(10, 30)), size - i);
    pop();
  }
  // noLoop();
}

function drawArc(start, end, radius) {
  drawingContext.save();
  arc(0, 0, radius, radius, start, end, PIE);
  drawingContext.clip();
  image(
    img,
    10 * cos(start * radius + frameCount),
    10 * sin(end * radius + frameCount)
  );
  drawingContext.restore();
  if (end < 360) {
    start = end;
    if (end <= 330) {
      end = start + int(random(10, 30));
    } else {
      end = 360;
    }
    drawArc(start, end, radius);
  }
}
