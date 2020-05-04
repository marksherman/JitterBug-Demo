function makeBug(speed, color) {
  var bug = {
    x: width / 2,
    y: height / 2,
    move: function() {
      this.x += random(-speed, speed);
      this.y += random(-speed, speed);
      fill(color);
      ellipse(this.x, this.y, 5);
    }
  }

  return bug;
}

var bug;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();

  bug = makeBug(2, "purple");
}

function draw() {
  bug.move();
}
