var player;
var idleAnimation;
var walkAnim;
var upAnim;

var drops = [];

var ngrounds;
let button;

var grounds;


var moveX = 300;
var directionRight = true;
function preload() {
 idleAnim = loadAnimation("1c.png");//, "2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","11c.png","12c.png","13c.png","14c.png","15c.png"
   walkAnim = loadAnimation("1w_.png", "1w_ copy.png","2w_.png","2w_ copy.png","3w_.png","3w_ copy.png","4w_.png","4w_ copy.png");
  upAnim = loadAnimation("Jump-.png");
  //animations
  
  
  
  // Space Jazz by Kevin MacLeod | https://incompetech.com/
//Music promoted by https://www.chosic.com/free-music/all/
//Creative Commons CC BY 3.0
//https://creativecommons.org/licenses/by/3.0/

  SJazz = loadSound('Space-Jazz.mp3');
 
}
function setup() {
  createCanvas(1500, 1000);
  
  
   button = createButton("Screenshot Win");
  button.mouseClicked(YouWin); //save photo
  button.size(120, 20);
   button.position(0, 1000);
  
   for(var r=0;r<20;r++) {
 drops[r] = new DropS();
 }
 
  player = createSprite(50,300, 10, 10);
   player.addAnimation("idle", idleAnim);
 player.addAnimation("walk", walkAnim);
 
  
  player.addAnimation("up", upAnim);
  
  
   ngrounds = new Group();
  grounds = new Group();
  
   var ng7 = createSprite(500, -150, 700,20);
  ng7.shapeColor = color(255, 60, 0);
  ngrounds.add(ng7);
  
  
   var ng8 = createSprite(0, -100, 700,20);
  ng8.shapeColor = color(255, 60, 0);
  ngrounds.add(ng8);
   var ng9 = createSprite(500, -150, 700,20);
  ng9.shapeColor = color(255, 60, 0);
  ngrounds.add(ng9);
  
    var ground = createSprite(0, 405, 700, 80);
  ground.shapeColor = color(255, 23, 197);
  grounds.add(ground);
  
  
 
    var ground2 = createSprite(0, 895,300, 80);
  ground2.shapeColor = color(255, 23, 197);
  grounds.add(ground2);
  
  var platform = createSprite(600, 150, int(random(50,80)), 20);
  platform.shapeColor = color(255, 23, 197);
  grounds.add(platform);
  
    
  var platform2 = createSprite(650, 150, 50, 20);
  platform2.shapeColor = color(255, 23, 197);
  grounds.add(platform2);
  
  
 var wall = createSprite(495, 320, 35, 100);
  wall.shapeColor = color(255, 23, 197);
  grounds.add(wall);
  
   var wall2 = createSprite(-300, 100, 30, 600);
  wall2.shapeColor = color(255, 23, 197);
  grounds.add(wall2);
  var plat2 = createSprite(620, 150, int(random(20,50)), 20);
  plat2.shapeColor = color(255, 23, 197);
  grounds.add(plat2);
  
  var platform3 = createSprite(820, 350, int(random(20,50)), 20);
  platform3.shapeColor = color(255, 23, 197);
  grounds.add(platform3);
  
   var ng1 = createSprite(0, 450, 700,5);
  ng1.shapeColor = color(255, 60, 0);
  ngrounds.add(ng1);
  
   var ng2 = createSprite(500, 450, 700,5);
  ng2.shapeColor = color(255, 60, 0);
  ngrounds.add(ng2);
  
  
   var plat4 = createSprite(1000, 680, int(random(30,80)), 20);
  plat4.shapeColor = color(255, 23, 197);
  grounds.add(plat4);
  
  
   var wall4 = createSprite(835, 890, 30, 50);
  wall4.shapeColor = color(255, 23, 197);
  grounds.add(wall4);
  
  
  var ng3 = createSprite(565, 860, 30, 60);
 ng3.shapeColor = color(255, 60, 0);
  ngrounds.add(ng3);
  
  
   var plat5 = createSprite(660, 870, int(random(50,80)), 20);
  plat5.shapeColor = color(255, 23, 197);
  grounds.add(plat5);
  
  
   var plat7 = createSprite(560, 770, int(random(50,80)), 20);
  plat7.shapeColor = color(255, 23, 197);
  grounds.add(plat7);
  
    var wall5 = createSprite(200, 760, 30, int(random(80,160)));
  wall5.shapeColor = color(255, 23, 197);
  grounds.add(wall5);
  
  
   var ng4 = createSprite(0, 900, 700,20);
  ng4.shapeColor = color(255, 60, 0);
  ngrounds.add(ng4);
  
   var ng5 = createSprite(500, 900, 700,20);
  ng5.shapeColor = color(255, 60, 0);
  ngrounds.add(ng5);
  
    var ng6 = createSprite(900, 900, 700,20);
  ng6.shapeColor = color(255, 60, 0);
  ngrounds.add(ng6);
  
   var wall6 = createSprite(int(random(300,490)), 870,120, 70);
  wall6.shapeColor = color(255, 23, 197);
  grounds.add(wall6);
  
  
   var wall7 = createSprite(1150, 50, 30, 900);
  wall7.shapeColor = color(255, 23, 197);
  grounds.add(wall7);
   var wall8 = createSprite(1150, 700, 30, 900);
  wall8.shapeColor = color(255, 23, 197);
  grounds.add(wall8);
  
  
   SJazz.play(); //space music
}



