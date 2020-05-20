const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var soldier1;
function preload(){
   soldier = loadImage("soldier.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    soldier1 = createSprite(500,350,10,10);
    soldier1.addImage(soldier);
    box1 = new Rect(130,160,30,800);
    box2 = new Rect(160,220,30,800);
    box3 = new Rect(190,270,10,300);
    box4 = new Rect(200,270,10,300);
    box5 = new Rect(210,270,10,300);
    box6 = new Rect(220,270,10,300);
    box7 = new Rect(230,270,10,300);
    box8 = new Rect(240,270,10,300);
    box9 = new Rect(250,270,10,300);
    box10 = new Rect(260,270,10,300);
    box11 = new Rect(270,270,10,300);
    box12 = new Rect(280,270,10,300);
    box13 = new Rect(290,270,10,300);
    box14 = new Rect(300,220,30,800);
    box15 = new Rect(330,160,30,800);
   // object =Bodies.polygon(145,145,3,1);
    //World.add(world,this.object);
    //object1 = Bodies.polygon(345,145,3,1);
    //World.add(world,this.object1);
}

function draw() {
  background('#fae');  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  triangle(343,130,325,155,365,155);
  triangle(145,130,125,155,165,155);
  drawSprites();
}