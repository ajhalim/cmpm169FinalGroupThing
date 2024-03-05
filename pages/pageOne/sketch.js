let circles = [];

function preload(){
  img = loadImage('clouds.jpg');
  rain = loadSound('rain.mp3');
  type_font = loadFont('typefont.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  image(img, -width/2, -height/2, windowWidth, windowHeight);
  rain.loop();
}

function draw() {
  textFont(type_font);
  fill(0); 
  textSize(25); 
  textAlign(CENTER, CENTER); 
  text('and i wondered...why else would time stop for the rain', 0, 0);
  //background(220);
  // Spawn new circle frequently
  if (random() < 0.05) { //probability 
    let circle = {
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: 0,
      radius: random(5, 15),
      speed: random(1, 5)
    };
    circles.push(circle);
  }

  // Move and display circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    circle.z += circle.speed;
    if (circle.z > width) { //check if off screen
      circles.splice(i, 1); //remove it
    }
    push();
    noStroke();
    translate(circle.x, circle.y, circle.z);
    fill(212, 241, 249);
    ellipse(0, 0, circle.radius * 2, circle.radius * 2);
    pop();
  }
}
