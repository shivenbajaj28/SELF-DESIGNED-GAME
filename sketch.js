const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Global variables
var army, army_Img, army_leftImg, army_rightImg;
var terrorist, terrorist_Img, terroristWhenDie_Img;
var bullet, bullet2, bulletImg;
var box, boxImg;
var background_Img;
var distance = 0;
var gunfire;
var sarejahan;
var ground, groundImg;

function preload(){
    army_leftImg = loadImage("Images/Army_left.png");
    army_rightImg = loadImage("Images/Army_right.png");
	terrorist_Img = loadImage("Images/Terrorist.png");
	terroristWhenDie_Img = loadImage("Images/Terrorist_whendie.png");
    background_Img = loadImage("Images/Background.png");
    bulletImg = loadImage("Images/Bullet.png");
    bullet2Img = loadImage("Images/Bullet.png");
    boxImg = loadImage("Images/Box.png");
    gunfire = loadSound("Sound/machine-gun-01.mp3");
    sarejahan = loadSound("Sound/Sare-Jahan-Se-Accha-Chorus.mp3");
    groundImg = loadImage("Images/ground.png");
}

function setup(){
	createCanvas(displayWidth, displayHeight - 115);
	engine = Engine.create();
	world = engine.world;

    bullet = createSprite(displayWidth/2-200, displayHeight/2+200, 20);
    bullet2 = createSprite(displayWidth/2-200, displayHeight/2+200, 20);
    box = createSprite(displayWidth/2+900, displayHeight/2+200, 20);
    army = new Army(displayWidth/2-300, displayHeight/2+100);
    ground = createSprite(displayWidth/2+300, displayHeight/2, displayWidth, 20);

	Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(background_Img);
  text("Some terrorists have got India's secret information. Can you be the true hero to find it?", displayWidth/2, displayHeight/2); 
  text("Move using the arrow keys and shoot using space bar", displayWidth/2, displayHeight/2+50);
  drawSprites();
  Armyfire();
  spawnTerrorist();
  isTouching();
  bullet.addImage(bulletImg);
  bullet2.addImage(bulletImg);
  box.addImage(boxImg);
  ground.addImage(groundImg);
  
  //displaying the objects
  army.display();
  ellipseMode(RADIUS);
  ellipse(bullet.position.x, bullet.position.y, 20, 20);

	if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        army.addImage(army_leftImg);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        army.addImage(army_rightImg);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    if(army.isTouching(box)){
        text("Salute to the national hero", displayWidth/2, displayHeight/2);
        //enter winning sound
    }
    else if(bullet.isTouching(army)){
        text("Salute to the true Indian martyr", displayWidth/2, displayHeight/2);
        //enter winning sound
    }
    drawSprites();
}

function changePosition(x,y){
    army.x = army.x + x;
    army.y = army.y + y;
}

function spawnTerrorist(){
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        terrorist = new Terrorist(random(displayWidth/2+300, displayWidth/2+800), displayHeight/2+100, 10, 10);
        switch(rand){
            case 1: terrorist.display();
            break;
            case 2: terrorist.display();
            break; 
            case 3: terrorist.display();
            break;
            case 4: terrorist.display();
            break;
            case 5: terrorist.display();
            default: break;
        }
    }

function Armyfire(){
    if(keyCode === 32){
        bullet.velocityX = 5;
        //enter the firing sound
    }
}
    
function Terroristfire(){
    if(terrorist.x === army.x && terrorist.y === army.y){
        bullet2.velocityX = 5;
        //enter the firing sound
    }
}

function isTouching(){
    if(bullet.isTouching(terrorist)){
        terrorist.addImage(terroristWhenDie_Img);
        terrorist.visibility = false;
    }
  }
}