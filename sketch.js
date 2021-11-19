var play,about,playimg,aboutimg,back,backImg,howtoImg,nextImg,aboutbg,g1Img,g2Img,g3Img,g4Img,g5Img,liftImg,plrWR,plrWL,plrShotR,plrShotL,plrst,plrstl,bul1Img,bul2Img,heliImg,victoryImg
var bg1,bg2,bg3,bg4;
var wallGroup,wall2Group,wall3Group,wall4Group,gsoundGroup,dsoundGroup,msoundGroup,ssoundGroup,wls,wlss,wlsss,wlssss,myfont
var wallImg,oilImg,sandImg,jeepImg,boxImg,buildImg
var Avgscore=0
var intelCollected= 0
var hp = 100
var gameState="wait"
var robo,robodie,lostimg

function preload(){
    aboutimg=loadImage("buttons/about.png")
    nosoundoimg=loadImage("buttons/mute.png")
    soundimg=loadImage("buttons/sound.png")
    backImg=loadImage("buttons/back.png")
    playimg=loadImage("buttons/play.png")
    logoimg=loadImage("load/Logo.gif")

    bg1=loadImage("maps/bgl1.png")
    bg2=loadImage("maps/bgl2.png")
    bg3=loadImage("maps/bgl3.png")

    aboutbg=loadImage("load/about.jpg")
    howtoImg=loadImage("load/help.png")
    nextImg=loadImage("buttons/play.png")

    bul1Img=loadImage("shoot/bul1.png")
    bul2Img=loadImage("shoot/bul2.png")
  
myfont = loadFont("fonts/myfonts.ttf")

lostimg=loadImage("load/sEnd.jpg")
victoryImg=loadImage("load/vEnd.jpg")
    wallImg=loadImage("ground/bwall.png")
    oilImg=loadImage("ground/oildrum.png")
    sandImg=loadImage("ground/sandbag.png")
    boxImg=loadImage("ground/box.png")
    jeepImg=loadImage("ground/jeep.png")
    buildImg=loadImage("ground/bulding.png")
    heliImg=loadImage("ground/heli.png")


    plrWR = loadAnimation("walk/walking1.png","walk/walking2.png","walk/walking3.png","walk/walking4.png","walk/walking5.png","walk/walking6.png")
    plrWL = loadAnimation("walk/walkingl1.png","walk/walkingl2.png","walk/walkingl3.png","walk/walkingl4.png","walk/walkingl5.png","walk/walkingl6.png")
    plrst=loadAnimation("stand/knife1.png")
    plrstl=loadAnimation("stand/knife2.png")
    plrst.scale = 0.50
   // plrst.setCollider("rectangle",0,0,100,200)

   robo = loadImage("robo/r1.png")
   robodie = loadImage("robo/r2.png")
   robol = loadImage("robo/r3.png")


ms =loadSound("audio/metal.mp3")
ss = loadSound("audio/shot.mp3")

}

function setup(){
createCanvas(windowWidth,windowHeight)
textFont(myfont)
textSize(30)

play=createSprite(110,windowHeight/2,20,20)
play.addImage(playimg)
play.scale=0.75




/*sound=createSprite(110,windowHeight/3.5+100,20,20)
sound.addImage(soundimg)
sound.scale=0.75
nosound=createSprite(110,windowHeight/3.5+200,20,20)
nosound.addImage(nosoundoimg)
nosound.scale=0.75*/

back=createSprite(windowWidth/2,windowHeight-50,30,20)
back.visible=false
back.addImage(backImg)

plr=createSprite(200,200,20,50)
plr.visible=false
plr.scale=1.15
plr.addAnimation("standing",plrst)
plr.addAnimation("standingl",plrstl)
plr.addAnimation("walkingR",plrWR)
plr.addAnimation("walkingL",plrWL)
plr.setCollider("rectangle",0,0,100,170)




wallGroup = new Group();
wall2Group = new Group();
wall3Group = new Group()
wall4Group = new Group();
bulletGroup = new Group();
gsoundGroup = new Group();
dsoundGroup = new Group();
msoundGroup = new Group();
ssoundGroup = new Group();
enyBulletGroup = new Group();
enybBulletGroup = new Group();
enycBulletGroup = new Group()
buttonGroup = new Group();
}

