var words = ["Approximately 1.6 million Minnesotans have low retail access to grocery stores.", 
"Minnesota’s total share of residents with low retail access ranks among the ten highest in the U.S.", 
"Both price and distance create barriers to healthy food access, but price constitutes a more significant barrier.", 
"An estimated 341,000 Minnesotans face both income and distance barriers to purchasing healthy food.", 
"Rural residents, low-income residents, senior residents, and residents of color are the most impacted.", 
"Counties in rural Minnesota have a disproportionate number of food deserts relative to their total population and geographic area."];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background('rgb(51, 153, 102)');

  fill('rgb(255, 255,230)');
  textSize(22);
  text(words[index], 50, 200);
  
  textSize(26);
  text('Minnesota Food Access', 50 , 110);
  textFont('Oswald');
  textSize(12);
  fill('black');
  text('click mouse to change facts.', 1250 , 700);
}

function mousePressed() {
  index = floor(random(words.length));
  
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
}