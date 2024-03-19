let particles = []
let cam1, cam2;
let currentCamera;
let plus = 200;

function setup() {
	createCanvas(1112, 834, WEBGL);
	colorMode(HSB);
	angleMode(DEGREES);
	stroke('brown');
	cam1 = createCamera();
    cam2 = createCamera();
    cam2.setPosition(30, 0, 50);
    cam2.lookAt(0, 0, 0);
    cam2.ortho();
    currentCamera = 1;
	strokeWeight(0.5);
}

function draw() {
	background('black');
	sphere(40);
	cam1.lookAt(0, 0, 0);
	cam1.setPosition(200*sin(plus), 0, 200*cos(plus));
	plus += 1
	setCamera(cam1);
	
	if (random(1)>0.97){
		var pos = createVector(0,0,0);
		
		for (var i =0; i<100;i++ ){
			var p = new Particle(pos)
			particles.push(p)
		}
	}
	
	for(var i = particles.length -1; i>=0;i--){
		if(dist(particles[i].pos.x,particles[i].pos.y,particles[i].pos.z,0,0,0)<500){
			particles[i].update();
			particles[i].show();
		}else{
			particles.splice(i,1)
		}
	}
}

class Particle{
	constructor(pos,c){
		this.pos = createVector(pos.x,pos.y,pos.z);
		this.vel = p5.Vector.random3D().normalize().mult(random(4,6))
		this.color = color(random(255), 200, 200, 60);
		this.c = c;
	}
	update(){
		this.pos.add(this.vel)
	}
	show(){
		push();
		fill(this.color,180)
		translate(this.pos.x,this.pos.y,this.pos.z);
		
  	    box(10,10,50);
	
		pop();
	}
}