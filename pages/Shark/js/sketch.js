// By Martine Hage
//https://openprocessing.org/user/141185?view=sketches&o=48
let angle = 0;
let changeangle = 0.01;

p5.disableFriendlyErrors = true;

var img,
		particles = [];

const pixelStep = 10;

var x=0
var y=0

function preload(){
	img = loadImage("https://images.unsplash.com/photo-1621911864149-fc37d035bae9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80");
}

function setup(){

	createCanvas(1200,800);
	
	img.resize(width, height);
	for(let x = 0; x < img.width; x += pixelStep){
		for(let y = 0; y < img.height; y += pixelStep){
			particles.push(new Particle(x+(width-img.width)/2,y+(height-img.height)/4,img.get(x,y)));
		}
	}
	noStroke();
}

function draw(){
	angleMode(DEGREES);
  background(0,0,0,3)
  for (let i=0; i<9999; i++){
			x+=5
	if (x>width) {
		y+=5;x=0
	}
	if (y>height) {
		y=0;x=0
	} 
}

	
	for(let particle of particles){

		particle.draw();
		particle.pos.add(particle.vel);
		particle.vel.div(1.1);
		particle.vel.add(p5.Vector.sub(particle.target,particle.pos).div(20));
		const d = dist(particle.pos.x,particle.pos.y,x,y);
		particle.vel.x += (particle.pos.x - x) / d;
		particle.vel.y += (particle.pos.y - y) / d;
	}
	
}

class Particle {
	constructor(x,y,color){
		this.col = color;
		this.pos = new p5.Vector(x,y);
		this.vel = new p5.Vector();
		this.target = this.pos.copy();
	}
	
	draw(){
		fill(this.col);
		ellipse(this.pos.x,this.pos.y,pixelStep,pixelStep);
	}	
}