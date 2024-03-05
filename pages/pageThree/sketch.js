
function setup() {
    createCanvas(windowWidth, windowHeight);
    // /strokeCap(SQUARE);
  }
  
  function draw() {
    background(mouseY, mouseX, mouseY/2);
    translate(windowWidth / 2, windowHeight / 2);

    var thing = noise(mouseY * 1.5)
  
    var circleResolution = int(map(mouseY, 0, height, 2, 80));
    var radius = mouseX - width / 2;
    var angle = (TAU / circleResolution) * thing                                                                                                                                                                            ;
  
    fill(mouseX, mouseY, mouseX/2);
    
    strokeWeight(thing / 200);
  
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      rect(0, 0, x, y);
    }
  }
  
