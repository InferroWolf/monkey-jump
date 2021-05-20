var monkey,monkey_running;
var banana,bi,obstacle,oi;
var FoodGroup,obstacleGroup;
var ig,cm;
var score = 0;
var gamestate = 1;
var PLAY = 1;
var END = 0;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png"," sprite_8.png");
 bi = loadImage("banana.png");
 oi = loadImage("obstacle.png");
 backgi = loadImage("ji.jpg");
 cm = loadImage("sprite_0.png");
}

function setup() {
createCanvas(600, 400);
 backg = createSprite(300,200);
 backg.addImage("backgi",backgi);
 backg.scale = 0.5;
 ig = createSprite(200,385,500,10);
 ig.visible = false;
 monkey = createSprite(50,350,10,10);
 monkey.addAnimation("monkey_running",monkey_running);
 monkey.scale = 0.1;
 FoodGroup = new Group();
 obstacleGroup = new Group();
}

function draw() {
background("white");
 monkey.collide(ig);

if (gamestate === 1){
sb();
so();
  
if (keyDown("space") && monkey.y >340){ 
 monkey.velocityY = -15;
}
 monkey.velocityY = monkey.velocityY + 0.5;
  
if (FoodGroup.collide(monkey)){
 FoodGroup.destroyEach();
 score = score +1;
}
 
if (obstacleGroup.collide(monkey)){
gamestate = END;
}
} else if (gamestate === 0){
 obstacleGroup.setVelocityXEach(0);
 obstacleGroup.setVelocityYEach(0);
 FoodGroup.setVelocityXEach(0);
 obstacleGroup.setLifetimeEach(-1);
 FoodGroup.setLifetimeEach(-1);
 monkey.velocityY = 0;
}
drawSprites();
fill("white");
textSize(20)
text("Score="+ score,250,25);
  
if (gamestate === 0){
 textSize(20);
 fill("white")
 text("GameOver",250,200);
}
}

function sb() {

if (frameCount % 77 === 0) {

var banana = createSprite(600,250,40,10);
 banana.y = Math.round(random(150,250));
 banana.addImage("bi",bi);
 banana.scale = 0.1;
 banana.velocityX = -8;
 banana.lifetime = 200;
 banana.setCollider("rectangle",0,0,banana.width,300);
 FoodGroup.add(banana);
  }
}

function so() {

if (frameCount % 100 === 0) {

 var obstacle = createSprite(600,350,40,10);
 obstacle.addImage("oi",oi);
 obstacle.scale = 0.1;
 obstacle.velocityX = -5;
 obstacle.lifetime = 200;
 obstacleGroup.add(obstacle);
}
}  