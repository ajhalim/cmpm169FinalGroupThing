//https://openprocessing.org/sketch/1949814
//qiuzhi
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
	background(0)
	fill(255)
	stroke(255)
	translate(width/2,height/2)
	for(var i=0;i<500;i+=2){
		let lastAng = (i-2)/10+ frameCount/10
		let ang = i/10 + frameCount/50
		let r = i
		line(r*cos(lastAng),r*sin(lastAng),r*cos(ang),r*sin(ang))
		textSize(20)
		push()
		translate(r*cos(lastAng),r*sin(lastAng))
		text("太阳崇拜"[i%5],0,0)
	  pop()
	}
}