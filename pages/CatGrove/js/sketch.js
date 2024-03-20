let song;
let duration = 108;
let cat;
let tiles = [];
let lastColorChange = 0;
let colorChangeInterval = 1000;
let skin, skin2, bobskin1,bobskin2,tabbyskin1,tabbyskin2,purrlskin1,purrlskin2,punchyskin1,punchyskin2,mitzyskin1,mitzyskin2,moeskin1,moeskin2,kikiskin1,kikiskin2,tangyskin1,tangyskin2,oliviaskin1,oliviaskin2,moniqueskin1,moniqueskin2, kabukiskin1, kabukiskin2,rosieskin1,rosieskin2; // Define skins
let bobs = []; // Array to store bob characters
let skinOptions = []; // Array to store skin options
let yOffset = 0;
let ySpeed = 0.25;
let lastBounce = 0;
let bounceInterval = 1000; 
let pointLights = []; // Array to store point lights


function preload() {
    song = loadSound('https://saliao.github.io/p5.js-files/Parov%20Stelar%20-%20Catgroove.mp3');
   bobskin1 = loadImage('https://saliao.github.io/p5.js-files/bobsmile1.jpg');
    bobskin2 = loadImage('https://saliao.github.io/p5.js-files/bobsmile2.jpg');
tabbyskin1 = loadImage('https://saliao.github.io/p5.js-files/tabbysmile1.jpg');
    tabbyskin2 = loadImage('https://saliao.github.io/p5.js-files/tabbysmile2.jpg');
  purrlskin1 = loadImage('https://saliao.github.io/p5.js-files/purrlsmile1.jpg');
  purrlskin2 = loadImage('https://saliao.github.io/p5.js-files/purrlsmile2.jpg');
  punchyskin1 = loadImage('https://saliao.github.io/p5.js-files/punchysmile1.jpg');
  punchyskin2 = loadImage('https://saliao.github.io/p5.js-files/punchysmile2.jpg');
  mitzyskin1 = loadImage('https://saliao.github.io/p5.js-files/mitzismile1.jpg');
   mitzyskin2 = loadImage('https://saliao.github.io/p5.js-files/mitzismile2.jpg');
  moeskin1 = loadImage('https://saliao.github.io/p5.js-files/moesmile1.jpg');
   moeskin2 = loadImage('https://saliao.github.io/p5.js-files/moesmile2.jpg');
  kikiskin1 = loadImage('https://saliao.github.io/p5.js-files/kikismile1.jpg');
   kikiskin2 = loadImage('https://saliao.github.io/p5.js-files/kikismile2.jpg');
  tangyskin1 = loadImage('https://saliao.github.io/p5.js-files/tangysmile1.jpg');
   tangyskin2 = loadImage('https://saliao.github.io/p5.js-files/tangysmile2.jpg');
  oliviaskin1 = loadImage('https://saliao.github.io/p5.js-files/oliviasmile1.jpg');
  oliviaskin2 = loadImage('https://saliao.github.io/p5.js-files/oliviasmile2.jpg');
  moniqueskin1 = loadImage('https://saliao.github.io/p5.js-files/moniquesmile1.jpg');
  moniqueskin2 = loadImage('https://saliao.github.io/p5.js-files/moniquesmile2.jpg');
  kabukiskin1 = loadImage('https://saliao.github.io/p5.js-files/kabukismile1.jpg');
  kabukiskin2 = loadImage('https://saliao.github.io/p5.js-files/kabukismile2.jpg');
  rosieskin1 = loadImage('https://saliao.github.io/p5.js-files/rosiesmile1.jpg');
  rosieskin2 = loadImage('https://saliao.github.io/p5.js-files/rosiesmile2.jpg');
  cat = loadModel('https://saliao.github.io/p5.js-files/KIDCAT.obj', true);
  skinOptions = [
        [bobskin1, bobskin2],
        [tabbyskin1, tabbyskin2],
        [purrlskin1, purrlskin2],
        [punchyskin1, punchyskin2],
        [mitzyskin1, mitzyskin2],
        [moeskin1, moeskin2],
        [kikiskin1, kikiskin2],
        [tangyskin1, tangyskin2],
        [oliviaskin1, oliviaskin2],
        [moniqueskin1, moniqueskin2],
        [kabukiskin1, kabukiskin2],
        [rosieskin1, rosieskin2]
    ];
}

