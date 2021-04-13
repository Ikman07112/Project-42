function setup() {
  createCanvas(800,800);

}

function draw() {
  background(200);
  noFill()
  ellipse(400,400,680,680);
  translate(400,400)
  rotate(-90)

  hr=hour();
  mn=minute();
  sc=second();

  scangle = map(sc,0,60,0,360)
  mnangle = map(mn,0,60,0,360)
  hrangle = map(hr%12,0,12,0,360)

  push()
  stroke("blue")
  rotate(scangle)
  line(0,0,200,0)
  pop()

  push()
  stroke("red")
  rotate(mnangle)
  line(0,0,150,0)
  pop()

  push()
  stroke("green")
  rotate(hrangle)
  line(0,0,100,0)
  pop()
}