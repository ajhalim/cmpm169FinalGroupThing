// By takawo
// https://openprocessing.org/user/6533?view=sketches&o=48
let d = 500;
let sqw;
let palette;
let gs = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  sqw = sqrt(sq(width) + sq(height)) * sqrt(2);
  palette = shuffle(random(colorScheme).colors.concat());
  for (let i = 0; i < palette.length; i++) {
    for (let j = i + 1; j < palette.length; j++) {
      for (let k = 0; k < 3; k++) {
        let g = createGradientGraphics(5, 5, k);
        gs.push(g);
      }
    }
  }
  ortho(-width / 2, width / 2, -height / 2, height / 2, -5000, 5000);
}

function draw() {
  background(0, 0, 5);
  rotateX(-45);
  // scale(map(sin(frameCount/3),-1,1,1,1));
  rotateY(frameCount / 5 + 45 + (int(random(4)) * 360) / 4);
  lights();
  ambientLight(0, 0, 100);
  directionalLight(color(0, 0, 40), 0, 0, -1);
  directionalLight(color(0, 0, 40), 1, 0, 0);
  directionalLight(color(0, 0, 40), 0, 1, 0);
  directionalLight(color(0, 0, 40), 0, 0, 1);
  directionalLight(color(0, 0, 40), -1, 0, 0);
  directionalLight(color(0, 0, 40), 0, -1, 0);
  lights();

  orbitControl();

  randomSeed(0);
  recursiveRect(-sqw / 2, -sqw / 2, sqw, sqw, 4);
}

function recursiveRect(x, y, w, h, depth) {
  if (depth < 0) return;
  let n = width / 2 + x + (height / 2 + y) * width;
  // let t = (frameCount/500+n / (width * height))%1;
  let rsx = random(1000);
  let rsy = random(1000);
  let n1 = noise(x / 1500 + rsx, frameCount / 500);
  let n2 = noise(y / 1500 + rsy, frameCount / 500);
  let nw = n1 * w;
  let nh = n2 * h;
  let t = n1 * n2;

  if (depth == 0) {
    drawRect(x, y, nw, nh, t);
    drawRect(x + nw, y, w - nw, nh, t);
    drawRect(x, y + nh, nw, h - nh, t);
    drawRect(x + nw, y + nh, w - nw, h - nh, t);
  } else {
    recursiveRect(x, y, nw, nh, depth - 1);
    recursiveRect(x + nw, y, w - nw, nh, depth - 1);
    recursiveRect(x, y + nh, nw, h - nh, depth - 1);
    recursiveRect(x + nw, y + nh, w - nw, h - nh, depth - 1);
  }
}

function drawRect(x, y, w, h, t) {
  let n1 = noise(x / 50, frameCount / 300);
  let n2 = noise(y / 50, frameCount / 300);

  // let nd = (sin(frameCount+(width/2+x+(height/2+y)*width)*5/(width*height))/2+0.5) * d*3;
  let n =
    ((frameCount * 10 + sqw / 2 + x + w / 2 + (sqw / 2 + y * sqw + h / 2)) /
      (width * height)) %
    1;
  let nd = (sin(frameCount + n * 360) / 2 + 0.5) * d;
  push();
  translate(x + w / 2, (-nd * t) / 2, y + h / 2);
  let scl = max((w - 20) / w, 0);
  scale((random() > 0.5 ? -1 : 1) * scl, 1, (random() > 0.5 ? -1 : 1) * scl);

  texture(random(gs));
  noStroke();
  box(w, max(1, nd * t), h);
  pop();
}

function createGradientGraphics(w, h, num) {
  let g = createGraphics(w, h);
  let img = createImage(g.width, g.height);
  shuffle(palette, true);
  setGradientGraphics(palette[0], palette[1], palette[2], g, num);
  img.copy(g, 0, 0, g.width, g.height, 0, 0, g.width, g.height);
  g.remove();
  return img;
}
function setGradientGraphics(c1, c2, c3, target, num) {
  let gradient;
  switch (num) {
    case 0:
      gradient = target.drawingContext.createLinearGradient(
        0,
        0,
        0,
        target.height
      );
      break;
    case 1:
      gradient = target.drawingContext.createLinearGradient(
        0,
        0,
        target.width,
        0
      );
      break;
    case 2:
      gradient = target.drawingContext.createLinearGradient(
        0,
        0,
        target.width,
        target.height
      );
      break;
  }
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  // gradient.addColorStop(1 / 2, c3);
  target.drawingContext.fillStyle = gradient;
  target.noStroke();
  target.rect(0, 0, target.width, target.height);
}

let colorScheme = [
  {
    name: "Benedictus",
    colors: ["#F27EA9", "#366CD9", "#5EADF2", "#636E73", "#F2E6D8"],
  },
  {
    name: "Cross",
    colors: ["#D962AF", "#58A6A6", "#8AA66F", "#F29F05", "#F26D6D"],
  },
  {
    name: "Demuth",
    colors: ["#222940", "#D98E04", "#F2A950", "#BF3E21", "#F2F2F2"],
  },
  {
    name: "Hiroshige",
    colors: ["#1B618C", "#55CCD9", "#F2BC57", "#F2DAAC", "#F24949"],
  },
  {
    name: "Hokusai",
    colors: ["#074A59", "#F2C166", "#F28241", "#F26B5E", "#F2F2F2"],
  },
  {
    name: "Hokusai Blue",
    colors: ["#023059", "#459DBF", "#87BF60", "#D9D16A", "#F2F2F2"],
  },
  {
    name: "Java",
    colors: ["#632973", "#02734A", "#F25C05", "#F29188", "#F2E0DF"],
  },
  {
    name: "Kandinsky",
    colors: ["#8D95A6", "#0A7360", "#F28705", "#D98825", "#F2F2F2"],
  },
  {
    name: "Monet",
    colors: ["#4146A6", "#063573", "#5EC8F2", "#8C4E03", "#D98A29"],
  },
  {
    name: "Nizami",
    colors: ["#034AA6", "#72B6F2", "#73BFB1", "#F2A30F", "#F26F63"],
  },
  {
    name: "Renoir",
    colors: ["#303E8C", "#F2AE2E", "#F28705", "#D91414", "#F2F2F2"],
  },
  {
    name: "VanGogh",
    colors: ["#424D8C", "#84A9BF", "#C1D9CE", "#F2B705", "#F25C05"],
  },
  {
    name: "Mono",
    colors: ["#D9D7D8", "#3B5159", "#5D848C", "#7CA2A6", "#262321"],
  },
  {
    name: "RiverSide",
    colors: ["#906FA6", "#025951", "#252625", "#D99191", "#F2F2F2"],
  },
];
