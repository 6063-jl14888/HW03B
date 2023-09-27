let cDiam;

let xOffset = 50;
let xSpacing = 100;

let yOffset = 50;
let ySpacing = 100;

let c2Diam = 10;

let x2Offset = 50;
let x2Spacing = 50;

let y2Offset = 50;
let y2Spacing = 50;

let c3Diam = 25;

let x3Offset = 100;
let x3Spacing = 100;

let y3Offset = 100;
let y3Spacing = 100;

let r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(50, 80)
  cDiam = random(25, 70)

}

function draw() {
  background(44, 62, 158)
  
  noStroke()
  fill(255, 150, 75)

  for (let xPos = xOffset; xPos <= width - xOffset; xPos += xSpacing+r) {
    for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing + r) {
      ellipse(xPos, yPos, cDiam,r);
    }
  }

  for (let x2Pos = x2Offset; x2Pos <= width - x2Offset; x2Pos += x2Spacing) {
    for (let y2Pos = y2Offset; y2Pos <= height - y2Offset; y2Pos += y2Spacing) {
      ellipse(x2Pos, y2Pos, c2Diam);
    }
  }
}