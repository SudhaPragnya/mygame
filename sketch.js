var human, trash, humanI,trashI;
var submit,submitI;
var eyesI,bileI,femurI,intI,liverI,pancreasI,skullI,tailI,tickI,tonI,wingsI;
var eyes,tongue,skull,tail;
let currentDroppable = null;
function preload(){
  humanI=loadImage("body.jpg");
  trashI=loadImage("trash.png");
  submitI=loadImage("tick.jpg");
  eyesI=loadImage("eyes.png");
  bileI=loadImage("bile.png");
  femurI=loadImage("femur.png");
  intI=loadImage("int.png");
  liverI=loadImage("liver.png");
  pancreasI=loadImage("pancreas.png");
  skullI=loadImage("skull.png");
  tailI=loadImage("tail.png");
  tickI=loadImage("tick.jpg");
  tonI=loadImage("ton.png");
  wingsI=loadImage("wings.png");
}
function setup() {
  createCanvas(1200,800);
  human=createSprite(500,250,200,750);
  human.addImage(humanI);
  human.scale=2.9;
  trash=createSprite(700,500,50,50);
  trash.addImage(trashI);
  trash.scale=0.3;
  eyes=createSprite(200,130,20,20);
  eyes.addImage(eyesI);
  eyes.scale=0.01;
  tongue=createSprite(200,250,30,30);
  tongue.addImage(tonI);
  tongue.scale=0.05;
  skull=createSprite(200,370,30,30);
  skull.addImage(skullI);
  skull.scale=0.05;
  tail=createSprite(200,430,30,30);
  tail.addImage(tailI);
  tail.scale=0.50;
  
}
function draw() {
  background(255,255,255); 
  textSize(30);
  stroke("red");
  text("Human Anatomy",100,50);
  if(keyIsDown(RIGHT_ARROW)){
    eyes.x=eyes.x+5;
  }
  if(keyIsDown(UP_ARROW)){
    eyes.y=eyes.y-5;
  }
  if(keyIsDown(LEFT_ARROW)){
    eyes.x=eyes.x-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    eyes.y=eyes.y+5;
  }
  drawSprites();
}
//function mouseDragged(){

//}