function draw(){

if (gameState==="wait"){

    background(logoimg)
    play.visible=true
}
    


if(mousePressedOver(play)){
    gameState="about"

}


if(gameState==="about"){
    background(aboutbg)
    play.visible=false
   // sound.visible=false
    //nosound.visible=false

    var next = createSprite(windowWidth/2,windowHeight-100)
    next.addImage(nextImg)
    
    if(mousePressedOver(next)){
        gameState="Level 1"
   
    }

    buttonGroup.add(next)
   
}

if(gameState==="play0"){
    background(howtoImg)
    play.visible=false
    //sound.visible=false
    //nosound.visible=false
    buttonGroup.destroyEach()

var change =  createSprite(windowWidth/2,windowHeight-100)
change.addImage(nextImg)

if(mousePressedOver(change)){
    gameState="play"

}
  


}


if (gameState==="Level 1"){
    background(bg1)
    buttonGroup.destroyEach()
    play.visible=false
    //sound.visible=false 
    //nosound.visible=false
    plr.visible=true
    buttonGroup.destroyEach()
    
   
    if(hp<=0 ){
          gameState="lost"
        console.log("lost")
    }
    
    



var wall1 = createSprite(windowWidth/2,windowHeight-20,windowWidth,windowHeight*0+5)
wall1.visible = false
var wall2 = createSprite(windowWidth/40,windowHeight/2,windowWidth*0+5,windowHeight)    
wall2.visible = false
var wall3 = createSprite(windowWidth*-10,windowHeight/2,windowWidth*0+5,windowHeight)
wall3.visible = false

var wall4 = createSprite(windowWidth/2.5,windowHeight/1.3)
wall4.addImage(wallImg)
wall4.scale=0.7

var wall5 = createSprite(windowWidth/2.9,windowHeight/1.1)
wall5.addImage(boxImg)
wall5.scale=0.3
wall5.setCollider("rectangle",0,0,320,320)

var wall6 = createSprite(windowWidth/2.9,windowHeight/1.3)
wall6.addImage(boxImg)
wall6.scale=0.3
wall6.setCollider("rectangle",0,0,320,320)

var wall7 = createSprite(windowWidth/3.6,windowHeight/1.1)
wall7.addImage(boxImg)
wall7.scale=0.3
wall7.setCollider("rectangle",0,0,320,320)

var wall8 = createSprite(windowWidth/1.6,windowHeight/1.25)
wall8.addImage(jeepImg)
wall8.scale = 0.9
wall8.depth = 0.25
wall8.setCollider("rectangle",0,-1000,0,0)

var wall9 = createSprite(windowWidth/1.2,windowHeight/1.25)
wall9.addImage(jeepImg)
wall9.scale= 0.9
wall9.depth = 0.25
wall9.setCollider("rectangle",0,-1000,0,0)
var exit =createSprite(displayWidth-7,displayHeight/2+183,4,125) 
exit.shapeColor="black"


wls = [wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,exit]

for(var i = 0;i<10;i++){
    wallGroup.add(wls[i]);
  }

plrMovement();
spawnplrBullet();
//spawnenyBullet();
audioSound();


     


if(plr.isTouching(exit)){
     gameState="Level 2"
     plr.x = windowWidth/60
    plr.y= windowHeight-50
 }

}


if(gameState==="Level 2"){
    background(bg1)
    wallGroup.destroyEach();
    
    play.visible=false
    //sound.visible=false 
   // nosound.visible=false
    plr.visible=true 
    
    if(hp<=0 ){
           gameState="lost"
        console.log("lost")
    }
    
    



    var wall10 = createSprite(windowWidth/2,windowHeight-20,windowWidth,windowHeight*0+5)
    var wall11 = createSprite(windowWidth/90,windowHeight/2,windowWidth*0+5,windowHeight)    

    var wall12 = createSprite(windowWidth-30,windowHeight/2)
    wall12.addImage(buildImg)
    wall12.scale=0.5
    wall12.setCollider("rectangle",40,0,40,100000)

    var wall13 = createSprite(windowWidth-100,windowHeight/1.1)
    wall13.addImage(boxImg)
    wall13.scale=0.3
    wall13.setCollider("rectangle",0,0,320,320)
    var wall14 = createSprite(windowWidth-100,windowHeight/1.3)
    wall14.addImage(boxImg)
    wall14.scale=0.3
    wall14.setCollider("rectangle",0,0,320,320)
    var wall15 = createSprite(windowWidth-100,wall14.height-40)
    wall15.addImage(boxImg)
    wall15.scale=0.3
    wall15.setCollider("rectangle",0,0,320,320)
    var wall16 = createSprite(windowWidth-100,windowHeight/1.9)
    wall16.addImage(boxImg)
    wall16.scale=0.3
    wall16.setCollider("rectangle",0,0,320,320)
     var wall17 = createSprite(windowWidth-210,windowHeight/1.1)
     wall17.addImage(boxImg)
     wall17.scale=0.3
     wall17.setCollider("rectangle",0,0,320,320)

     var wall18 = createSprite(windowWidth-220,windowHeight/1.45)
     wall18.addImage(oilImg)
     wall18.scale=1.4
     wall18.setCollider("rectangle",10,30,70,130)
     var wall19 = createSprite(windowWidth-320,windowHeight/1.2)
     wall19.addImage(oilImg)
     wall19.scale=1.2
     wall19.setCollider("rectangle",10,30,70,130)

    var wall20 = createSprite(windowWidth/5,windowHeight/1.25)
    wall20.addImage(jeepImg)
    wall20.scale = 0.9
    wall20.depth = 0.25
    wall20.setCollider("rectangle",0,-1000,0,0)

    var wall21 = createSprite(windowWidth/2.8,windowHeight/1.25)
    wall21.addImage(jeepImg)
    wall21.scale= 0.9
    wall21.depth = 0.25
    wall21.setCollider("rectangle",0,-1000,0,0)

     var exit2 = createSprite(windowWidth-30,windowHeight/3.5,windowWidth*0+5,windowHeight*0+150)
     exit2.shapeColor="black"

     var enya = createSprite(windowWidth/1.4,windowHeight/1.1)
     enya.addImage(robol)
     enya.scale = 0.5
     enya.depth=0.5
     enya.setCollider("rectangle",0,-10000,0,0)


    var enyhita = createSprite(enya.position.x -200,enya.position.y-22,500,10)
    enyhita.visible = false
  
     
wlss = [wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,exit2,enya]

for(var i = 0;i<14;i++){
    wall2Group.add(wlss[i]);
  }

  var enyaBullet = createSprite(enya.position.x,enyhita.position.y,10,1)
  enyaBullet.visible=false
  enyaBullet.addImage(bul2Img)
  enyaBullet.scale = 0.1
  enyaBullet.setCollider("rectangle",0,0,10,1)
  if(enyhita.isTouching(plr)){
      enyaBullet.visible=true;
      enyaBullet.velocityX = -50
      ss.play()
  }    
    if(plr.isTouching(enyBulletGroup)){
        enyBulletGroup.destroyEach()
        hp = hp-10
    }
  
    enyaBullet.lifetime= 50;
    enyBulletGroup.add(enyaBullet)
   

  
  

  
if(plr.isTouching(exit2)){
    gameState="Level 3"
    plr.x = windowWidth/15
    plr.y = windowHeight/3.5
}
  

 plrMovement()

}

if(gameState === "Level 3"){
    background(bg2)
    wall2Group.destroyEach()
    play.visible=false
   // sound.visible=false 
  //  nosound.visible=false

  if(hp<=0 ){
        gameState="lost"
    console.log("lost")
}


  var wall22 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight*0+5)
  wall22.visible=false
  var wall23 = createSprite(windowWidth-5,windowHeight/4,windowWidth*0+5,windowHeight*0+500)
  wall23.visible=false
  var wall24 = createSprite(windowWidth/160,windowHeight/4,windowWidth*0+5,windowHeight*0+500)
  wall24.visible=false
  var wall25 = createSprite(windowWidth/2,windowHeight/160,windowWidth,windowHeight*0+5)
  wall25.visible = false
  var exit3 = createSprite(windowWidth-5,windowHeight/2.8,windowWidth*0+5,windowHeight*0+200)
  exit3.shapeColor="black"

var intel1 = createSprite(windowWidth/1.75,windowHeight/2.3,windowWidth*0+200,windowHeight*0+100)
intel1.visible = false
var intel2 = createSprite(windowWidth/1.35,windowHeight/2.3,windowWidth*0+200,windowHeight*0+100)
intel2.visible = false


    var enyb = createSprite(windowWidth-170,windowHeight/2.3)
    enyb.addImage(robol)
    enyb.scale = 0.5
    enyb.depth=0.5
    enyb.setCollider("rectangle",0,-10000,0,0)
   var enyhitb = createSprite(enyb.position.x -300,enyb.position.y-22,500,10)
   enyhitb.visible = false


  wlsss = [wall22,wall23,wall24,wall25,enyb,exit3]

for(var i = 0;i<5;i++){
    wall3Group.add(wlsss[i]);
  }
   
  var enybBullet = createSprite(enyb.position.x,enyhitb.position.y,10,1)
  enybBullet.visible=false
  enybBullet.addImage(bul2Img)
  enybBullet.scale = 0.1
  enybBullet.setCollider("rectangle",0,0,10,1)
  if(enyhitb.isTouching(plr)){
      enybBullet.visible=true;
      enybBullet.velocityX = -50
      ss.play()
  }    
    if(plr.isTouching(enyBulletGroup)){
        enyBulletGroup.destroyEach()
        hp = hp-10
    }
  
    enybBullet.lifetime= 50;
    enyBulletGroup.add(enybBullet)
    
    if(plr.isTouching(intel1)||plr.isTouching(intel2)){
        text("Press 's' To collect Intel",windowWidth/1.5,windowHeight/3.2)
        
    }

    if(plr.isTouching(intel1)&&keyWentUp("s")){
        
        intel1.x = windowWidth*0
        intel1.y = windowHeight*0
        intelCollected = intelCollected=1
       
    }

    if(plr.isTouching(intel2)&&keyWentUp("s")){
        intel2.x = windowWidth*0
        intel2.y = windowHeight*0
        intelCollected = intelCollected=1
    }
    



    if(plr.isTouching(exit3)){
        gameState="Level 4"

    }
    



plrMovement()

}

