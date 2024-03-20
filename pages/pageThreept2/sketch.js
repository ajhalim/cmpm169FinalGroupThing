let MARGIN = 15 ;
let CITY_SIZE = 1600;

class Road {
  constructor(level, position, angle) {
    this.level = level;
    this.position = position.copy();
    this.angle = angle; 
    this.building = true;
  }
  update() {
    if (!this.building) {
      return;
    }
    this.position.add(cos(this.angle)*this.level, sin(this.angle)*this.level);
    if (red(get(this.position.x, this.position.y)) <= 200) {
      this.building = false;
    }
    if (this.position.x > width - MARGIN || 
        this.position.y > height - MARGIN || 
        this.position.x < MARGIN || 
        this.position.y < MARGIN) {
      this.building = false;
    }
    if (random() > 0.99) {
      this.angle += random([-PI/4, -PI/8, PI/8, PI/4]);
    }
    if (random() > 0.99 && this.level == 5) {
      roads.push(new Road(this.level, this.position, this.angle + random([PI/2, -PI/2]) + random(-0.01,0.01)));
    }
    if (random() > 0.7 && this.level == 5) {
      roads.push(new Road(this.level-2, this.position, this.angle + random([PI/2, -PI/2]) + random(-0.01,0.01)));
    }
    if (random() > 0.8 && this.level == 3) {
      roads.push(new Road(this.level-2, this.position, this.angle + random([PI/2, -PI/2])));
    }
    if (random() > 0.98 && this.level == 3) {
      roads.push(new Road(this.level, this.position, this.angle + random([PI/2, -PI/2])));
    }
    if (random() > 0.995 && this.level == 1) {
      roads.push(new Road(this.level, this.position, this.angle + random([PI/2, -PI/2])));
    }
  }
  draw() {
    if (!this.building) {
      return;
    }
    strokeWeight(this.level);
    stroke(40);
			drawingContext.shadowColor = color(255, 204, 0);
	 // drawingContext.shadowBlur = 30;
	 drawingContext.shadowOffsetX = 1;
	 drawingContext.shadowOffsetY = 1;
    point(this.position.x, this.position.y);
    // point(this.position.x, this.position.y);
  }
}

let roads = [];

function setup() {
  createCanvas(CITY_SIZE * 0.7 + MARGIN*2, CITY_SIZE + MARGIN*2);
  
  roads = [];
  for (let i = 0; i < ceil(random(1, 5)); i++) {
    roads.push(new Road(5, createVector(random(width/2, width/2), random(width/2, width/2)), random(TWO_PI)));
  }
  background(255);
  stroke(100);
	
	
	console.log(roads.length)
}

function draw() {
  roads.forEach(road => { road.draw(); road.update(); });

	if(roads[0].level < 5 ){
		
		
	fill(0);
	//rect(0,height-200,width,200);
	noLoop();
	}
	
}

function mousePressed() {
  roads = [];
  for (let i = 0; i < ceil(random(1, 5)); i++) {
    roads.push(new Road(5, createVector(random(width), random(width)), random(TWO_PI)));
  }
  background(255);
}