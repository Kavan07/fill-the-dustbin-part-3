const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1, c1, d1;

function preload() {
	d1simage = loadImage("dustbin.png");
	b1simage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	d1s = createSprite(650, 610, 50, 100);
	d1s.addImage(d1simage);
	d1s.scale = 0.5;

	b1 = new Ball(200, 400, 25, 25);
	c1 = new SlingShot(b1.body, {x : 200, y : 300});

	d1 = Bodies.rectangle(width/2, 600, width, 10);
	World.add(world, d1);

	g1 = new Ground(width/2, height-5, width, 10)

	Engine.run(engine);
}

  function draw() {
	  background("grey");
	  Engine.update(engine);
      b1.display();
	  c1.display();
	  g1.display();
	  drawSprites();
  }

  function mouseDragged(){
    Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    c1.fly();
}