if(gameState==="Level 4"){
    wall3Group.destroyEach()
    background(bg3)
    play.visible=false
   // sound.visible=false 
  //  nosound.visible=false

  if(hp<=0 ){
      gameState="lost"
    console.log("lost")
}

    var wall26 = createSprite(windowWidth/2,windowHeight/1.45,windowWidth,windowHeight*0+5)
    wall26.visible = false
    var wall27 = createSprite(windowWidth-5,windowHeight/3,windowWidth*0+5,windowHeight)
    wall27.visible = false
    var wall28 = createSprite(windowWidth/90,windowHeight/3,windowWidth*0+5,windowHeight)
    wall28.visible = false
    
    var heli  = createSprite(windowWidth/1.5,windowHeight/2.25)
    heli.addImage(heliImg)
    heli.scale = 1.5
    heli.setCollider("rectangle",120,0,100,200)
    heli.depth = 0.5

    wlssss = [wall26,wall27,wall28]

for(var i = 0;i<3;i++){
    wall4Group.add(wlssss[i]);
  }

  if(plr.isTouching(heli)){
      fill(0)
      stroke("red")
strokeWeight(3)
    text("PRESS 's' TO ENTER HELICOPTER ",windowWidth/4,windowHeight/4)
  }

  if(plr.isTouching(heli)&&keyDown("s")){
     gameState = "vEnd"

  }
    plrMovement()
    spawnplrBullet()


}



