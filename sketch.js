
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boy_img;
var tree,tree_img;
var stone;
var ground;

function preload()
{
	boy_img = loadImage("images/boy.png");
	tree_img = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,780,1200,40);
	
	boy = createSprite(150,600,10,10);
	boy.addImage(boy_img);
	boy.scale=0.12;

	tree = createSprite(1200,350,10,10);
	tree.addImage(tree_img);
	tree.scale = 0.55;

    stone = new Stone(150,600,10,10);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  ground.dislay();
  
  drawSprites();
 
}



