let stars = [];
let speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 800; i++) {
    stars.push({
      x: random(-width, height),
      y: random(-height, height),
      z: random(width),
    });
  }
  draw();
}

function draw() {
  speed = map(mouseY, 0, height, 0, 20);
  background(000);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    update(stars[i]);
    show(stars[i]);
  }
}

function update(star) {
  star.z = star.z - speed;
  if (star.z < 1) {
    star.x = random(-height, height);
    star.y = random(-width, width);
    star.z = width;
  }
}

function show(star) {
  let x = star.x;
  let y = star.y;
  let z = star.z;
  fill(255);
  noStroke();

  let sx = map(x / z, 0, 1, 0, width);
  let sy = map(y / z, 0, 1, 0, height);

  let r = map(z, 0, width, 16, 0);
  ellipse(sx, sy, r, r);
}
