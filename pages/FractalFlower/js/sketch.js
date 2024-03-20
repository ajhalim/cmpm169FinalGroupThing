/*https://openprocessing.org/sketch/1607053
Futuresigner
*/
var startRad = 150
var ang
var first = 1
var i = 0

var defaultEase = 1

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(0.5);
	background(0);
	stroke(255, 150, 50, 150);
	strokeWeight(1)
	
	ang = PI/5
}

function draw() {		
	background(0, 255);
	blendMode(ADD);
	reflectFrac(0);
	blendMode(BLEND);
	ang = defaultEase*0.8
}

function reflectFrac(_ang){
	push();
	translate(width/2, height/2);
	rotate(_ang)
	drawLine(startRad, 255)
	pop();
	if(_ang <= TWO_PI){
		reflectFrac(_ang+(TWO_PI/4/4))
	}
}

function drawLine(rad, _r){
	stroke(_r, 150, 50, 150);
	line(0, 0, rad, 0);
	translate(rad, 0);
	if(rad > 10){
		push()
		rotate(ang+(mouseX*0.001)+(frameCount*0.005))
		drawLine(rad*0.7, _r-20)
		pop()
		push()
		rotate(-ang+(mouseY*0.001)+(frameCount*0.0034))
		drawLine(rad*0.7, _r-20)
		pop()
	}
}

function easeInOutQuint(x){
	return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
}