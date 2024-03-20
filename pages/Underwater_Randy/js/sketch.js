//My algorithmic design is inspired by on of Windows 98's scrennsavers 'underwater'. When Windows 98 was released on May 15, 1998 and brought many kinds of vivid screensavers. 
//It was my first time to understand algorithmic images because they are not videos which are already edited. They are random and displayed by algorithm.
//Screen is used to to prevent phosphor burn-in on CRT and plasma computer monitors, and it had been abandoned by technological progress of computer monitors.
//'Underwater' is my favourite screensaver, it shows many kinds of marine animals randomly.
//However, there is a drawback of the screensaver. It dosen't show the different move of motions, especially there are different kinds of animals.
//In my algorithmic design, I created three kinds of animals' movements to show their different features in real world. And I designed different motions for even same animals.
//I designed fished that can swim swiftly, and bigger fish can swim faster, small fish swim slower and unskillfuly.
//And the turtle swims slow but with certain rules, because it has different body structures with fished.
//Last the sea horse can't move with long distance, it can only move on a small scale.
//references:
//Nakayama, K. (2009). U.S. Patent No. 7,596,768. Washington, DC: U.S. Patent and Trademark Office.
//Knight, L. (2004). U.S. Patent Application No. 10/236,695.

// By Randy
// https://openprocessing.org/user/120349?view=sketches&o=10

var bgimg;
var img1;
var img2;
var x1 = 0;
var y1off = 200;
var angle = 0;
var offset = 60;
var scalar = 40;
var speedy = 0.05;
var x2 = -200;
var speedx = 0.5;
var radius = 20;
var yx = 1000;
var speed1 = 5;
var x3 = -100;
var y3 = 100;
var x4 = 500;
var speed4 = 0.5;
var direction = 1;


//Using some images to make marine animals look vivid.
function preload() {
	//image references:
	//Photo by Sven Scheuermeier on Unsplash
	//https://mysticmorning.deviantart.com/art/Blue-Fish-png-292103542
	//https://carpediemmaldives.com/product/turtle-decor/
	//https://icons8.cn/icon/16108/seahorse;
	bgimg = loadImage('sven-scheuermeier-108248-unsplash.jpg ');
	img1 = loadImage('blue_fish_png_by_mysticmorning-d4twsja.png');
	img2 = loadImage('turtle1.png');
	img3 = loadImage('seahorse.png');
	img4 = loadImage('reverse-seahorse.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	

}

function draw() {
	background(bgimg);
	x1 += 2;
	var y1 = noise(y1off) * 200;
	y1off += 0.01;
 	image(img1, x1, y1, 100, 60);
	x3 += 3;
	y3 += 1;
	push();
	scale(1.5);
	image(img1, x3, y3, 100,60);
	pop();
	//I created two fishes swim from the left of screen to the right of screen. 
	//And I used perlin nosie to value the vertical viration of the small fish, to make it looks real. Because small fishes are easily influenced by stream, and that can make it looks hard to swim.
	//I used scale to create a bigger fish, and updated x and y variation with bigger value to make the big fish looks fast and stronger.
	
  x2 += speedx;
	var y2 = offset + sin(angle) * scalar;
	image(img2, x2, y2 + 500, 200, 120);
	angle += speedy;
	//turtle has different movements with fishes. It swims slower but has more stable rule like wave.
	//So I used sine wave movement to update turtle's y viration to make it swim up and down like wave.
	
	x4 += speed4 * direction;
	if ((x4 > 600) || (x4 <500)) {
		direction = -direction;
	} if (direction == 1) {
		image(img3, x4, height * 0.6, 100, 100);
	} else {
		image(img4, x4, height * 0.6, 100, 100);
	}
	//The sea horse can not move far like fished, it can only move sightly in a small scale.
	//So I add a new variable to store the direction of the shape.
	//A direction value of 1 moves to the shape to the right, and a value of -1 moves the shape to the left.
		
		
	
	yx -= speed1;
	if(yx <0 ) {
		yx = 1000;
	}
	noStroke();
	fill(255, 255, 255, 50);
	ellipse(100, yx, 30);
	ellipse(140, yx-30, 50);
	ellipse(120, yx-60, 40);
	ellipse(500, yx+60, 50);
	ellipse(530, yx+80, 30);
	ellipse(560, yx+120, 40);
	ellipse(1200, yx+200, 30);
	ellipse(1250, yx+240, 30);
	ellipse(1240, yx+280, 40);
	//To make the underwater scene looks more vivid, I created some ellipses with low opacity to mimic the bubbles.
	//I used decision condition to move the shapes back to the bottom edge of the screen after they disappear off the top.
	//The code tests to see if the value of y has increased beyond the height of the screen.
	//If it has , the value of y will return to it's start point so that as it continues to increase.
}