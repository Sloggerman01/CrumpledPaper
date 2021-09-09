
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
let ground;
var leftWall, rightWall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    iStatic: false,
    restitution: 0.3,
    friction: 0,
    density:1.2
  }

  ground = new Ground(200,390,400,20);
  leftWall = new Ground(200,380,20,120);
  rightWall = new Ground(300,380,20,120);

  groundOptions ={
    isStatic:true,
    restitution:0
  }

  ball = Bodies.circle(100,10,5,ball_options);
  World.add(world,ball);
  
 
  ellipseMode(RADIUS);
}


function draw() 
{
  keyPressed();
  background(51);
  Engine.update(engine);
  
  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      rightForce()
    }
  }

  ground.show();
  leftWall.show();
  rightWall.show();
  
  ellipse(ball.position.x,ball.position.y,5);
 
}
function rightForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
}
