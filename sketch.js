var cat,rat,catimg,catimg2,ratimg,ratimg2
var bg
function preload() {
    //load the images here
    catimg=loadAnimation("images/cat1.png")
    catimg2=loadAnimation("images/cat4.png")
    ratimg=loadAnimation("images/mouse2.png")
    ratimg2=loadAnimation("images/mouse3.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("img1",catimg)
cat.scale=0.15
rat=createSprite(200,600)
rat.addAnimation("i1",ratimg)
rat.scale=0.1
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-rat.x<cat.width/2-rat.width/2+10){
    cat.velocityX=0 
    cat.addAnimation("img2",catimg2)
    rat.addAnimation("i2",ratimg2)
    cat.changeAnimation("img2")
    rat.changeAnimation("i2")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
}

}
