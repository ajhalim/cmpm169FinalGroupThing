//Frozen Beams
//Daniel Moss
//https://openprocessing.org/sketch/1220313
let particls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(100);

	for (let i = 0; i < 100; i++) {
		particls.push(new particle(random(width), random(height))); //☜(ﾟヮﾟ☜)‼‼‼
	}
}

function draw() {
	background(0, 0, 0, 10)
	
	for(let i = 0; i < particls.length; i++){
	let a = particls[i];
a.update();
		
		for(let j = i; j < particls.length; j++){
		let b = particls[j];
		let dist = a.pos.dist(b.pos);	
		
	stroke(j * 2.55, 255, 255, 255 - dist);
			line(a.pos.x, a.pos.y, b.pos.x, b.pos.y);
	}	
		
}	
	
}