
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 pi = loadImage("paper.png")
 di = loadImage("dustbingreen.png") 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperball = Bodies.circle(400, 350, 15, {
	restitution: 1.0,
    friction: 0.5
	})

  World.add(world, paperball)
  ground = Bodies.rectangle(400, 680, 800, 20, {
    isStatic:true
  })
World.add(world, ground)

dustbin = Bodies.rectangle(700, 600, 50, 200);
World.add(world, dustbin);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)

  imageMode(CENTER);
  background(0);
  // imageMode(RADIUS);
  
  translate(paperball.position.x, paperball.position.y);
  rotate(paperball.angle); 
push()
  image(pi, 0, 0, 15, 15);
  pop()
  rect(400, 680, 800, 20);
  push()  
  image(di, 700, 600, 50, 200);
  pop()
  drawSprites();
 
}



