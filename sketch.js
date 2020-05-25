var thickness, wall;
var bullet,speed, weight;
var score;

function setup(){

  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 25);
  wall=createSprite(1200,200,thickness,height/2);
 
}

function draw() {
  
  background(80,80,80);  
  

  bullet.shapeColor="white";

  bullet.velocityX = speed;

  document.getElementById("project").innerHTML = "Project by Dia Priyadarshi";
 
  document.getElementById("speed").innerHTML = "<b>Speed : </b>" +  bullet.velocityX;
  document.getElementById("weight").innerHTML = "<b>Weight : </b>" + weight;
  document.getElementById("thickness").innerHTML = "<b>Thickness : </b>" + thickness;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage=0.5 * ( weight * speed * speed ) / (thickness *thickness *thickness);

    document.getElementById("damage").innerHTML = "<b>Damage : </b>" + damage;

      if( damage >= 10)
      {
        bullet.velocityX = 0;
        wall.shapeColor = color(255,0,0);
      }

      if( damage < 10)
      {
        bullet.velocityX = 0;
        wall.shapeColor = color(0,255,0);
      }
  }

  drawSprites();

}
function hasCollided(bulllet,wall ){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge= wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}