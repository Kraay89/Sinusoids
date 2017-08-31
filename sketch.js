var newHeight = 600;
var newWidth = 600;
var radius = newWidth / 6;
var angle = 0;
var increment = 0.05
var sine = [];
var cosine = [];

function setup() {
  createCanvas(newWidth, newHeight);
  background(51);
  angleMode(RADIANS);
}

function draw() {
  background(51);
  x = cos(angle) * radius / 2;
  y = sin(angle) * radius / 2;
  sine.push(createVector(frameCount % (width - radius * 2), y));
  cosine.push(createVector(x, frameCount % (height - radius * 2)));
  animateUnitFraming();
  animateCircle();
  animateSine(x, y);
  animateCosine(x, y);
  angle -= increment;
}

function animateUnitFraming() {
  stroke(255, 0, 0)
  noFill();
  line(0, radius, width, radius);
  line(radius, 0, radius, height);
  rect(0, 0, 2 * radius, 2 * radius);
  translate(radius, radius);
  ellipse(0, 0, radius);
}

function animateCircle() {
  push();
  fill(0, 255, 0);
  noStroke();
  rotate(angle);
  translate(radius / 2, 0);
  ellipse(0, 0, 10)
  pop();
}

function animateSine(x, y) {
  push();
  fill(0, 0, 255);
  stroke(255, 255, 0);
  line(x, y, width, y);
  beginShape(POINTS);
  fill(255);
  for (var i = 0; i < cosine.length; i++) {
    vertex(sine[i].x + radius, sine[i].y);
  }
  endShape();
  noStroke();
  translate(radius, y);
  ellipse(0 + (frameCount % (width - radius * 2)), 0, 10);
  pop();
}

function animateCosine(x, y) {
  push();
  fill(0, 0, 255);
  stroke(255, 255, 0);
  line(x, y, x, height);
  beginShape(POINTS);
  fill(255);
  for (var i = 0; i < cosine.length; i++) {
    vertex(cosine[i].x, cosine[i].y + radius);
  }
  endShape();
  noStroke();
  translate(x, radius);
  ellipse(0, 0 + (frameCount % (height - radius * 2)), 10);
  pop();
}
