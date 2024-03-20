/*
This is an entry to the #WCCChallenge theme of "shadow math."

I tried doing a black hole! This started based on actual
physics, even though it is decidedly unphysical now. I wrote a
little blog post about it here:
Dave Pagurek
https://www.davepagurek.com/blog/black-hole-rendering/
*/

let blackHoleShader
let bg

function preload() {
	bg=loadImage("crab-nebula.jpg")
	//bg =  createCapture(VIDEO);
    //bg.size(width, height);
}

function setup() {
  createCanvas(1112, 834, WEBGL)
	blackHoleShader = createShader(vert, frag)
}

function windowResized() {
	resizeCanvas(width, height)
}

function draw() {
  background(0)
  
  rectMode(CENTER)
  imageMode(CENTER)
  noStroke()
  push()
  shader(blackHoleShader)
  blackHoleShader.setUniform('time', millis() / 1000);
	blackHoleShader.setUniform('bg', bg);
	blackHoleShader.setUniform('aspect', width / height);
  rect(0, 0, width, height)
  pop()
}