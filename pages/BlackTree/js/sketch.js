// https://openprocessing.org/sketch/2166108
// By Joe DeNavas 


//tree code forked form - https://openprocessing.org/sketch/2071621
//land code forked from - https://openprocessing.org/sketch/2149011

const nodeAmount = 500;
const rotateSpeed = 0.01;
const growSpeed = 0.01;
const nodeArray = [];
const linkArray = [];
let zoom;
let generator;
let PARTS = []
let count = 2
let c=0
let counter=0

function w(n) {
  if(n==null) return width
  return width*n
}

function h(n) {
  if(n==null) return height
  return height*n
}

function hsbShift(col, h, s, b){
    return color(hue(col)+h, saturation(col)+s, brightness(col)+b)
}

function randNeg(n) {
  return (n==null)?(random() < 0.5 ? 1:-1):(random() < 0.5 ? n:-n)
}

function ease(n) {
  return n**3
}

class particle {
  constructor(sx, sy, sc, ss, sd, sl, ls, tag, others) {
    this.tag = tag
    this.pos = createVector(sx, sy)
    this.col = sc
    this.siz = 1
    this.asiz = ss
    this.dir = sd
    this.spd = (this.tag=="trunk")?2:random(0.25, 2)
    this.life = sl
    this.lifespan = ls
    this.others = others
    this.thshift = random(-1, 1)*0
    this.tsshift = random(1)*0
    this.tbshift = random(-1)*0
    this.rsiz = this.asiz*this.siz
  }
  
  kill() {
    let index = this.others.indexOf(this)
    if(index > -1) {
      this.others.splice(index, 1)
    }
    //circle(this.pos.x, this.pos.y, random(5, 15))
  }
  
  update() {
    this.rsiz = this.asiz*this.siz
    this.pos.add(createVector(cos(radians(this.dir))*this.spd, sin(radians(this.dir))*this.spd))
    this.dir += random(-1, 1)*(this.tag == "trunk" && this.siz > 0.7 ? 1:map(this.life, 0, this.lifespan, 1, 5))
    if(random() < (this.tag=="branch" ? 0.003:0.005) && this.tag!="trunk") this.dir += randNeg(72)*0
    //this.siz = smoothstep(this.siz, 0, 0.05)
    this.siz = lerp(this.siz, 0, random(0.015))
    //this.siz -= random(0.01)
    
    if(this.rsiz < 0.1 || this.spd > this.rsiz) {
      this.kill()
    }
    
    this.col = hsbShift(this.col, random(this.thshift), random(this.tsshift), random(this.tbshift))
    
    if(random() < 0.03 && this.tag=="trunk" && this.siz < .55) {
      this.others.push(new particle(this.pos.x, this.pos.y, this.col, this.rsiz, this.dir+randNeg(random(15, 30)), this.life, this.lifespan, "branch", this.others))
    }
    
    if(random() < 0.01 && this.tag=="branch") {
      this.others.push(new particle(this.pos.x, this.pos.y, this.col, this.rsiz, this.dir, this.life, this.lifespan, "branch", this.others))
    }
    
    if(random() < map(this.siz, 0, 0.25, 0.5, 0.3) && this.tag=="branch" && this.siz < 0.25) {
      this.others.push(new particle(this.pos.x, this.pos.y, this.col, (this.siz**0.5)*this.rsiz, this.dir+randNeg(random(5, 20)), 0, random(this.lifespan*0.05), "twig", this.others))
    }
    
    noStroke()
    fill(this.col)
    circle(this.pos.x, this.pos.y+130, this.siz*this.asiz)
    
    if(this.life > this.lifespan) {
      this.kill()
    } 
    this.life++
  }
}


function setup() {
	ranges = 50;
 	color1 = "white"
 	color2 = "#202020"
	
  generator = gabrielGraph();
  createCanvas(1300, 700);
  zoom = min(width, height) * 1.2;

  while (nodeArray.length < nodeAmount) {
    const alpha = random(TWO_PI);
    const beta = random(TWO_PI);
    const x = sin(alpha) * cos(beta);
    const y = cos(alpha);
    const z = sin(alpha) * sin(beta);
    const n = new node(x, y, z);
    nodeArray.push(n);
  }
 PTS = [createVector(0, h(0.9))]
  for(let i = 0; i < 6; i++) {
    PTS.push(createVector(w(i/6), h(0.9)+random(-20, 20)))
  }
  PTS.push(createVector(w(), h(0.9)))
  PTS.push(createVector(w(), h()))
  PTS.push(createVector(0, h()))
  PTS.push(createVector(0, h()))
  
  beginShape()
  for(p of PTS) {
    curveVertex(p.x, p.y)
  }
  endShape()
    
  for(let i = 0; i < count; i++) {
    PARTS.push(new particle(w(0.5), h(0.95), "#000", 100, 270, 0, 500, "trunk", PARTS))
  }
}