/*if(gameState==="vEnd"){
    background(vendImg)
    text("AvgScore:"+Avgscore+hp/2+intelCollected)
}

if(gameState==="send"){
    background(sendImg)
}*/

if (gameState==="lost"){
    background(lostimg)
    plr.visible=false
    wallGroup.destroyEach()
    wall2Group.destroyEach()
    wall3Group.destroyEach()
    wall4Group.destroyEach()

if(keyDown("r") ){
    gameState="wait"
    intelCollected=0
    hp=100
    plr=createSprite(200,200,20,50)
    plr.visible=false
    plr.scale=1.15
    plr.addAnimation("standing",plrst)
    plr.addAnimation("standingl",plrstl)
    plr.addAnimation("walkingR",plrWR)
    plr.addAnimation("walkingL",plrWL)
    plr.setCollider("rectangle",0,0,100,170)
    

}
}






    drawSprites()   

  
if(gameState==="vEnd"){
 textSize(50)
   stroke("black")
        strokeWeight(2)
        fill("red")
background(victoryImg)
    text("Mission Success Rate :"+(Avgscore+hp/2+intelCollected)*2 + "%",windowWidth/3,windowHeight/2)
    
    textSize(60)
   stroke("red")
        strokeWeight(2)
        fill("blue")
    text("YOU WERE OUR LAST HOPE !!!!",windowWidth/8,windowHeight/3)
}

    if((gameState==="Level 1" )|| (gameState==="Level 2") || (gameState==="Level 3") || (gameState==="Level 4")){
        stroke("black")
        strokeWeight(2)
        fill("red")
        textSize(26)
    text("Intelcollected : "+intelCollected,100,50)
    
    text("Health : "+hp,windowWidth-200,50)
    
    text(gameState , windowWidth/2,50)
        }
}



