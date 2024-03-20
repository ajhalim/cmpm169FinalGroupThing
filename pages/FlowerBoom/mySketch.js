//https://openprocessing.org/sketch/1610928
//Artist: Wei-Kai Chen
var flowers = []      // 很多物件組合成一個陣列
var bee      // 單一物件
var colorList = ["#d4c685","#f7ef81","#cfe795","#a7d3a6","#add2c2"]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	// flower = {      // 只寫一朵花時，可直接寫出該物件的內容物(如左註解)，
	// 	x: width/2,    // 但是物件變多時，就必須建立一個陣列去"push()"
	// 	y: height/2,
	// 	size: 1,
	// 	color: "#d3c542"
	// }
	bee = {
		bodyColor: "#ff8700",
		bodyStripe: "#e67024",
		wing: "#d3e216"
	}
	
	// 畫面初始召喚5朵花
	for (var i=0; i<5; i++) {
		flowers.push(generateNewFlower())   
	}
	
}

// 花的本體
function drawFlower(flower) {
	for (var i=0; i<16; i++) {
		push()	
			translate(flower.x, flower.y)
			rotate(i/16*6.28)
			fill("#e6a53c")
			ellipse(0, 0, 30, 30)
			ellipse(0, 0, 20, 20)
			ellipseMode(CORNER)
			fill(flower.color)
			push()
				rotate(frameCount/100)
				ellipse(20, -15, 150*flower.size, 30)
				line(20, 0, 20+150*flower.size, -5)
			pop()
		pop()
	}
}

// 鼠標=>蜜蜂
function drawBee(bee) {
	push()
		translate(bee.x, bee.y)
	
		fill(bee.bodyColor)
		ellipse(0, 0, 50, 20)
		fill(bee.bodyStripe)

		ellipseMode(CORNER)
		fill(bee.wing)
		push()
			translate(0, -10)
			rotate(-1.2)
			ellipse(0, 0, 20, 10)
		pop()
		push()
			translate(0, -7)
			rotate(-1.94)
			ellipse(0, 0, 20, 10)
		pop()
	
		strokeWeight(3)
		line(0, -10, 0, 10)
		line(-10, -9, -10, 9)
		line(10, -9, 10, 9)
	
		point(18, -2)
	pop()
}


// 由於不止一個物件，因此用函數的形式可以召喚無限多個物件
function generateNewFlower(x, y) {    
	return {
		// 若有指定x值，則使用該值，反之則給給予隨機值
		x: x || random(width),    
		y: y || random(height),
		size: random(1),
		color: random(colorList)
	}
}


function mousePressed() {
	let flower = generateNewFlower(mouseX, mouseY)   
	// 建立一個變數去儲存函數的所有回傳值
	flowers.push(flower)   
	// 再把此變數丟入flowers[]陣列內，使其成為裡面的其中一個物件
}


function draw() {
	background(100)

	// 由於花朵在此視為物件，因此用迴圈去呼叫所有在陣列中的物件
	for (var i=0; i<flowers.length; i++) {
		let flower = flowers[i]
		drawFlower(flower)
		// 若滑鼠和花朵的距離小於150，就使花朵綻放，反之則枯萎
		if (dist(mouseX, mouseY, flower.x, flower.y) < 150) {
			flower.size = lerp(flower.size, 1, 0.12)
		} else {
			flower.size = lerp(flower.size, 0, 0.05)
		}
	}
	
	// mouseX是需要被追蹤的，因此不能拿到draw()外面
	bee.x = mouseX
	bee.y = mouseY
	drawBee(bee)
	
}