H=200;
f=0;
w=800;

var l;

function setup() {
  createCanvas(w, w);
  stroke(w);
    
}

function draw() {   
  //background(0,0,(frameCount%50+100));
  var s=0;
  for (y=-H; y<w+H; y+=d) {
    r=0;
    beginShape();
    for (x=-H; x<w; x+=d) {
      n=noise(r/69, s/25, f*0.004);
      fill(d=10, 60+n*H, w);
      vertex(x, y+(n-0.7)*3*H);
      r++;
    }
    endShape();
    s++;
  }
  f++;
var x=mouseX;
var y=mouseY;
  //fish
  //left facing fish
  if (x>pmouseX && y>200 || x==pmouseX && y>200 && l==true) {
    fill(243, 134, 48);
    triangle(x-125, y+50, x-125, y-50, x-75, y);
    ellipse(x-50, y, 100, 75);
    fill(225);
    ellipse(x-25, y-10, 20, 20);
    fill(0);
    ellipse(x-25, y-10, 10, 10);
    l=true;
  }

  //right facing fish
  if (x<pmouseX && y>200|| x==pmouseX && y>200 && l==false) { 
    fill(243, 134, 48);
    triangle(x+125, y+50, x+125, y-50, x+75, y);
    ellipse(x+50, y, 100, 75);
    fill(225);
    ellipse(x+25, y-10, 20, 20);
    fill(0);
    ellipse(x+25, y-10, 10, 10);
    l=false;
  }

  //fish end

  //bubble
  //animated bubbles in for loop
  //make it so the fish dies when its out of the water(calculate x for the eye, probs cry in the process)
  if (x>pmouseX && y<200|| x==pmouseX && y<200 && l==true) {
    fill(243, 134, 48);
    triangle(x-125, y+50, x-125, y-50, x-75, y);
    ellipse(x-50, y, 100, 75);
    stroke(0);
    strokeWeight(3);
    line(x-35, y, x-15, y+20);
    line(x-35, y+20, x-15, y);
    l=true;
  }

  if (x<pmouseX && y<200 || x==pmouseX && y<200 && l==false) {
    fill(243, 134, 48);
    triangle(x+125, y+50, x+125, y-50, x+75, y);
    ellipse(x+50, y, 100, 75);
    stroke(0);
    strokeWeight(3);
    line(x+35, y, x+15, y+20);
    line(x+35, y+20, x+15, y);
    l=false;
  } 
  //rocks
  //tank
  noStroke();
  fill(167, 219, 216, 75);
  rect(0, 0, 800, 800);

}