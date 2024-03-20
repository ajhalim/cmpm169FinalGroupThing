/*
#WCCChallenge - Halloween/Spooky
By Cassidy Renno
https://openprocessing.org/sketch/2053570
I was planning on making this a bit more abstract, but I thought I would lean in to the more classic ghost look, just for fun
*/

let damp = 0.1 //This affects how fast the particles fall, which affects 'smoothness'/line density
let c = 100 //Number of starting particles (number of ghosts), best between 50 and 200
let s = 15 //Ghost eye size

function setup() {
	createCanvas(windowHeight, windowHeight);
	pixelDensity(1)
	background(0)
	noFill()
	
	pts = []
	
	for(let i = 0; i < c; i++) {
		x = width*i/c
		y = height/2 - noise(i*0.05)*100
		pts.push(new pt(x, y, pts))
	}
}

function draw() {
	stroke(255)
	strokeWeight(noise(frameCount*0.05)*0.1)
	pts.filter((p) => p.pos.y<height).forEach((p) => p.upd())
	beginShape()
	pts.forEach((p) => curveVertex(p.pos.x, p.pos.y))
	endShape()

	
	if(frameCount==150 || frameCount==250) {
		for(let i = 0; i < c/4; i++) {
			stroke(0, 0, 0, random(255))
			noFill()
			dellipse(map(i, 0, c/4, 0, width)+random(-10, 10), height/2 - noise(i*0.2)*25 + random(-20, 20), random(s*0.75, s*1.5), random(s*0.75, s*1.5), 50)
		}
	}
	
	if(pts.filter((p) => p.pos.y<height).length==0) {
		noLoop()
	}
	
}

class pt {
	constructor(x, y, o) {
		this.pos = createVector(x, y)
		this.vel = p5.Vector.random2D().mult(2)
		this.acc = createVector(0, random(0.1, 0.5))
		this.others = o
	}
	
	upd() {
		this.pos.add(p5.Vector.mult(this.vel, damp))
		this.vel.add(p5.Vector.mult(this.acc, damp))
		
		let nx = this.others[(this.others.indexOf(this)+1)%this.others.length].pos
	}
}

function dellipse(x, y, sx, sy, d) {
	for(let i = 0; i < d; i++) {
		szx = map(i, 0, d, sx, 0)
		szy = map(i, 0, d, sy, 0)
		strokeWeight(random())
		ellipse(x, y, random(szx*0.8, szx/0.8), random(szy*0.8, szy/0.8))
	}
}