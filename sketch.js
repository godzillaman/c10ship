var sea,seaimg,ship,shipimg
function preload(){
seaimg=loadImage("sea.png")
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200)
  sea.addImage(seaimg)
  sea.scale=0.3
  sea.velocityX=-3
  ship=createSprite(170,250,50,50)
  ship.addAnimation("ship",shipimg)
  ship.scale=0.3
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/8
  }
 drawSprites()
}