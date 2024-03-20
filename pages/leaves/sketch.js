let shapes = []; // Array to hold shape objects
let lastSpawnTime = 0; // Variable to hold the time of the last shape spawn
let minTimeDelay = 75; // Minimum time delay between spawning shapes
let maxTimeDelay = 100; // Maximum time delay between spawning shapes
let moveDirection = 1; // Movement direction of the objects, initially downwards

function preload(){
    message = loadFont('font.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  textSize(20);
  textFont(message);
  textAlign(CENTER,CENTER);
  text("scroll to change direction",0,-350);
  // Translate to the center of the screen
  translate(0, 0, -500);

  // Check if it's time to spawn a new shape
  if (millis() - lastSpawnTime > random(minTimeDelay, maxTimeDelay)) {
    // Add a new shape to the array
    shapes.push(new Shape(random(-width/2, width/2), random(-height/2, height/2), moveDirection));
    // Update the last spawn time
    lastSpawnTime = millis();
  }

  // Loop through the shapes array and render each shape
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].display();
  }
}

function mouseWheel(event) {
  // Change the movement direction of the objects based on mouse wheel direction
  if (event.deltaY > 0) {
    moveDirection = 1; // Move downwards if mouse wheel scrolls down
  } else if (event.deltaY < 0) {
    moveDirection = -1; // Move upwards if mouse wheel scrolls up
  }
}

// Shape class
class Shape {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.z = 0;
    this.speed = 20 * direction; // Speed at which the shape moves
  }

  // Update the position of the shape
  update() {
    this.z += this.speed;
    // If the shape goes off the screen, remove it from the array
    if (this.z > height + 500 || this.z < -height) {
      let index = shapes.indexOf(this);
      shapes.splice(index, 1);
    }
  }

  // Display the shape
  display() {
    push();
    translate(this.x, this.y, this.z);
    fill(255);
    noStroke();
    box(10, 10, 200);
    pop();
  }
}
