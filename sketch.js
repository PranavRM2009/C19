var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(300,300)
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3

  doorGroup=new Group()
  climbersGroup=new Group()

}

function draw() {
  background(200);

  if(tower.y > 400){
    tower.y = 300
  }

  if(keyDown("space")){
    ghost.velocityY=-13
  }

  if(keyDown("left_arrow")){
    ghost.x=ghost.x+-3
  }

  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }

  if(climbersGroup.isTouching(ghost)){
   ghost.velocityY=0
  }

  ghost.velocityY=ghost.velocityY+0.8

  spawnDoors()
  drawSprites()
}

function spawnDoors(){
  if(frameCount%200===0){
    door = createSprite(300,-50)
    door.addImage("ghost",doorImg);

    door.x=Math.round(random(120,400))
    door.velocityY=3
    door.lifetime=600/3
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1

    climber = createSprite(300,5)
    climber.addImage("climber",climberImg);
  
    invisibleclimber=createSprite(300,15)
    invisibleclimber.x=door.x
    invisibleclimber.velocityY=door.velocityY
    invisibleclimber.visible=false

    climber.velocityY=3
    climber.x=door.x

    doorGroup.add(door)
    climbersGroup.add(climber)

   ghost.lifetime=600/3
   climber.lifetime=600/3
  }

}


