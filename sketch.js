var tower, towerimage, door, doorimage, climber, climberimage, ghost, ghostimage,climbergroup,doorgroup, invisibleblock, invisiblegroup, sound1
    
var gamestate = "play"

function preload(){
 towerimage=loadImage("tower.png") 
 doorimage=loadImage("door.png")
 climberimage=loadImage("climber.png")
 ghostimage=loadImage("ghost-standing.png") 
 sound1 = loadSound("spooky.wav")
} 

function setup(){
createCanvas(600,600)  
tower=createSprite(300,300)
tower.addImage(towerimage)
tower.velocityY = 1
ghost=createSprite(200,200,50,50)
ghost.addImage(ghostimage)
climbergroup=new Group();
doorgroup=new Group();
ghost.scale =0.5
invisiblegroup=new Group()
sound1.loop()
}

function draw(){
if(gamestate === "play"){
  

if (tower.y > 400) {
tower.y = 300
}
if (keyDown("a")){
  ghost.x = ghost.x-3
}
  
if (keyDown("d")){
  ghost.x = ghost.x+3
}
  
if (keyDown("space")){
  ghost.velocityY = -5
}
ghost.velocityY = ghost.velocityY + 0.8

if (climbergroup.isTouching(ghost)){
  ghost.velocityY = 0
}

if (invisiblegroup.isTouching(ghost) || ghost.y>600){
  ghost.destroy()
  gamestate="end"
}

doors();
  
drawSprites()  
}
if (gamestate === "end"){
  stroke("yellow")
  fill("yellow")
  textSize(30)
  text("Game Over",230,250)
}}


function doors(){
if (frameCount%240 === 0){
door=createSprite(200,-50)
door.velocityY=1
door.addImage(doorimage)
door.x=Math.round(random(120,500))
climber=createSprite(200,10)
climber.addImage(climberimage)
climber.x = door.x
climber.velocityY=1
doorgroup.add(door)
climbergroup.add(climber)
ghost.depth = door.depth + 1
invisibleblock= createSprite(200,15)
invisibleblock.width = climber.width
invisibleblock.height = 2
invisibleblock.X = door.X
invisibleblock.velocityY=1
invisiblegroup.add(invisibleblock)
}
}