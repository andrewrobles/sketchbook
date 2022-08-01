// By Roni Kaufman
// https://ronikaufman.github.io
// https://twitter.com/KaufmanRoni

let s = 16;
let density = 40;
let maxHeight;
let N_FRAMES = 1;

function setup() {
  createCanvas(512, 512);
  noStroke();
}

function draw() {
  let t = TAU*frameCount/N_FRAMES;
  let yStep = height/8;
  maxHeight = yStep - 2*s;
  
  blendMode(BLEND);
  background(0);
  
  blendMode(ADD);
  for (let c of [[255, 0, 0], [0, 255, 0], [0, 0, 255]]) {
    for (let y = 0; y < height; y += yStep) {
      fill(c);
      drawLinesDown(t, y);
      drawLinesUp(t+PI, y+yStep);
      t *= -1;
    }
    t += 0.2;
  }
  
  blendMode(DIFFERENCE);
  fill(255);
  for (let y = 0; y < height; y += 2*yStep) {
    rect(0, y, width, yStep);
  }
}

function drawLinesUp(t, y0) {
  for (let x = 0; x < width; x += 2*s) {
    let h = map(cos(x/density+t), -1, 1, 0, maxHeight);
    let y = y0 - h;
    rect(x, y, s, h);
    arc(x+s/2, y, s, s, PI, TAU);
  }
}

function drawLinesDown(t, y0) {
  for (let x = s; x < width; x += 2*s) {
    let h = map(cos(x/density+t), -1, 1, 0, maxHeight);
    let y = y0 + h;
    rect(x, y0, s, h);
    arc(x+s/2, y, s, s, 0, PI);
  }
}