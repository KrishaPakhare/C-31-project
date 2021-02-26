const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles =[];
var plinkos = [];
var division= [];
var divisionHeight =300;

function setup() {
  createCanvas(500,800);
     engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(240,790,480,10);

    for (var i=0; i<=width; i=i+80){
      division.push(new Split(i, 640, 10, divisionHeight));
    }
  
     for (var j=40; j<=width; j=j+50){
       plinkos.push(new Plinko(j, 75, 10));
     }
  
    for (var j=15; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j, 175, 10));
    }
  
    for (var j=40; j<=width; j=j+50){
      plinkos.push(new Plinko(j, 275, 10));
    }
  
    for (var j=15; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j, 375, 10));
    }
  
}

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();

  

  if(frameCount%90===0){
    particles.push(new Colour(random(width/2-10, width/2+10), 10, 10))
 }

  for (var a=0; a<particles.length; a++){
    particles[a].display();
  }

  for (var i=0; i<division.length; i++){
    division[i].display();
  }

  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

}