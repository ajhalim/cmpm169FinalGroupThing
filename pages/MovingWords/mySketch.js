//https://openprocessing.org/sketch/1905500
//Tanvi
let type = " The Timeless Plight "
let chars, font
let offsetX, offsetY, xScale, yScale;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);

	textFont("Courier");
	for (let i = 0; i < 100 / type.length; i++) {
		type = type + type
	}
	chars = type.split("")
}

function draw() {
	background(244, 236, 216)

	offsetX = map(mouseX, 0, width, -400, 400)
	offsetY = map(mouseY, 0, height, -200, 200)
	xScale = 40;
	yScale = 100;

	for (let i = 0; i < chars.length; i++) {
		fill(51,42,40,255)
		textSize(40)
		textAlign(CENTER)
		for (let j = 0; j < 30; j++) {
			text(chars[i],
				-250 + xScale * i + 50 + sin(j * 20 + frameCount / 60) * offsetX,
				-250 + sin(i / 10 + frameCount / 50) * offsetY + j * yScale)
		}
	}
}