function draw() {
 background(0);
  
  fill(255);
  
  text('Use A,D,Space or LArrow, RArrow, UpArrow keys to move', -250,160);
  
  
   fill(56, 255, 103);
  let k = 10;
  for(var b = 0; b <700; b++){ //cool design background rects
    
   
    rect(b, b, int(random(20,30)), int(random(20,30)));
      rect(200, b, int(random(20,30)), int(random(20,30)));
    k = k + 50;
  }
  
camera.position.x = player.position.x+290;
  camera.position.y = player.position.y+120; //camera


  
   if (player.position.x < 0) { //stay in bounds
   player.velocity.x = 1;
  }

 
  print(player.position.x, player.position.y);
  // always have gravity
  //player.velocity.y++;
  drawSprites();
  
 
  
  if (player.position.y >= 760 && player.position.x <= 121) {
    fill(17, 242, 156);
     rect(-700,0,width,height);
    fill(255);
    textSize(80);
    text('You Win!', 10,690);
  }
    
  
   
   
  
 
  
   player.collide(grounds);
  /* if (keyIsDown(UP_ARROW) && player.touching.bottom) {    player.velocity.y = -20;
  }
   else*/ if (player.touching.bottom || player.touching.top) {
    player.velocity.y = 1; //keeps the player staying on stuff
  }
  
  // otherwise apply gravity
  else {
    player.velocity.y++;
  }
    for(var d=0; d<drops.length;d++) {
drops[d].update();
    }
   RespawnP();
}

//Make idle animation move left and right
function keyPressed() {
  if (keyCode == LEFT_ARROW ||keyCode == 65 ) {
    player.changeAnimation("walk");
   player.velocity.x = -2;
        //player.setSpeed(-2, 0);
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
  
  /*while(keyIsPressed == UP_ARROW||keyIsPressed ==32 && player.nottouching.bottom){
        player.velocity.y = +20; 
        
        } */
  
 
  
}
function YouWin(){

 
     saveCanvas('Catgradulations!.jpg');
  
}
  
function keyReleased() {
  player.setSpeed(0, 0);
    player.changeAnimation("idle");// after I take my hand off the key, the player stops
}


function RespawnP(){ // if cat hits any orange, respawn
  
  
     if(player.overlap(ngrounds)){
    //player.remove();
 
     player.position.y = 100; 
     player.position.x = 50;
  }
   
}
class DropS{
 constructor() {
        this.xPos = random(0, width);
 this.yPos = random(0, height);
 this.bWidth = random(5,6);
    //this.bWidth = random(15, 50);
 this.bHeight = random(0, 15);
  
 }
update() {
 noStroke();
   fill(120,120,230,80);
 
 
  rect(this.xPos, this.yPos, this.bWidth, this.bHeight);//ant
 
 
     this.yPos += 3;
     if (this.yPos <-this.bHeight) {
 this.yPos = height;
 }
 } 
  
  
}
