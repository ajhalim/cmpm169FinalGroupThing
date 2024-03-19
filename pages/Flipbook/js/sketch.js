// let insultSpoken = false;
// const grammarObj = {
//     "origin": ["You are one #adjective# #noun# that likes to #verb#!"],
//     "noun": ["knucklehead",
//              "buffoon",
//              "blockhead",
//              "nincompoop",
//              "lummox",
//              "dingbat",
//              "doofus",
//              "halfwit",
//              "goofball",
//              "nitwit",
//              "bozo",
//              "dunderhead",
//              "numskull",
//              "dolt",
//              "bonehead",
//              "clod",
//              "twit",
//              "simpleton",
//              "dork",
//              "swine",
//              "loser",
//              "idiot",
//              "imbecile"],
//     "adjective": ["dimwitted",
//                   "bumbling",
//                   "clueless",
//                   "bungling",
//                   "dense",
//                   "airheaded",
//                   "inept",
//                   "daft",
//                   "ridiculous",
//                   "absurd",
//                   "witless",
//                   "unintelligent",
//                   "foolish",
//                   "blockheaded",
//                   "knuckleheaded",
//                   "moronic",
//                   "silly",
//                   "dopey",
//                   "ignorant",
//                   "brain-dead",
//                   "smelly",
//                   "stinky",
//                   "ugly",
//                   "unwanted",
//                   "useless"
//                  ],
//     "verb": ["blunder",
//              "flub",
//              "fumble",
//              "mess up",
//              "screw up",
//              "muddle",
//              "bungle",
//              "mess up",
//              "goof",
//              "louse up",
//              "mismanage",
//              "muck up",
//             "stumble"]
//   };
// let narr_i = 1;
// let narr = ["knucklehead",
//              "buffoon",
//              "blockhead",
//              "nincompoop",
//              "lummox",
//              "dingbat",
//              "doofus",
//              "halfwit",
//              "goofball",
//              "nitwit",
//              "bozo",
//              "dunderhead",
//              "numskull",
//              "dolt",
//              "bonehead",
//              "clod",
//              "twit",
//              "simpleton",
//              "dork",
//              "swine",
//              "loser",
//              "idiot",
//              "imbecile"];
// let aarr_i = 1;
// let aarr = ["dimwitted",
//                   "bumbling",
//                   "clueless",
//                   "bungling",
//                   "dense",
//                   "airheaded",
//                   "inept",
//                   "daft",
//                   "ridiculous",
//                   "absurd",
//                   "witless",
//                   "unintelligent",
//                   "foolish",
//                   "blockheaded",
//                   "knuckleheaded",
//                   "moronic",
//                   "silly",
//                   "dopey",
//                   "ignorant",
//                   "brain-dead",
//                   "smelly",
//                   "stinky",
//                   "ugly",
//                   "unwanted",
//                   "useless"];
// let varr_i = 1;
// let varr = ["blunder",
//              "flub",
//              "fumble",
//              "mess up",
//              "screw up",
//              "muddle",
//              "bungle",
//              "mess up",
//              "goof",
//              "louse up",
//              "mismanage",
//              "muck up",
//             "stumble"];

// let targetNoun = "";
// let targetadjective = "";
// let targetverb = "";
// //noun slot
// let SLOW_DELAY = 400;
// let FAST_DELAY = 100;
// let DELAY_INCREMENT = 50;
// let delay = SLOW_DELAY;
// let nextTime;
// let state = 0;

// //adjective slot
// let SLOW_DELAY2 = 400;
// let FAST_DELAY2 = 100;
// let DELAY_INCREMENT2 = 50;
// let delay2 = SLOW_DELAY2;
// let nextTime2;
// let state2 = 1;

// //verb slot
// let SLOW_DELAY3 = 600;
// let FAST_DELAY3 = 100;
// let DELAY_INCREMENT3 = 50;
// let delay3 = SLOW_DELAY3;
// let nextTime3;
// let state3= 1;
// // state 0, stop
// // state 1, play
// // state 2, to stop
// let grammar;
// let insult;
// let talker = new p5.Speech();
// let dingSound;
// function preload() {
//     ding = loadSound('https://saliao.github.io/p5.js-files/ding.mp3');
// }
// // sketch.js - purpose and description here
// // Author: Your Name
// // Date:

// // Here is how you might set up an OOP p5.js project
// // Note that p5.js looks for a file called sketch.js

// // Constants - User-servicable parts
// // In a longer project I like to put these in a separate file
// const VALUE1 = 1;
// const VALUE2 = 2;