function spawnplrBullet(){

var bullet =createSprite(plr.position.x,plr.position.y-17,10,1)
bullet.visible=false

   if(keyDown("e") && keyDown("RIGHT_ARROW") || keyDown("e") && keyDown("d")){
    bullet.visible=true
    bullet.velocityX = 5
    plr.x=plr.x+0
    }

    if(keyDown("q") && keyDown("LEFT_ARROW") || keyDown("q") && keyDown("a")){
        bullet.visible=true
        bullet.velocityX = -5
        }

        bullet.lifetime = 100 ; 
        bulletGroup.add(bullet)
        bullet.lifetime = 50
    
}


function plrMovement(){
    plr.velocityY = 15
plr.collide(wallGroup)
plr.collide(wall2Group)
plr.collide(wall3Group)
plr.collide(wall4Group)

if(keyDown("LEFT_ARROW")||keyDown("a")){
    plr.changeAnimation("walkingL",plrWL)
    plr.x=plr.x-6
}
else if(keyWentUp("LEFT_ARROW")||keyWentUp("a")){
   
    plr.changeAnimation("stop",plrstl)
   
}

if(keyDown("RIGHT_ARROW")||keyDown("d")){
   
    plr.changeAnimation("walkingR",plrWR)
    plr.x=plr.x+10
    plr.scale = 1.15
    //plr.setCollider("rectangle",plr.height,plr.width,5,20)
}
else if(keyWentUp("RIGHT_ARROW")||keyWentUp("d")){
   
    plr.changeAnimation("standingL",plrst)
   
}


if(keyDown("UP_ARROW")||keyDown("w") && plr.y >= 60) {
    plr.velocityY = -16;
}

}

function audioSound(){
    if(keyDown("d") && plr.isTouching(gsoundGroup)){

        if(!gs.isPlaying()){
            gs.play()
          } 
    }
 
}





