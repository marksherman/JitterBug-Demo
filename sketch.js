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

var bugs = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  noStroke();

  for(var i = 0; i < 81; i++){
    var newColor = makeColor();
    var newBug = makeBug(2, newColor);
    bugs.push(newBug);
  }
}

function draw() {
  for(var i = 0; i < bugs.length; i++){
    bugs[i].move();
  }
}

// generates a random color
function makeColor() {
  return color(random(0, 255), random(0, 255), random(0, 255));
}