// // Globals
// let myInstance;
// let canvasContainer;

// class MyClass {
//     constructor(param1, param2) {
//         this.property1 = param1;
//         this.property2 = param2;
//     }

//     myMethod() {
//         // code to run when method is called
//     }
// }

// let button;
// function setup() {
//   canvasContainer = $("#canvas-container");
//   let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
//   canvas.parent("canvas-container");
//   // resize canvas is the page is resized
//   $(window).resize(function() {
//     console.log("Resizing...");
//     resizeCanvas(canvasContainer.width(), canvasContainer.height());
// });
// // create an instance of the class
// myInstance = new MyClass(VALUE1, VALUE2);

// var centerHorz = windowWidth / 2;
// var centerVert = windowHeight / 2;
//   grammar = createTraceryGrammar();
//   insult = flattenGrammar();
    
    
//   createCanvas(800, 800);
//   textAlign(CENTER, CENTER);
//   button = createButton('insult me');
//   button.position(width*2-50-width, height*2-height/2);

//   // Use the button to change the background color.
//   button.mousePressed(() => {
//     talker.stop();
//     generate();
//     button.hide();
    
//   });
//   //nextTime = millis() + delay;
  
 
// }
// function draw() {
//   background(32);
//   if (millis() > nextTime && state != 0) {
//     if (state == 1) {
//       if (delay > FAST_DELAY) {
//         delay -= DELAY_INCREMENT;
//       }
//     } else if (state == 2) {
//       delay += DELAY_INCREMENT;
//       if (delay > SLOW_DELAY * 2) {
//         state = 0;
//       }
//     }
//     narr_i++; // the index of next pattern
//     narr_i %= narr.length; // the index goes to front when it reaches the end https://processing.org/reference/modulo.html
    
//     // Check if the current word matches the target word
//     if (narr[narr_i] === targetNoun) {
//       state = 0; // Stop the slot machine
//     }
    
//     nextTime = millis() + delay;
//   }

//   //noun slot
//   if (narr[narr_i] === targetNoun&&state===0) {
//     fill("yellow"); // Change color to highlight
//   } else {
//     fill("white");
//   }
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   noStroke()
  

//   // current pattern
//   text(narr[narr_i], width / 2, height / 2-300);

//   // previous pattern
//   fill("white")
//   let prev_i = (narr_i + narr.length - 1) % narr.length;
//   text(narr[prev_i], width / 2, height / 2 - 330);
  
//   // next pattern
//   fill("white")
//   let next_i = (narr_i + 1) % narr.length;
//   text(narr[next_i], width / 2, height / 2 -270);

//   // draw a frame to cover parts of the previous pattern and the next pattern
//   rectMode(CENTER);
//   strokeWeight(20);
//   stroke(64);
//   noFill();
//   rect(width / 2, height / 2-300 , 300, 100);
//   //adjective slot
//   if (millis() > nextTime2 && state2 != 0) {
//     if (state2 == 1) {
//       if (delay2 > FAST_DELAY2) {
//         delay2 -= DELAY_INCREMENT2;
//       }
//     } else if (state2 == 2) {
//       delay2 += DELAY_INCREMENT2;
//       if (delay2 > SLOW_DELAY2 * 2) {
//         state2 = 0;
//       }
//     }
//     aarr_i++; // the index of next pattern
//     aarr_i %= aarr.length; // the index goes to front when it reaches the end https://processing.org/reference/modulo.html
    
//     // Check if the current word matches the target word
//     if (aarr[aarr_i] === targetadjective) {
//       state2 = 0; // Stop the slot machine
//     }
    
//     nextTime = millis() + delay;
    
//   }
//    textAlign(CENTER, CENTER);
//   textSize(32);
//   noStroke()
  

//   // current pattern
//   if (narr[narr_i] === targetNoun&&state===0) {
//     fill("yellow"); // Change color to highlight
//   } else {
//     fill("white");
//   }
//   text(aarr[aarr_i], width / 2-300, height / 2-300);

//   // previous pattern
//   fill("white")
//   let prev2_i = (aarr_i + aarr.length - 1) % aarr.length;
//   text(aarr[prev2_i], width / 2-300, height / 2 - 330);

//   // next pattern
//   fill("white")
//   let next2_i = (aarr_i + 1) % aarr.length;
//   text(aarr[next2_i], width / 2-300, height / 2 -270);

