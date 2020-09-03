var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,50);
  thickness=random(22,83);
 bullet= createSprite(50, 200, 10, 50);
 bullet.shapeColor = "white";
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor =color(80,80,80);
 bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
 

  
  drawSprites();

if(hasCollided(wall,bullet)){
bullet.velocityX=0;
var damage=0.5*speed*weight*speed/(thickness*thickness*thickness);
if (damage>10){
wall.shapeColor=color(255,0,0);

}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
}
}



