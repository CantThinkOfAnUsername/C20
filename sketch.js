var fixedRect, movingRect;
var fixedBox, movingBox;
function setup() {
  createCanvas(1200,400);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="red";
  movingRect= createSprite(500,200,80,30);
  movingRect.shapeColor="red";
  fixedBox = createSprite(500,300,30,80);
  fixedBox.shapeColor = "green";
  fixedBox.velocityX = 5
  movingBox = createSprite(900,300,80,30)
  movingBox.shapeColor = "green";
  movingBox.velocityX = -5
}

function draw() {
  background(0); 
   movingRect.y = mouseY;
   movingRect.x = mouseX;
   if(fixedRect.width/2 + movingRect.width/2 > movingRect.x-fixedRect.x && 
      movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x &&
      fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y &&
      movingRect.height/2 + fixedRect.height/2 > fixedRect.y - movingRect.y
    ){
     movingRect.shapeColor = "blue"
     fixedRect.shapeColor = "blue"
   }
   else{
     movingRect.shapeColor = "red"
     fixedRect.shapeColor = "red"
   }
   if(fixedBox.width/2 + movingBox.width/2 > movingBox.x - fixedBox.x &&
      movingBox.width/2 + fixedBox.width/2 > fixedBox.x - movingBox.x
    ){
     fixedBox.velocityX = fixedBox.velocityX * (-1);
     movingBox.velocityX = movingBox.velocityX * (-1); 
    }
    if(fixedBox.height/2 + movingBox.height/2 > movingBox.y - fixedBox.y &&
       movingBox.height/2 + fixedBox.height/2 > fixedBox.y - movingBox.y
      ){
        fixedBox.velocityY = fixedBox.velocityY * (-1);
        movingBox.velocityY = movingBox.velocityY * (-1);
      }
   
  drawSprites();
}