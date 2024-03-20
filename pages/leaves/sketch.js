let leaves = [];
let bgGraphics; // Graphics buffer for background
let nextLeafSetTime = 0; // Time to start the next set of leaves falling
let leafSetInterval = 3000; // Interval between each set of leaves falling (in milliseconds)

function preload(){
  message = loadFont('font.ttf');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  bgGraphics = createGraphics(width, height); // Create graphics buffer
  bgGraphics.background(140);
  for (let i = 0; i < 1000; i++) { // Create random green circles
    let x = random(bgGraphics.width);
    let y = random(bgGraphics.height);
    let size = random(10, 50);
    let green = random(100, 200);
    bgGraphics.fill(0, green, 0);
    bgGraphics.noStroke();
    bgGraphics.ellipse(x, y, size, size);
  }
  bgGraphics.filter(BLUR, 10); // Apply blur effect
}

function draw() {
  // Draw background from graphics buffer
  image(bgGraphics, -width / 2, -height / 2);
  
  push();
  // Draw tree trunk
  stroke(100, 50, 10);
  fill(139, 69, 19);
  cylinder(30, 600);
  translate(172,0);
  cylinder(30, 600);
  translate(-400,0);
  cylinder(30, 600);
  pop();
  
  textFont(message);
  textSize(15);
  textAlign(CENTER,CENTER);
  fill(225);
  text("click to change the speed", -400, -200);

  // Draw leaves
  for (let leaf of leaves) {
    leaf.update();
    leaf.display();
  }

  // Check if it's time to start the next set of leaves falling
  if (millis() > nextLeafSetTime) {
    addLeafSet();
    nextLeafSetTime = millis() + leafSetInterval; // Set time for the next leaf set
  }
}

function addLeafSet() {
  let numLeaves = 100; // Number of leaves in each set
  for (let i = 0; i < numLeaves; i++) {
    leaves.push(new Leaf());
  }
}

class Leaf {
  constructor() {
    this.x = random(-width / 2, width / 2);
    this.y = -height / 2;
    this.z = random(-300, 300);
    this.size = random(10, 30);
    this.speed = random(1, 3);
    this.rotationSpeed = random(-0.01, 0.01); // Adjusted rotation speed
    this.color = color(random(100, 200), random(100, 200), 0);
  }

  update() {
    this.y += this.speed;
    if (this.y > height / 2) {
      this.y = -height / 2;
      this.x = random(-width / 2, width / 2);
      this.z = random(-500, 1000);
    }
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateZ(frameCount * this.rotationSpeed);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.size, this.size / 2);
    pop();
  }

  // Function to change speed when the mouse is clicked
  changeSpeed(newSpeed) {
    this.speed = newSpeed;
  }
}

// Event handler for mouse click
function mouseClicked() {
  let newSpeed = random(1, 3); // Generate a new random speed
  // Change the speed of each leaf
  for (let leaf of leaves) {
    leaf.changeSpeed(newSpeed);
  }
}

// Event handler for key press
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('falling_leaves', 'jpg'); // Save canvas as JPEG image
  }
}
