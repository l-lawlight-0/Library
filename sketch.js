var rect1,rect2,rect3,rect4;
var result,result1;
function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 200, 50, 50);
 rect1.shapeColor = "white";
 rect1.debug = true;
 rect2 = createSprite(400, 200, 50, 50);
 rect2.shapeColor = "white";
 rect2.debug = true;
 rect3 = createSprite(200, 200, 50, 50);
 rect3.shapeColor = "white";
 rect3.debug = true;
 rect3.velocityY = -6;
 rect4 = createSprite(200, 10, 50, 50);
 rect4.shapeColor = "white";
 rect4.debug = true;
 rect4.velocityY = 6;
}

function draw() {
  background(0); 
  rect2.x = mouseX;
  rect2.y = mouseY;
  result = isTouching(rect1,rect2)
  if(result === true){
     rect1.shapeColor = "red";
     rect2.shapeColor = "red";
  }
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  bounceOff(rect3,rect4);

    
  drawSprites();
}