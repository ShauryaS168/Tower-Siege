

var wall, thickness;
var bullet, speed, weight, wall;

function setup() {
  var canvas = createCanvas(1600,400);
  speed = random(22,32);
    weight = random(30,52);
    thickness = random(22,83);

    bullet = createSprite(50,200,10,10);
    wall = createSprite(1000,200,thickness,height/2);
    bullet.velocityX = speed;

  
   
}

function draw() {
  background(0);
  bullet.display();
  wall.display();

  
  
 

  

  
 







  drawSprites();
}