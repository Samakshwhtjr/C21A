var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "green";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "green";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  gameobject3.x = World.mouseX;
  gameobject3.y = World.mouseY;
  
  
  if(isTouching(movingRect,gameobject3)){
    movingRect.shapeColor = "red";
    
      gameobject3.shapeColor = "red";
      
  }
  else{
    movingRect.shapeColor = "blue";
    gameobject3.shapeColor = "blue";

  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}


