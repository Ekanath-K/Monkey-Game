var survivalTime=0;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
   
  monkey = createSprite(50, 156, 10, 10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400, 190, 900, 10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  FoodGroup = new Group();
}


function draw() {
  background(225);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100, 50);
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);
  
  if (keyDown("SPACE")&& monkey.y >= 150) {
    monkey.velocityY=-12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach();
  }
  
  spawnBananas();
  spawnObstacles();
  

  drawSprites();
}

   function spawnObstacles() {
    
    if (frameCount % 300 === 0) {
      var obstacle = createSprite(1000, 170, 20, 20);
      obstacle.addImage("obstacle", obstaceImage);
      
      obstacle.velocityX =-11;
      
      obstacle.scale =0.15;
      
    }
     
   }

  function spawnBananas() {
    
    if (frameCount % 160 === 0) {
      var banana = createSprite(1000, 200, 200, 200);
      banana.addImage("banana", bananaImage);
      
      banana.y=Math.round(random(70, 110));
      
      banana.velocityX=-6;
      
      banana.scale=0.1;
      
      FoodGroup.add(banana);
    }
    
    
  
    
}






