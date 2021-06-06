
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(50,200,17)
	ground=new Ground(400,685,800,30)
	Dustbin1=new Dustbin(550,600,20,100)
	Dustbin2=new Dustbin(690,600,20,100)
	Dustbin3=new Dustbin(620,660,160,20)
    



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display()
  ground.display()
  Dustbin1.display()
  Dustbin2.display()
  Dustbin3.display()
 
 
}

function keyPressed(){
  
	if(keyCode === 	UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:46,y:-46});
	}

}



