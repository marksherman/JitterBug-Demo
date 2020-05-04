var bug = {
  x: 0,
  y: 0,
  move: function() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
    fill("orange");
    ellipse(this.x, this.y, 5);
  }
}

var bug2 = {
  x: 0,
  y: 0,
  move: function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    fill("purple");
    ellipse(this.x, this.y, 5);
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  bug.x = height / 2;
  bug.y = width / 2;
  bug2.x = height / 2;
  bug2.y = width / 2;
}

function draw() {
  bug.move();
  bug2.move();
}
