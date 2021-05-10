const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1 , ground;

function preload(){
  polygon_img = loadImage("ball.jpeg")
}

function setup() {
  createCanvas(900 , 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,300,250,10);
  
  //level one 
  box1 = new Box(300,275,30,40); 
  box2 = new Box(330,275,30,40); 
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40); 
  box5 = new Box(420,275,30,40); 
  box6 = new Box(450,275,30,40); 
  box7 = new Box(480,275,30,40); 

  //level two 
  box8 = new Box(330,235,30,40); 
  box9 = new Box(360,235,30,40); 
  box10 = new Box(390,235,30,40); 
  box11 = new Box(420,235,30,40); 
  box12 = new Box(450,235,30,40); 

  //level three 
  box13 = new Box(360,195,30,40); 
  box14 = new Box(390,195,30,40); 
  box15 = new Box(420,195,30,40); 

  //top 
  box16 = new Box(390,155,30,40);

  //ball holder with slings
   ball = Bodies.circle(50,200,20); 
   World.add(world,ball); 
   slingShot = new SlingShot(this.ball,{x:100,y:200});

  
}

function draw() {
  background(56,44,44);  
  
  ground.display();
  stand1.display();

  strokeWeight(2);
  stroke(15);
  fill("red");

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()

  strokeWeight(2);
  stroke(15);
  fill("blue");

  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  strokeWeight(2);
  stroke(15);
  fill("green");

  box13.display()
  box14.display()
  box15.display()

  strokeWeight(2);
  stroke(15);
  fill("white");

  box16.display()

  fill("gold");
   imageMode(CENTER) 
   image(polygon_img ,ball.position.x,ball.position.y,40,40); 
   slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}