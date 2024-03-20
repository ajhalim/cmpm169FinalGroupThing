class particle {

	constructor(x, y) {
		this.pos = createVector(x, y);
		this.vel = createVector(random(10) - 5, random(10) - 5);
	}

	update() {
		this.pos = this.pos.add(this.vel);

		this.pos.x = this.pos.x > width ? 0 : this.pos.x;
		this.pos.y = this.pos.y > height ? 0 : this.pos.y;

		this.pos.x = this.pos.x < 0 ? width : this.pos.x;
		this.pos.y = this.pos.y < 0 ? height : this.pos.y;
	}

}