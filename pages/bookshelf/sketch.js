'use strict';

var tileCountX = 50;
var tileCountY = 10;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var bookHeights = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  initColors(); // Initialize the colors and heights
}

function draw() {
  background(0, 0, 100);

  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  var counter = 0;

  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);

      stroke(0);
      strokeWeight(2);
      noFill();
      rect(posX, posY, tileWidth, tileHeight);

      fill(255);
      rect(posX, posY, tileWidth, min(bookHeights[index], tileHeight / 2));

      counter++;
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}

function mousePressed() {
  // Call initColors to reset colors upon mouse press
  initColors();
}

function initColors() {
  // This function initializes or re-initializes the colors and heights
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
    bookHeights[i] = random(height / 2, min(height / 2, width / tileCountX));
  }
}
