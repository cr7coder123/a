var gameState="Start";
var info;
var start;
//level 1
var ocean;
var score=0;
var trashIMG, trash;
var SalmonIMG, salmon;
var ClownfishIMG, clownfish;

//level2
var track;
var carIMG, car;
var car2IMG, car2;
var distance=0;

//level3
var Artic;
var ice1, ice2;
var home;
var pbearIMG, pbear;
var fishIMG, fish;
var food=0;

//level4
var Wildfire;
var ground;
var truckIMG, truck;
var fhIMG, fh;
var firePoints=0;

//level5
var Space;
var shipIMG, ship;
var rockIMG, rock;
var time=0;

//end
var World;
function preload(){
  notification=loadSound("Sound/Notification.wav");
  //level1
  ocean=loadImage("Images/Ocean.jpeg");
  trashIMG=loadImage("Images/Water bottle.png");
  SalmonIMG=loadImage("Images/fish.png");
  ClownfishIMG=loadImage("Images/Clownfish.png");
 splash=loadSound("Sound/splash.wav");

//level2
  track=loadImage("Images/Road.PNG");
  carIMG=loadImage("Images/Car.png");
  car2IMG=loadImage("Images/Car2.png");
  race=loadSound("Sound/car.wav");
  Crash=loadSound("Sound/Crash.wav");

  //level3
  Artic=loadImage("Images/Artic.png");
  pbearIMG=loadImage("Images/PolarBear.png");
  fishIMG=loadImage("Images/Fish.png");
  Yay=loadSound("Sound/Yay.mp3");

  //level4
  Wildfire=loadImage("Images/Wildfire.jpg");
  truckIMG=loadImage("Images/firetruck.png");
  fhIMG=loadImage("Images/fire hydrant.png");
  fire=loadSound("Sound/Truck.wav");

  //level5
  Space=loadImage("Images/Space.jpg");
  shipIMG=loadImage("Images/Spaceship.png");
  rockIMG=loadImage("Images/Rock.png");
  engine=loadSound("Sound/Engine.wav");

  //level6
  wrong=loadSound("Sound/Wrong.wav");

  //level7
  Hospital=loadImage("Images/Hospital.jpg");
  groupIMG=loadImage("Images/Group.png");
  vaccineIMG=loadImage("Images/vaccine.png");

  //end
  World=loadImage("Images/World.jpg");
}
function setup() {
  createCanvas(400, 400);
info=createInput("");
info.position(450, 250);
  
  start=createButton("Play");
  start.position(520, 280);

  //level1
 trash=createSprite(200, -100, 10, 10);
 trash.addImage(trashIMG);
 trash.scale=0.1;

 salmon=createSprite(200, -100, 10, 10);
 salmon.addImage(SalmonIMG);
 salmon.scale=0.09;

 clownfish=createSprite(200, -100, 10, 10);
 clownfish.addImage(ClownfishIMG);
 clownfish.scale=0.03;

 //level2
 car=createSprite(200, -100);
 car.addImage(carIMG);
 car.scale=0.2;

 car2=createSprite(300, -100);
 car2.addImage(car2IMG);
 car2.scale=0.4;

 car3=createSprite(300, -100);
 car3.addImage(car2IMG);
 car3.scale=0.4;

 //level3
 pbear=createSprite(200, -100, 20, 20);
 pbear.addImage(pbearIMG);

 ice1=createSprite(100, -100, 40, 40);
 ice1.shapeColor="darkblue";
 ice2=createSprite(100, -100, 40, 40);
 ice2.shapeColor="darkblue";
 home=createSprite(50, -100, 50, 50);
 home.shapeColor="blue";

 fish=createSprite(200, -100, 10, 10);
 fish.addImage(fishIMG);
 fish.scale=0.05

 //level4
 ground=createSprite(200, -100, 400, 10);
 ground.shapeColor="Red";

 truck=createSprite(100, -100, 10, 10);
 truck.addImage(truckIMG);
 truck.scale=0.2;

 fh=createSprite(500, -100, 10, 10);
 fh.addImage(fhIMG);
 fh.scale=0.3


 //level5
 ship=createSprite(200, -100, 10, 10);
 ship.addImage(shipIMG);
 ship.scale=0.25;

 rock=createSprite(200, -50, 10, 10);
 rock.addImage(rockIMG);
 rock.scale=0.5
 
}

