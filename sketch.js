var cat, catImg;
var edges;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var timer=60;
var road,roadImg;
var eat,eatImg;
var eatgroup;
function setup() {
  createCanvas(800, 600);
  cat = createSprite(50,550);
  cat.scale=0.15;
  cat.addImage("cat.png",catImg);
eatgroup=new Group();
}
function preload() {
  catImg=loadImage("cat.png");
  eatImg=loadImage("mouse.png");
  roadImg=loadImage("road.png");
}

function draw() {
  background(roadImg);
  drawSprites();
  if(gameState===PLAY){
    timer=timer-0.05;
    textSize(25);
    text("TIME REMANING:"+Math.round(timer),500,30);
    text("score= " + score,50,30);
      edges=createEdgeSprites();
  cat.collide(edges);

  cat.scale=0.2;
    
if(keyDown("UP_ARROW")){
  cat.velocityY=-8; 
}
  if(keyDown("DOWN_ARROW")){
  cat.velocityY=8; 
}
   if(keyDown("LEFT_ARROW")){
  cat.velocityX=-8; 
}
   if(keyDown("RIGHT_ARROW")){
  cat.velocityX=8; 
}
   mouse();

  if(eatgroup.isTouching(cat)){
eatgroup.destroyEach(); 
cat.scale+=0.05; 
    score++;
   }
    if(timer<0){
    gameState=END;   
       }
     }
  if(gameState===END){
   cat.velocityX=0;
    cat.velocityY=0;
    eatgroup.destroyEach();
     
     }
 
  
 
}
function mouse() {

  if(frameCount % 60===0){  
  eat =createSprite(random(50,750),200,5,5);
    eat.scale=0.1
  eat.addImage("mouse.png",eatImg);
 eat.y=random(50,550);
    eat.lifetime=50;
  eatgroup.add(eat);
    
}
}