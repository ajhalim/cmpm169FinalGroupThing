const colors = ["#040119", "brown", "#D90368", "yellow", "#F1E9DA"]
const bg_stars = [];
const stars = [];
let t = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noStroke();
	
	colors.forEach(c => {
		N = 1000
		fill(c);
		for (i=0; i<N; i++){
			let bg_star = createVector(random(width),random(height));
			bg_stars.push(bg_star);
		}
	})
	
	dx = random(0.1,1);
	dy = random(0.1,1);
	Rx= width;
	Ry = Rx*dy/dx;
	
	colors.forEach(c => {
		N = 100
		fill(c);
		for (i=0; i<N; i++){
			let star = createVector(random(-Rx*dx,Rx*dx),random(-Ry*dy,Ry*dy),pow((Rx/width),0.5)*random(30,100));
			stars.push(star);
		}
		Rx /= 2
		Ry /= 2
	})
	
}

function draw() {
	background(0);
	I = 0
	colors.forEach(c => {
		N = 1000
		fill(c);
		for (i=0; i<N; i++){
			let bg_star = bg_stars[I*N+i];
			circle(bg_star.x,bg_star.y,10*noise(t+i));
		}
		I++
	})
	
	translate(width/2, height/2);
	rotate(-PI/6);
	
	I = 0
	colors.forEach(c => {
		N = 100
		fill(c);
		for (i=0; i<N; i++){
			let star = stars[I*N+i];
			circle(star.x*cos(0.01*t+i),star.y,noise(t+i)*star.z);
		}
		I++
	})
	
		N = 50
		fill(colors[0]);
		for (i=0; i<N; i++){
			let star = stars[i];
			circle(-star.x*cos(0.05*t+i+10),star.y*noise(i),noise(t+i)*star.z);
		}
	
	
	t+=0.1;
}