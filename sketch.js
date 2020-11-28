
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,670,width,20);
	dustbin = new Dustbin(1200,650);
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    
  	}
}





