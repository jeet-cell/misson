var backgrounds;
var sca,sca1,sca2,sca3,sca4;
var iss,craft;
var hasDocked=false;
function preload(){
backgrounds= loadImage("spacebg.jpg")
sca = loadImage("iss.png")
sca1 = loadImage("spacecraft1.png")
sca2 = loadImage("spacecraft2.png")
sca3 = loadImage("spacecraft3.png")
sca4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 100, 50, 50);
  iss.addImage(sca)
  iss.scale=0.5
  craft=createSprite(400, 300, 50, 50);
  craft.addImage(sca1)
  craft.scale=0.20
}

function draw() {
  background(backgrounds);  
  drawSprites();

  if(!hasDocked){
    craft.x=craft.x+random(-1,1);

   if(keyWentDown("UP_ARROW")){
     craft.y=craft.y-4;
     craft.addImage(sca2)
   }

   if(keyWentDown("DOWN_ARROW")){
    craft.y=craft.y+4;
    craft.addImage(sca1)
  }

  if(keyWentDown("LEFT_ARROW")){
    craft.x=craft.x-4;
    craft.addImage(sca3)
  }

  if(keyWentDown("RIGHT_ARROW")){
    craft.x=craft.x+4;
    craft.addImage(sca4)
  }

}
if(craft.y<=(iss.y+70)&& craft.x<=(iss.x-10)){
  hasDocked=true;
  textSize(25)
  fill("white")
  text("DOCKING SUCCESSFUL!!!!",200,300)
}
}