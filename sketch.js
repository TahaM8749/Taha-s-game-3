var player, playerS, playerRunning;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, door;
var gameState = "play";
var deaths = 0;
var heart1, heart2, heart3, heartIM;
var stage = "1";
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9;



function preload(){
  playerRunning = loadAnimation("man1.png", "man2.png","man3.png");
  
  playerS = loadImage("manS.png");

  heartIM = loadImage("Heart.png")

}

function setup() {
  createCanvas(1200,800);

wall1 = createSprite(100,600,5,200);
wall2 = createSprite(450,500,700,5);
wall3 = createSprite(550,700,900,5);
wall4 = createSprite(1000,475,5,450);
wall5 = createSprite(600,250,800,5);

wall6 = createSprite(800,475,5,50);
wall7 = createSprite(450,450,700,5);
wall8 = createSprite(100,350,5,200);

door = createSprite(200,250,200,5);
door.shapeColor = "white";

  obstacle1 = createSprite(300,600,25,25);
  obstacle1.velocityY = 7;
  obstacle2 = createSprite(450,600,25,25);
  obstacle2.velocityY = -7;
  obstacle3 = createSprite(600,600,25,25);
  obstacle3.velocityY = 7;
  obstacle4 = createSprite(750,600,25,25);
  obstacle4.velocityY = -7;
  obstacle5 = createSprite(900,475,25,25);
  obstacle5.velocityY = 7;
  obstacle6 = createSprite(750,350,25,25);
  obstacle6.velocityY = -7;
  obstacle7 = createSprite(600,350,25,25);
  obstacle7.velocityY = 7;
  obstacle8 = createSprite(450,350,25,25);
  obstacle8.velocityY = -7;
  obstacle9 = createSprite(320,350,25,25);
  obstacle9.velocityY = 7;
  

  player = createSprite(140,600,20,20);
  player.addAnimation("running",playerRunning)

  player.scale = 0.20;
  
  heart1 = createSprite(25,25,20,20);
  heart1.addImage(heartIM);
  heart1.scale = 0.1;

  heart2 = createSprite(68,25,20,20);
  heart2.addImage(heartIM);
  heart2.scale = 0.1;

  heart3 = createSprite(110,25,20,20);
  heart3.addImage(heartIM);
  heart3.scale = 0.1;
}

function draw() {
  background("lightGray");  

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);

  obstacle1.bounceOff(wall2);
  obstacle1.bounceOff(wall3);
  obstacle2.bounceOff(wall2);
  obstacle2.bounceOff(wall3);
  obstacle3.bounceOff(wall2);
  obstacle3.bounceOff(wall3);
  obstacle4.bounceOff(wall2);
  obstacle4.bounceOff(wall3);
  obstacle5.bounceOff(wall3);
  obstacle5.bounceOff(wall5);
  obstacle6.bounceOff(wall7);
  obstacle6.bounceOff(wall5);
  obstacle7.bounceOff(wall7);
  obstacle7.bounceOff(wall5);
  obstacle8.bounceOff(wall7);
  obstacle8.bounceOff(wall5);
  obstacle9.bounceOff(wall7);
  obstacle9.bounceOff(wall5);







    
  if(player.collide(door)){
    gameState = "win";
  }    
if(gameState === "win"){
      text("YOU WON!",600,50)
    }
    if(gameState === "play"){
      text("Use the w a s d keys or arrow keys to move around. Avoid the obstacles and get to the white door to win!",400,50);
      text("Once you get to the door, you will be teleported to the next room. Get past the third room to win. You have three lives. Good luck!",400,75);
      
    //  console.log("text is showing")

  }

    

  if(keyDown("right")||(keyDown("d"))){
   // player.changeAnimation("running",playerRunning)
    player.x = player.x + 8;
  }
  if(keyDown("left")||(keyDown("a"))){
    //player.changeAnimation("running",playerRunning)
    player.x = player.x - 8;
    player.flip;
  }
  if(keyDown("up")||(keyDown("w"))){
    //player.changeAnimation("running",playerRunning)
    player.y = player.y - 8;
  }
  if(keyDown("down")||(keyDown("s"))){
    //player.changeAnimation("running",playerRunning)
    player.y = player.y + 8;
  }
  console.log(gameState);
  
  drawSprites();
}