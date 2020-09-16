var world;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height, width, 50);
  
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 20));
  }

  for (var p = 15; p <= width - 10; p = p+50){
    plinkos.push(new Plinko(p, 175, 20));
  }

  for (var o = 40; o <= width - 10; o = o+50){
    plinkos.push(new Plinko(o, 275, 20));
  }

  for (var r = 15; r <= width - 10; r = r+50){
    plinkos.push(new Plinko(r, 375, 20));
  }

  Engine.run(engine);

}

function draw() {
  background("black");  

  Engine.update(engine);

  ground.display();

  for (var d = 0; d < divisions.length; d++){
    divisions[d].display();
  }

  for (var c = 0; c < plinkos.length; c++){
    plinkos[c].display();
  }

  for (var c = 0; c < particles.length; c++){
    particles[c].display();
  }

  if (frameCount % 30 === 0){
    particles.push(new Particle(random(random(40, 440), width/2+10,), 20, 20));
  }
 

  drawSprites();
}