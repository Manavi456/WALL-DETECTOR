var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 30, 15);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);

}

function draw() {
  background("grey");

  bullet.shapeColor = "white"  
  wall.shapeColor = ("80, 80, 80");

if (hasCollided(bullet, wall)) {
   
  bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor = color(255, 0, 0);

    }
    if(damage<10){

      wall.shapeColor = color(0, 255, 0);

    }

}
 
  drawSprites();

}

  function hasCollided(bullet1, wall1){
      bulletrightEdge = bullet1.x + bullet1.width;
      wallleftEdge = wall1.x;
    if(bulletrightEdge>=wallleftEdge){
        return true
    }
        return false;

  }