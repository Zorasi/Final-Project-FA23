var player;
var idleAnimation;
var walkAnim;
var upAnim;



var grounds;
function preload() {
 idleAnim = loadAnimation("1c.png");//, "2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","11c.png","12c.png","13c.png","14c.png","15c.png"
   walkAnim = loadAnimation("1w_.png", "1w_ copy.png","2w_.png","2w_ copy.png","3w_.png","3w_ copy.png","4w_.png","4w_ copy.png");
  upAnim = loadAnimation("Jump-.png");
}
function setup() {
  createCanvas(600, 400);
   
  player = createSprite(50, 300, 30, 30);
   player.addAnimation("idle", idleAnim);
 player.addAnimation("walk", walkAnim);
 
  
  player.addAnimation("up", upAnim);
  
  
  
  grounds = new Group();
    var ground = createSprite(0, 405, 700, 80);
  ground.shapeColor = color(255, 23, 197);
  grounds.add(ground);
  
  var platform = createSprite(600, 150, 50, 20);
  platform.shapeColor = color(255, 23, 197);
  grounds.add(platform);
  
 var wall = createSprite(460, 320, 30, 100);
  wall.shapeColor = color(255, 23, 197);
  grounds.add(wall);
}
function draw() {
 background(0);
  let k = 10;
  for(var b = 0; b <700; b++){
    
    fill(56, 255, 103);
    rect(b, b, int(random(20,30)), int(random(20,30)));
      rect(200, b, int(random(20,30)), int(random(20,30)));
    k = k + 50;
  }
  
camera.position.x = player.position.x;
  camera.position.y = player.position.y;
  // if we hit the ground

  if (player.position.y > 600) {
    player.position.y = 300; //miss jump respawn
      player.position.x = 0;
  }
   if (player.position.y > 800 && player.position.x < 700 < player.position.x ) {
    player.position.y = 300; //miss jump respawn
      player.position.x = 0;
  }
   if (player.position.y < 130 && player.position.x < 358) { //stay in bounds
   player.velocity.y = +15;
  }
  
    if (player.position.y < 0 && player.position.x > 358) { //stay in bounds
   player.velocity.y = +15;
  }
  print(player.position.x, player.position.y);
  // always have gravity
  //player.velocity.y++;
  drawSprites();
  if (player.position.x == 600) {
    
  
    //player.position.x = 590; //boarders
   resizeCanvas(700, 400);
//player.position.x = 600;
     
  } 
  fill(0);
  rect(600, 200,5,50);
   /*if (player.position.x< 0) {
    player.position.x = 10;//boarders
  }*/
  
   if (player.position.x >= 1600) {
    player.position.x = 1599;
    }
  
  
   if (player.position.x >= 600) {
     resizeCanvas(700, 600);
     fill(0);
rect(0,0,width,height);
     
     
      // player.position.x = 600;
    }
  
   player.collide(grounds);
   if (keyIsDown(UP_ARROW) && player.touching.bottom) {    player.velocity.y = -15;
  }
   else if (player.touching.bottom || player.touching.top) {
    player.velocity.y = 1; //keeps the player staying on stuff
  }
  
  // otherwise apply gravity
  else {
    player.velocity.y++;
  }
}

//Make idle animation move left and right
function keyPressed() {
  if (keyCode == LEFT_ARROW ||keyCode == 65 ) {
    player.changeAnimation("walk");
  //  player.velocity.x = -2;
        player.setSpeed(-2, 0);
    player.mirrorX(-1);
  } else if (keyCode == RIGHT_ARROW ||keyCode == 87 ||keyCode == 68) {
    player.velocity.x = 2;
    player.mirrorX(1);
    player.changeAnimation("walk");
  }
  //Add UP_ARROW
  else if (keyCode == UP_ARROW||keyCode== 32) {
   
    player.velocity.y = -20; 
   // player.changeAnimation("walk");
      player.changeAnimation("up");
    
    
  } else {
    player.changeAnimation("idle");
    player.velocity.x = 0;
    player.velocity.y = 1; //no other keys move the player
  }
  
  while(keyIsPressed == UP_ARROW||keyIsPressed ==32 && player.nottouching.bottom){
        player.velocity.y = +20; 
        
        }
}

  
  /*function keyTyped() {
    
    if ((key === 'ArrowUp') || (key === 's')) {
   
    player.velocity.y = -20; 
   // player.changeAnimation("walk");
      player.changeAnimation("up");
    
  }
    else {
    player.changeAnimation("idle");
    player.velocity.x = 0;
    player.velocity.y = 1;}
  
  
  
  
}*/
function keyReleased() {
  player.setSpeed(0, 0);
    player.changeAnimation("idle");// after I take my hand off the key, the player stops
}