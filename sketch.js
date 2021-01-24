var words = ["a lack of transportation", "a lack of availability", "a lack of funding"];

var index = 0;

function setup() {
  createCanvas(630, 400);
}

function draw() {

  background('rgb(33, 48, 0)');

  fill(255);
  textSize(26);
  text(words[index], 50, 200);
  
  textSize(26);
  text('Minnesota food deserts impact', 50 , 110);
  text('nearly 50% of residents because of', 50 , 150);
  textSize(12);
  text('click mouse', 550 , 380);
}

function mousePressed() {
  index = floor(random(words.length));
  
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
}