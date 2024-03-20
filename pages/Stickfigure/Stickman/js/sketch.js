// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}
var pointsNum =200
// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    //canvasContainer = $("#canvas-container");
    //let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    // canvas.parent("canvas-container");
    // // resize canvas is the page is resized
    // $(window).resize(function() {
    //     console.log("Resizing...");
    //     resizeCanvas(canvasContainer.width(), canvasContainer.height());
    // });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
    noLoop();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    var randomx = random((0,255));
  createCanvas(400, 400);
  background(0);
  blendMode(ADD);
  drawImage();
  
  
  // moon
  fill(255);
  ellipse(200, 320, 150, 150);
  
  
  drawingContext.shadowColor = color(randomx, randomx, randomx);
  drawingContext.shadowBlur = 12;
  stroke(0)
  //fill(255)
  fill(0);
  // Head
  ellipse(200, 55, 20, 25);
  

  // Body
  
  //neck
  strokeWeight(12);
  line(200, 60, 200, 140);
  
  //Torso
  strokeWeight(10);
  beginShape() 
    vertex(200, 80);
    vertex(190,90)
    vertex(225, 90)   
  endShape() 
  rect(195, 90, 10, 50);
  
  //Feet
  //Hands
  // shoulders
  line(200, 80, 180, 90);
  
  line(200, 80, 225, 90);
  
  // Arms
  line(180, 90, 165, 130);
  line(225, 90, 245, 130);
  
  //forearms
  line(165, 130, 165, 180);
  line(245, 130, 240, 180);

  // Left Leg
  line(195, 140, 160, 300);

  // Right Leg
  line(205, 140, 240, 300);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}
function drawImage() {	
  
	drawingContext.shadowBlur = 32;
	drawingContext.shadowColor = color(200, 220, 255);
	for(var i = 0; i < pointsNum; i++) {
		let r = random(2 ,8);
		noStroke();
		fill(200, 220, 255);
		var x=random(width);
		var y=random(height);
		for(var j = 0; j < 6; j++)ellipse(x, y, r, r);
	}
}
function mouseMoved() {
    clear();
    redraw();
    
  }