function setup() {
    createCanvas(800, 800, WEBGL);
  song.play();
for (let i = 0; i < 5; i++) {
        pointLights.push({
            x: random(-600, 400),
            y: random(-100, 100),
            z: random(-600, 400),
            color: color(random(255), random(255), random(255)),
            lastColorChange: 0 // Initialize lastColorChange property
        });
    }
    
    ambientLight(100);
// Making tile colors to choose from
let rainbowColors = [
    [255, 0, 0],     // Red
    [255, 127, 0],   // Orange
    [255, 255, 0],   // Yellow
    [0, 255, 0],     // Green
    [0, 255, 255],   // Cyan
    [0, 0, 255],     // Blue
    [128, 0, 128],   // Purple
    [148, 0, 211]  // Violet
];

// picks tiles base color
for (let i = -4; i < 10; i++) {
    for (let j = -5; j < 10; j++) {
        let x = map(i, 0, 4, -600, 250);
        let z = map(j, 0, 4, -600, 250);
        let randomColorIndex = floor(random(rainbowColors.length));
        let initialColor = color(rainbowColors[randomColorIndex]); // convert RGB values to color object
        tiles.push({ 
            x: x, 
            z: z, 
            color: color(100), // dark grey means off
            initialColor: initialColor, // stores the initial color
            isLit: false // initially not lit up
        });
        // pointLights.push({
        //     x: x,
        //     y: 10,
        //     z: z,
        //     color: color(100,100,100),
        //     lastColorChange: 0 // Initialize lastColorChange property
        // });
    }
  
}


   
    let availableSkinIndexes = Array.from(Array(skinOptions.length).keys());
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            let x = map(i, 0, 3, -600, 400);
            let z = map(j, 0, 3, -600, 400);

            // selects random index of available skins
            let randomIndex = floor(random(availableSkinIndexes.length));
            let selectedSkinIndex = availableSkinIndexes[randomIndex];
            availableSkinIndexes.splice(randomIndex, 1);  

            let bobCharacter = {
                x: x,
                y: 0,
                z: z,
                skinIndex: selectedSkinIndex // uses selected skin index
            };

            bobs.push(bobCharacter);
        }
    }
  
}

let orbitalControlEnabled = false; 

function mouseClicked() {
    // Toggle between orbital control and regular camera movement
    orbitalControlEnabled = !orbitalControlEnabled;
  camX = map(0, -1, 1, -800, 900);
      camY = map(0, -1, 1, -1000, 0);
}

function draw() {
    noStroke();
    background(0);
   if (song.isPlaying() && song.currentTime() > duration) {
    // stop the song
    song.stop();
    // rewind the song to the beginning
    song.jump(0);
    // start playing again
    song.play();
  }
    if (orbitalControlEnabled) {
        orbitControl(); 
    } else {
    
        RegularCameraMovement();
    }
  // let camX = map(sin(frameCount * 0.005), -1, 1, -800, 900);
  //   let camY = map(sin(frameCount * 0.010), -1, 1, -1000, 0);
  //   camera(camX, camY, 800, 0, 0, 0, 0, 1, 0);
  
  updateLights();

    // turning tiles on and off
    if (millis() - lastColorChange > colorChangeInterval) {
        lastColorChange = millis();

        // chooses a random subset of tiles to turn on
        for (let i = 0; i < 200; i++) { 
            let index = floor(random(tiles.length));
            tiles[index].isLit = !tiles[index].isLit;

            // tile is lit, use its initial color; otherwise, use dark grey
            tiles[index].color = tiles[index].isLit ? tiles[index].initialColor : color(100);
        }
    }
  
    // it it time to bounce?
    if (millis() - lastBounce > bounceInterval) {
        lastBounce = millis();
        yOffset = 3; // Set yOffset to maximum for bouncing
    }
  
    for (let bob of bobs) {
        let currentSkin = skinOptions[bob.skinIndex][Math.floor(millis() / 1000) % 2];
        push();
        translate(bob.x, bob.y + yOffset, bob.z); 
        rotateX(PI);
        rotateY(PI);
        texture(currentSkin);
      // add pointing light above each bob
        pointLight(250, 250, 250, bob.x, bob.y + 200, bob.z); 
        model(cat)
      
        pop();
    }
  

    // Set up directional light
    directionalLight(100, 100, 100, 0, -1, 0);

    // turning tiles on and off
    if (millis() - lastColorChange > colorChangeInterval) {
        lastColorChange = millis();

        // chooses a random subset of tiles to turn on
        for (let i = 0; i < 200; i++) { 
            let index = floor(random(tiles.length));
            tiles[index].isLit = !tiles[index].isLit;

            // tile is lit, use its initial color; otherwise, use dark grey
            tiles[index].color = tiles[index].isLit ? tiles[index].initialColor : color(100);
        }
    }
  
    // Draw the tiles
    for (let tile of tiles) {
        push();
        translate(tile.x, 100, tile.z);
        rotateX(HALF_PI);  

        // Adjust material properties for brightness
        if (tile.isLit) {
            
            emissiveMaterial(tile.initialColor); // initial color for emissive effect
          pointLight(tile.initialColor, tile.x, 0, tile.z);
        } else {
            ambientMaterial(50); // dark ambient material
            emissiveMaterial(0); // no emissive effect
        }
      
        plane(200);
        pop();
    }

    // change yoffset for bounce
    if (yOffset > 0) {
        yOffset -= ySpeed; 
    }
  
  // if the song exceeds 108 seconds play from the beggining again
  
  
}

function updateLights() {
  
    ambientLight(80);
  // Move and set spotlights
    for (let light of pointLights) {
        // Move the light randomly
        light.x += random(-1, 1);
        light.z += random(-1, 1);

        // light stays within bounds
        light.x = constrain(light.x, -600, 400);
        light.z = constrain(light.z, -600, 400);

        // change light color every second
        if (millis() - light.lastColorChange > 1000) {
            light.color = color(random(255), random(255), random(255));
            light.lastColorChange = millis();
        }
       
      pointLight(light.color, light.x, -20, light.z);
        spotLight(light.color, light.x, 100, light.z, 0, -1, 0, PI / 2, 1);
    }
}
let camX;
let camY;
function RegularCameraMovement() {
      camX = map(sin(frameCount * 0.005), -1, 1, -800, 900);
      camY = map(sin(frameCount * 0.010), -1, 1, -1000, 0);
     camera(camX, camY, 800, 0, 0, 0, 0, 1, 0);
}