function* gabrielGraph() {
// noprotect
  for (let i = 0; i < nodeArray.length; i++) {
    const current = nodeArray[i];
    const rest = nodeArray.slice(i+1);
    for (const target of rest) {
      const centre = current.vec3.copy().add(target.vec3).div(2);
      const distance = current.vec3.dist(target.vec3);
      const radius = distance / 2;
      if (nodeArray.every((extra) => 
          extra == current || extra == target || extra.vec3.dist(centre) > radius)
      ){
				linkArray.push(new link(current, target));
				yield;
			}
    }
  }
	background(100);
}



function draw() 
{
 	strokeWeight(5);
	c=c+.01 
	
 	for (let i = 0; i < ranges; i++) {
		if(counter<220) {
				if(frameCount%20==0) {
					push()
					translate(random(width),random(height+50),0);
					nodeArray.forEach((node) => node.rotate());
					nodeArray.forEach((node) => node.update());
					linkArray.forEach((link) => link.show());
					pop()
				}
		}	
		
		if(i==0) stroke(random(255),random(255));
		else if(i==3) stroke(random(255),random(255));
 		else stroke(color2);

 		beginShape(); //waves
 		for (let x = -100; x < width + 200; x += random(100)) {
 			let n = noise(x * 0.001+c, i * 0.01+c, x * 0.02+c);
 			let y = map(n, 0, 3, 500, height * 1)
 			curveVertex(x, y+c*50);
 		}
 		endShape();
		
 	}
	stroke(0);
	strokeWeight(1);

	if(counter<22) {
		fill(200)
		rect(0,0,width,height)
	}
	
	counter++
	for(var p of PARTS) {
  	for(let i = 0; i < 1; i++) p.update()
  }
	
	if(counter<220) {
  generator.next();
	push()
  translate(650,300);
  nodeArray.forEach((node) => node.rotate());
  nodeArray.forEach((node) => node.update());
  linkArray.forEach((link) => link.show());
	pop()
	}
}

const node = function (x, y, z) {
  this.vec3 = createVector(x, y, z);
  this.vec2 = createVector(0, 0);
  this.depth = 0;

  this.rotate = () => {
    const { x, y } = createVector(this.vec3.x, this.vec3.z).rotate(rotateSpeed);
    this.vec3.x = x;
    this.vec3.z = y;
  };

  this.update = () => {
    const magnitude = map(cos(60), -1, 1, 3, 1);
    this.depth = magnitude + this.vec3.z;
    this.vec2.x = (this.vec3.x / this.depth) * zoom;
    this.vec2.y = (this.vec3.y / this.depth) * zoom;
    this.scaling = 10 / this.depth;
  };
  this.show = () => {
    noStroke();
    fill("black");
    ellipse(this.vec2.x, this.vec2.y, this.scaling);
  };
};

const link = function (node1, node2) {
  this.node1 = node1;
  this.node2 = node2;
  this.age = 0;

  this.show = () => {
    const totalScaling = this.node1.scaling + this.node2.scaling;
    strokeWeight(totalScaling / 4);
    if (this.age >= 1) {
      stroke(random(255),25);
      line(
        this.node1.vec2.x,
        this.node1.vec2.y,
        this.node2.vec2.x,
        this.node2.vec2.y
      );
      return;
    }
    this.age += growSpeed;
    const difference = this.node2.vec2.copy().sub(this.node1.vec2);
    const current = this.node1.vec2;
    const target = current.copy().add(difference.mult(this.age));
    stroke(random(255),random(255));
    line(current.x, current.y, target.x, target.y);
  };
};

function smoothstep(start, end, amount) {
  // Clamp the value of 'amount' between 0 and 1
  amount = Math.max(0, Math.min(1, amount));

  // Calculate the interpolated value using the smoothstep equation
  return (amount * amount * (3 - 2 * amount)) * (end - start) + start;
}