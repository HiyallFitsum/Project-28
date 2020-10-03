
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

	boyImage = loadImage("boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(270, 585, 60, 200);
	boy.addImage(boyImage);
	boy.scale = 0.125;

	//Create the Bodies Here.
	ground = new Ground(width/2, height-10, width, 10);

	tree = new Tree(width-150, height-200, 30, 60);

	//stone = new Stone(100, 500);
	stone = new Stone(200, 500, 50, 50);
	chain = new Chain(stone.body,{x:200, y:500});

	mango1 = new Mango(600,400);
	mango2 = new Mango(630,380);
	mango3 = new Mango(650,420);
	mango4 = new Mango(600,460);
	mango5 = new Mango(680,470);
	mango6 = new Mango(580,430);
	mango7 = new Mango(550,350);
	mango8 = new Mango(580,370);
	mango9 = new Mango(550,460);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  drawSprites();

  ground.display();
  tree.display();

  stone.display();
  //chain.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
	}
	
	function mouseReleased(){
	chain.fly();
	}

function keyPressed() {
	if (keyCode === 32) {
		chain = new Chain(stone.body,{x:200, y:500});
		Matter.Body.setPosition(stone.body, {x: 200, y:500})
		launcherObject.attach(stone.body);
		chain = new Chain(stone.body,{x:200, y:500});
	}
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.diameter+lstone.width)
	{
	 Matter.Body.setStatic(lmango.body, false);
	}
}