function draw() {
 background(255);

  if(gameState==="Start"){
    background(World);
    fill("red"); 
    textSize(20);


  text("PROBLEMS OF THE WORLD", 100, 50);
    textSize(15);
    text("NAME:", 50, 215);
  start.mousePressed(()=>{
    start.hide();
    info.hide();
    gameState="Note";
    notification.play();
  })
  }
  
  if(gameState==="Note"){
  
    textSize(15);
    text("Hello "+info.value()+",", 10, 50);
    fill("red");
    start.hide();
    info.hide();
    text("WARNING:In this level only collect the water bottles!!!", 10, 70);
    text("STORY: Me and my friend went to a lake and noticed", 10, 100);
    text("that there was so much garbage.Help us clean up at least", 10, 130);
    text("30 water bottles", 10, 160);
    fill("black");
     text("PRESS ENTER TO MOVE ON", 100, 300);
     if(keyDown("enter")){
       gameState="Play";
       trash.y=200;
       salmon.y=300;
       clownfish.y=250;
     }
  }
  if(gameState==="Play"){
    background(ocean);
    start.hide();
    info.hide();
    textSize(20);
    
    fill("red");
    stroke("red");
    textSize(17);
text("score:"+score, 50, 50);

function move(){
  trash.y=random(50, 350);
  trash.x=random(50, 350);
  salmon.y=random(50, 350);
  salmon.x=random(50, 350);
  clownfish.y=random(50, 350);
  clownfish.x=random(50, 350);
}

if(trash.isTouching(salmon)){
  move()
}


    if(mousePressedOver(trash)){
      move()
      score+=1;
      splash.play();
    }
    if(mousePressedOver(salmon)){
      trash.y=random(50, 350);
      trash.x=random(50, 350);
      salmon.y=random(50, 350);
      salmon.x=random(50, 350);
      clownfish.y=random(50, 350);
      clownfish.x=random(50, 350);
      score-=1;
      splash.play();
    }

    if(mousePressedOver(clownfish)){
      trash.y=random(50, 350);
      trash.x=random(50, 350);
      salmon.y=random(50, 350);
      salmon.x=random(50, 350);
      clownfish.y=random(50, 350);
      clownfish.x=random(50, 350);
      score-=1;
      splash.play();
    }

    if(score===10){
      trash.y=300
      salmon.y=350;
      clownfish.y=100;
      text("DID YOU KNOW THAT THE OCEAN ", 50, 200);
      text("IS BEING POLUTED?", 50, 250);
    }

    if(score===20){
      trash.y=300;
      salmon.y=350;
      clownfish.y=100;
      text("Water pollution kills around ", 50, 150);
      text("10,000 people around the world ", 50, 200);
      text("every day - that's 3.6 million people every year ", 50, 250); 
    }

    if(score===30){
      trash.y=300;
      salmon.y=350;
      clownfish.y=100;
      text("40 percent of all lakes and rivers  ", 50, 150);
      text("in the United States are too polluted  ", 50, 200);
      text("for fishing and swimming; ", 50, 250); 
    }

    if(score>31){
      gameState="Note2";
      trash.y=-100;
      salmon.y=-100;
      clownfish.y=-100;
      Yay.play();
    }
}

if(gameState==="Note2"){
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(17);
  text("Me and my friends went on a road trip.", 10, 50);
  text("help us drive to our destination! (use Arrow Keys)", 10, 100);
  text("PRESS SPACE TO PLAY", 100, 350);
  if(keyDown("space")){
    gameState="Level2";
    car3.y=100;
    car2.y=100;
    car.y=350;
  }
}

if(gameState==="Level2"){
  background(track);
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(17);
  text("distance:"+distance+"km", 50, 50);
  distance+=1;
  if(keyDown("right")&&car.x>50&&car.x<350){
    car.x+=5;
   
  }

  if(keyDown("left")&&car.x>50&&car.x<350){
    car.x-=5;

  }

  car2.y+=9
  car3.y+=10

  if(car2.y>400){
    car2.y=-100
    car2.x=random(70, 330);
    
    race.play();
  }

if(car.isTouching(car2)){
  car2.y=-100;
  car2.x=random(70, 330);
  distance=0;
    Crash.play();

}

if(car2.isTouching(car3)){
  car2.y=-100;
  car3.y=-50
  car2.x=random(70, 330);
  car3.x=random(70, 330);
}

  if(car3.y>400){
    car3.y=-50
    car3.x=random(70, 330);
    
    race.play();
  }

  if(car.isTouching(car3)){
  car3.y=-50;
  car3.x=random(70, 330);
  distance=0;
    Crash.play();

}

if(distance>500){
  car2.x=700;
  car3.x=700
  car.y-=8;
  distance=500;
  if(car.y<0){
    gameState="Info"
    car.y=-100;
   Yay.play();
  }
}
}

if(gameState==="Info"){
  start.hide();
  info.hide();
  text("Did you know that using gasoline cars make Global warming happen?", 20, 50);
  fill("black");
  text("PRESS shift to Play", 100, 350);
  if(keyDown("shift")){
    gameState="Note3";
  }
}

if(gameState==="Note3"){
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(17);
  text("Me and my friend saw that there was a polar bear ", 50, 50);
 text("stranded on a ice peice.In this level you need to", 50, 70);
 text(" move some ice peices to help the polar bear get some fish", 50, 90);
 text("When you have caught 10 fishes then take him home(use mouse)", 50, 110);
 text("PRESS space to play", 150, 350);
 if(keyDown("space")){
   gameState="Level3";
   ice2.y=200;
   ice1.y=100;
  home.y=350;
  home.x=350;
  pbear.x=ice1.x-10;
  pbear.y=ice1.y-10;
  fish.y=300;
 }
}

if(gameState==="Level3"){
  background(Artic);
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(17);
  text("HOME", 320, 320);
text(food, 200, 50)
  

  if(ice2.isTouching(ice1)){
    ice1.x=mouseX
    ice1.y=mouseY
    pbear.x=ice2.x
    pbear.y=ice2.y;
    if(food>9){
    if(ice1.isTouching(home)||ice2.isTouching(home)){
      gameState="Info3";
      ice1.y=-100;
      ice2.y=-100;
      pbear.y=-100;
      home.y=-100;
      fish.y=-100;
      Yay.play();

    }
  }
    

  }else{
    ice2.x=mouseX
    ice2.y=mouseY
  }

 if(pbear.isTouching(fish)){
   fish.x=random(50, 350);
   fish.y=random(50, 350);
   food+=1;
   splash.play();
 }
}

if(gameState==="Info3"){
  start.hide();
  info.hide();
  fish.y=-100;
  fill("red");
  stroke("red");
  textSize(17);
  text("Glaciers are polar bears homes and because", 50, 50);
  text("of Global warming glaciers are melting.", 50, 80); 
  text("Did you know that there are only 31,000 polar bears left?", 50, 110);
  text("People are saying that by 2050 there will be no polar bears left.", 50, 140);
  text("Press ENTER TO Contiune", 150, 350);
  if(keyDown("enter")){
    gameState="Note4";
  }
}


if(gameState==="Note4"){
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(17);
text("Me and my friend saw that there was a tree on fire.", 50, 50);
text("Help us drive the firetruck to the fire.", 50, 100);
text("PRESS shift to Play", 150, 350);
if(keyDown("shift")){
  gameState="Level4";
  ground.y=390;
  truck.y=350;
  fh.y=355;
}
}

if(gameState==="Level4"){
background(Wildfire);
start.hide();
info.hide();
fill("black");
textSize(15);
text("Use the up arrow key to jump over the obstacles", 70, 50);
text("Distance traveled:"+firePoints, 20, 20);

text
truck.y+=4
fh.x-=5
firePoints+=1

if(keyDown("up") && truck.y >= 360){
  truck.velocityY = -19;
  fire.play();
}
truck.velocityY = truck.velocityY + 0.6

if(fh.x<-50){
  fh.x=550;
}

if(truck.isTouching(fh)){
  truck.y=350;
  fh.x=550;
  firePoints=0;
  Crash.play();
}

if(firePoints>500){
  fh.y=-100;
  truck.y=360;
  truck.velocityX=5;
  if(truck.x>450){
    gameState="Info4"; 
ground.y=-100;
truck.y=-100;
truck.x=600;
fh.y=-100;
Yay.play();
  }
}
}

if(gameState==="Info4"){
  start.hide();
  info.hide();
  fill("black")
text("The temputures are rising and are making trees burn down.", 50, 50);
text("Since 2000, 15 forest fires in the United States", 50, 80);
text(" have caused at least $1 billion damage each.", 50, 110);
text("Press space to proceed", 150, 350);
if(keyDown("space")){
  gameState="Note5";
  Yay.play();
}
}


if(gameState==="Note5"){
  start.hide();
  info.hide();
  fill("black")
  text("Me and my friends saw that there were alot of people on Earth.", 20, 50);
  text("Help us take these people to mars so earth can be less populated.", 20, 80);
  text("Avoid the astroieds while going to mars.", 50, 110);
  text("Press shift to play", 150, 350);
  if(keyDown("shift")){
    gameState="Level5";
    ship.y=350;
    
    Yay.play();
  }
}


if(gameState==="Level5"){
  background(Space);
  textSize(15);
  fill("RED");
  text(time, 50, 50);
  start.hide();
  info.hide();
  rock.y+=8;
  time+=1;
  if(rock.y>390){
rock.y=-50;
rock.x=random(0, 400);
rock.scale=random(0.5, 0.8);
engine.play();
  }
  if(keyDown("right")){
    ship.x+=5;
  }

  if(keyDown("left")){
    ship.x-=5;
  }

  if(ship.isTouching(rock)){
    rock.y=-50;
    ship.x=200;
    rock.x=random(0, 400);
    time=0;
    rock.scale=random(0.5, 0.8);
    Crash.play();
  }

  if(time>499){
    rock.x=500;
    ship.x=200;
    ship.y-=5;
    score=500;
  }

  if(ship.y<0){
    gameState="Info5"
    ship.y=-50;
    Yay.play();
  }

}

if(gameState==="Info5"){
  start.hide();
  info.hide();
  fill("black")
  text("One billion people were born in 12 years! wow!", 50, 50);
  text("There were more than 125 million births in 2014!", 50, 80);
  text("During the 20th century, the U.S. population tripled!", 50, 110);
  text("The United Nations predicts the world population", 50, 140);
  text("will reach 11 billion by the end of the 21st century!", 50, 170);
  text("Press Enter to Contiune", 150, 350);
  if(keyDown("Enter")){
    gameState="End";

  }
}

if(gameState==="End"){
background(World);
start.hide();
info.hide();
fill("red");
textSize(25);
text("WE NEED TO KEEP OUR", 50, 200);
text("PLANET SAFE", 100, 250);

}
truck.bounceOff(ground);

fh.setCollider("rectangle", 0,0, 20, 20);
rock.setCollider("rectangle", 0, 0, 40, 40);


drawSprites();
}


