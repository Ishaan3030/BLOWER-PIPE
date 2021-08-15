const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball, blower, blowermouth;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball = new Ball(500, 100, 10);
  blower = new Blower(500,230,50,50);
  blowermouth = new Blowermouth(400,250,120,10);

  button = createButton("Click to Blow");
  button.position(width/2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  

  ball.show();
  blower.show();
  blowermouth.show();

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05});
}