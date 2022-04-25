
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stars
var star




function setup() {
  createCanvas(600,400);

  stars = loadImage("./star.png")



  star =createSprite(300,40);
  star.addImage(stars);
  star.scale=0.02;


  stars = loadImage("./star.png")

  

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(1000);
  Engine.update(engine);

 
  
}