//   // draw a frame to cover parts of the previous pattern and the next pattern
//   rectMode(CENTER);
//   strokeWeight(20);
//   stroke(64);
//   noFill();
//   rect(width / 2-300, height / 2 -300, 300, 100);
//   //verb slot
//   if (millis() > nextTime3 && state3 != 0) {
//     if (state3 == 1) {
//       if (delay3 > FAST_DELAY3) {
//         delay3 -= DELAY_INCREMENT3;
//       }
//     } else if (state3 == 2) {
//       delay3 += DELAY_INCREMENT2;
//       if (delay3 > SLOW_DELAY3 * 2) {
//         state3 = 0;
//       }
//     }
//     varr_i++; // the index of next pattern
//     varr_i %= varr.length; // the index goes to front when it reaches the end https://processing.org/reference/modulo.html
    
//     // Check if the current word matches the target word
//     if (varr[varr_i] === targetverb) {
//       state3 = 0; // Stop the slot machine
//     }
    
//     nextTime3 = millis() + delay3;
//   }
//    textAlign(CENTER, CENTER);
//   textSize(32);
//   noStroke()
//   //fill("white")
  
//   // current pattern
//   if (narr[narr_i] === targetNoun&&state3===0) {
//     fill("yellow"); // Change color to highlight
//   } else {
//     fill("white");
//   }
//   text(varr[varr_i], width / 2+300, height / 2-300);

//   // previous pattern
//   fill("white")
//   let prev3_i = (varr_i + varr.length - 1) % varr.length;
//   text(varr[prev3_i], width / 2+300, height / 2 - 330);

//   // next pattern
//   fill("white")
//   let next3_i = (varr_i + 1) % varr.length;
//   text(varr[next3_i], width / 2+300, height / 2 - 270);

//   // draw a frame to cover parts of the previous pattern and the next pattern
//   rectMode(CENTER);
//   strokeWeight(20);
//   stroke(64);
  
//   noFill();
//   rect(width / 2+300, height/2-300 , 300, 100);
//   stroke(100); // Set the stroke color to black
//   strokeWeight(1); // Set the stroke weight to 1 pixel
//   line(0, 100, 800, 100); // Draw a line from (100, 200) to (300, 200)
//   fill(255);
//   pasethroughInsult();
//   if(state==0&&state2==0&&state3==0){
    
//     text(insult, width/2, 350);
//     if(!insultSpoken){
      
//       ding.play();
//       insultSpoken = true;
//      talker.speak(insult);
      
//       button.show();
         
//     }
  
//   }
//   else{
//     text("You are..", width/2, 350);
    
//   }
  

  
// }

// function generate() {
//   if (state == 0||state2 == 0||state3==0) {
//     // if it was stopped
//     //delay = SLOW_DELAY;
    
//     nextTime = millis() + delay;
    
//     state = 1; // play
//     //adjective
//    // delay2 = SLOW_DELAY2;
//     nextTime2 = millis() + delay2;
//     state2 = 1; // play
    
//     //verb
//     //delay3 = SLOW_DELAY3;
//     nextTime3 = millis() + delay3;
//     state3 = 1; // play
//     insultSpoken = false;
    
//   }
//   insult = flattenGrammar();
  
  
// }
// function createTraceryGrammar() {
//   // this is not needed if we are not doing node.js
//   // const tracery = require('tracery-grammar');

//   return tracery.createGrammar(grammarObj);
// }

// function flattenGrammar() {
//   return grammar.flatten("#origin#");
// }
// function pasethroughInsult() {
//     // Assuming insult is in the format: "You are one [adjective] [noun] that likes to [verb]"

//     // Split the insult string into words
//     let words = insult.split(' ');

//     // Find the adjective and noun
//     let targetAdjective = '';
//     let TargetNoun = '';
//     for (let i = 0; i < words.length; i++) {
//         // Check if the word is an adjective
//         if (grammarObj.adjective.includes(words[i])) {
//             targetAdjective = words[i];
//             // Check if the next word is the noun
//             if (i < words.length - 1) {
//                 TargetNoun = words[i + 1];
//             }
//             break;
//         }

//     }

//     // Find the verb
//     let verbIndex = insult.indexOf('that likes to') + 'that likes to'.length;
//     let targetVerb = insult.substring(verbIndex, insult.length - 1).trim(); // Exclude the exclamation mark

//       targetadjective = targetAdjective;
//       targetNoun = TargetNoun;
//       targetadjective = targetAdjective;
//       targetverb = targetVerb;
// }
// function display(){
//   //talker.stop();
//     talker.speak(insult);
// }