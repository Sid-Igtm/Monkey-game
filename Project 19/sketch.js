var player = createSprite(100,340,20,50);
player.setAnimation("monkey");
player.scale = 0.1;


var ground = createSprite(200,380,800,20);
ground.x = ground.width /2;

//invisible Ground to support Trex
var invisibleGround = createSprite(200,375,400,5);
invisibleGround.visible = false;

//create groups for the obstacles and banana's 
BananaGroup = createGroup();
ObstacleGroup = createGroup();

//survival time
var survivalTime = 0;
console.log(player.y);


function draw() {
  
  background(255);
  
  //scoring
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());                      
  text("Survival Time: "+ survivalTime,100,50);
  
    //jump when the space key is pressed
    if (keyDown("space")&& player.y >= 340  ){
      player.velocityY = -12 ;
       
    }
  
    //add gravity
    player.velocityY = player.velocityY + 0.8;
    
    //spawn obstacles
    obstacles();
    
    //spawn fruits
    banana();
  
  //stop trex from falling down
  player.collide(invisibleGround);
  drawSprites();
}

function banana() {
 if (World.frameCount % 80 === 0) {
    var Banana = createSprite(400,320,40,10);
    Banana.y = randomNumber(120,200);
    Banana.setAnimation("Banana");
    Banana.scale = 0.05;
    Banana.velocityX = -3;
    
    Banana.lifetime = 134;
    
    BananaGroup.add(Banana);

}
}

function obstacles() {
 if (World.frameCount % 200 === 0) {
    var obstacle = createSprite(400,320,40,10);
    obstacle.x = 350;
    obstacle.y = 350;
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 134;
    
    ObstacleGroup.add(obstacle);
 }
 
}


  
