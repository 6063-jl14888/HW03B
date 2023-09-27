
let xOffset = 0;
let yOffset = 0;
let xSpacing = 100;
let ySpacing = 100;

let x2Offset = 0;
let y2Offset = 0;
let x2Spacing = 150;
let y2Spacing = 150;

let x3Offset = 0;
let y3Offset = 0;
let x3Spacing = 200;
let y3Spacing = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(44, 62, 158)
  
  noStroke()
  fill(255, 150, 75)

      randomSeed(50)
      for(let xPos = xOffset; xPos<=width - xOffset; xPos+=xSpacing+50){
        for(let yPos = yOffset; yPos<=height - yOffset; yPos+=ySpacing-50){
        let x = random(300)
        let y = random(300)
        let dim = 5
      ellipse(xPos+x, yPos+y, dim, dim);
      }
    }


    randomSeed(90)
    for(let x2Pos = x2Offset; x2Pos<=width - x2Offset; x2Pos+=x2Spacing){
      for(let y2Pos = y2Offset; y2Pos<=height - y2Offset; y2Pos+=y2Spacing){
      let x2 = random(800)
      let y2 = random(900)
      let dim = 15
    ellipse(x2Pos+x2, y2Pos+y2, dim, dim);
    }
  }

  randomSeed(40)
  for(let x3Pos = x3Offset; x3Pos<=width - x3Offset; x3Pos+=x3Spacing){
    for(let y3Pos = y3Offset; y3Pos<=height - y3Offset; y3Pos+=y3Spacing){
    let x3 = random(800)
    let y3 = random(900)
    let dim = 30
  ellipse(x3Pos+x3, y3Pos+y3, dim, dim);
  }
}
  }
  