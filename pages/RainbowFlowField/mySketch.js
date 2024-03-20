//Richard Bourne
//https://openprocessing.org/sketch/1244480
const stars=[]
const blackholes=[]
let timer=0

setup=()=>{
  createCanvas(1112,834)
  background(0)
  
  for(let i=2e3;i--;){
    stars[i]={x:cos(i)*300,y:sin(i)*300}
	}
  for(let i=4;i--;){
    blackholes[i]={x:random(-250,250),y:random(-250,250)}
  }
}

draw=()=> {
  strokeWeight(2)
  colorMode(HSB)
  translate(width/2,height/2)
  timer+=.003

  for(const [index,star] of stars.entries()){
    let direction=0
      for(const blackhole of blackholes)
        direction+=atan2(blackhole.y-star.y,blackhole.x-star.x)*2
    stroke(index%360,360,360)
    line(star.x,star.y,star.x+=cos(direction)*5,star.y+=sin(direction)*5)
  }
}

let lapse=0;mousePressed=()=>{if (millis()-lapse>400){save('pix.jpg');lapse =millis();}}
