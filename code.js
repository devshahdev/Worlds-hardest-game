var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e13f0226-cee6-442d-8457-2553ea7b09df","160d9d43-186a-4559-8d4a-161eb5346cdd","7c904a11-3a72-4de7-a2e3-587e99b9501f","bdede009-da19-4e4c-8cd6-4d8e6b58156b","15e271e6-a4ee-46d0-abe7-41bae96a875b","ec87e9fc-398a-4805-a3e4-d135b8a1d70d","5a0d022f-ad68-46f7-b4e0-f225670a6978","04f22d71-6309-4b1d-9975-24c407480645","ded8d843-a7c7-4d88-aef1-352a82e3b7af","5770263d-245c-4cf4-a13b-c8a8e7ec169e"],"propsByKey":{"e13f0226-cee6-442d-8457-2553ea7b09df":{"name":"virus03_03_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pqt4l28kiHNsUuKlU3Wt7ifHfiV924ug","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/e13f0226-cee6-442d-8457-2553ea7b09df.png"},"160d9d43-186a-4559-8d4a-161eb5346cdd":{"name":"building_25_1","sourceUrl":null,"frameSize":{"x":100,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"hyWnlU_XDeUXsupR9COsAzmWBJqVoJdm","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":56},"rootRelativePath":"assets/160d9d43-186a-4559-8d4a-161eb5346cdd.png"},"7c904a11-3a72-4de7-a2e3-587e99b9501f":{"name":"building_22_1","sourceUrl":null,"frameSize":{"x":100,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"ty31gsfYMTKkrnmeYqtrojP5EiWwRsv2","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":67},"rootRelativePath":"assets/7c904a11-3a72-4de7-a2e3-587e99b9501f.png"},"bdede009-da19-4e4c-8cd6-4d8e6b58156b":{"name":"virus03_04_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"9HOzk8gnex2VUEbciANqCFpYFagm56W5","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/bdede009-da19-4e4c-8cd6-4d8e6b58156b.png"},"15e271e6-a4ee-46d0-abe7-41bae96a875b":{"name":"texture_07_1","sourceUrl":null,"frameSize":{"x":250,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"yf2ZoHv27Z2.LpIuo_8LUOgNHhge8cLs","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":30},"rootRelativePath":"assets/15e271e6-a4ee-46d0-abe7-41bae96a875b.png"},"ec87e9fc-398a-4805-a3e4-d135b8a1d70d":{"name":"texture_07_2","sourceUrl":null,"frameSize":{"x":30,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"uIlQLa1ZNiyPUeIL6mk0Pm5uFp4aH8nG","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":200},"rootRelativePath":"assets/ec87e9fc-398a-4805-a3e4-d135b8a1d70d.png"},"5a0d022f-ad68-46f7-b4e0-f225670a6978":{"name":"texture_07_2_copy_1","sourceUrl":null,"frameSize":{"x":180,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"cc2CtOg1qeWeJz.MHDFxVx42yG3fXK9y","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":30},"rootRelativePath":"assets/5a0d022f-ad68-46f7-b4e0-f225670a6978.png"},"04f22d71-6309-4b1d-9975-24c407480645":{"name":"texture_07_2_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":30,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"ArpcjAbsgv7sTT5d5gJOKAvMHmPkYIli","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":80},"rootRelativePath":"assets/04f22d71-6309-4b1d-9975-24c407480645.png"},"ded8d843-a7c7-4d88-aef1-352a82e3b7af":{"name":"blue_hoodie_hands_in_hoodie_1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"8AfVj39AF9NDQjUn3NBKZ0.DOOs6fwpg","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/ded8d843-a7c7-4d88-aef1-352a82e3b7af.png"},"5770263d-245c-4cf4-a13b-c8a8e7ec169e":{"name":"doctor-mask-corona-virus-protection-isolated-white-background-clipping-path-177924693.jpg_1","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"vpHAj2MdL_5kgdvWr5i2JR3XABYFj8AJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/5770263d-245c-4cf4-a13b-c8a8e7ec169e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life=5;
var person,shop,house,mask;
var germ1,germ2,germ3,germ4,germ5,germ6,germ7,germ8,germ9,germ10;
var wall1,wall2,wall3,wall4,wall5;
var gameState="serve";
person = createSprite(40,325,20,20);
person.setAnimation("blue_hoodie_hands_in_hoodie_1");
house = createSprite(40,370,20,20);
house.setAnimation("building_25_1");
shop = createSprite(150,225,20,20);
shop.setAnimation("building_22_1");
wall1 = createSprite(100,270,250,30);
wall1.setAnimation( "texture_07_1");
wall2 = createSprite(220,185,30,200);
wall2.setAnimation("texture_07_2");
wall3 = createSprite(145,85,180,30);
wall3.setAnimation("texture_07_2_copy_1");
wall4 = createSprite(65,110,30,80);
wall4.setAnimation("texture_07_2_copy_1_copy_1");
wall5 = createSprite(65,240,30,80);
wall5.setAnimation("texture_07_2_copy_1_copy_1");
germ1 = createSprite(100,295,20,20);
germ1.setAnimation("virus03_03_1");
germ2 = createSprite(200,387,20,20);
germ2.setAnimation("virus03_04_1");
germ3 = createSprite(245,275,20,20);
germ3.setAnimation("virus03_03_1");
germ4 = createSprite(390,225,20,20);
germ4.setAnimation("virus03_04_1");
germ5 = createSprite(245,175,20,20);
germ5.setAnimation("virus03_03_1");
germ6 = createSprite(390,125,20,20);
germ6.setAnimation("virus03_04_1");
germ7 = createSprite(245,80,20,20);
germ7.setAnimation("virus03_03_1");
germ8 = createSprite(210,10,20,20);
germ8.setAnimation("virus03_04_1");
germ9 = createSprite(90,60,20,20);
germ9.setAnimation("virus03_03_1");
germ10 = createSprite(195,175,20,20);
germ10.setAnimation("virus03_04_1");
mask = createSprite(300,380,20,20);
mask.setAnimation("doctor-mask-corona-virus-protection-isolated-white-background-clipping-path-177924693.jpg_1");
playSound("assets/stranger-things-theme-song.mp3",true);
function draw() {
background("white");
textSize(28);
fill("black");
text("Lives:" + life,0,25);
if (gameState == "serve"){
  //display text
  textSize(35);
  fill("red");
  text("Press space to start",80,340);
}
if (gameState == "play") {
personMovement();
if (life==0) {
stopSound("assets/My-Audio1.mp3");
playSound("assets/My-Audio.mp3");
 gameState="end"; 
 
}
}
if (gameState == "end") {
 background("black");
  textSize(35);
  fill("White");
  text("You died due to the virus",0,100);
  textSize(35);
  fill("White");
  text("Game credits",50,150);
  textSize(35);
  fill("White");
  text("Animation- Dev shah",50,200);
  textSize(35);
  fill("White");
  text("Sound- Dev shah",50,250);
  textSize(35);
  fill("White");
  text("Coding- Dev shah",50,300);
  textSize(15);
  fill("White");
  text("Thanks for playing please reload the site to play once again",0,350);
 person.destroy();
 wall1.destroy();
 wall2.destroy();
 wall3.destroy();
 wall4.destroy();
 wall5.destroy();
 house.destroy();
 shop.destroy();
 germ1.destroy();
 germ2.destroy();
 germ3.destroy();
 germ4.destroy();
 germ5.destroy();
 germ6.destroy();
 germ7.destroy();
 germ8.destroy();
 germ9.destroy();
 germ10.destroy();
 mask.destroy();
}
createEdgeSprites();
germ1.bounceOff(wall1);
germ1.bounceOff(edges);
germ2.bounceOff(wall2);
germ2.bounceOff(edges);
germ3.bounceOff(wall2);
germ3.bounceOff(edges);
germ4.bounceOff(wall2);
germ4.bounceOff(edges);
germ5.bounceOff(wall2);
germ5.bounceOff(edges);
germ6.bounceOff(wall2);
germ6.bounceOff(edges);
germ7.bounceOff(wall2);
germ7.bounceOff(edges);
germ8.bounceOff(wall3);
germ8.bounceOff(edges);
germ9.bounceOff(wall3);
germ9.bounceOff(edges);
germ10.bounceOff(wall2);
germ10.bounceOff(edges);
person.bounceOff(edges);
person.bounceOff(wall1);
person.bounceOff(wall2);
person.bounceOff(wall3);
person.bounceOff(wall4);
person.bounceOff(wall5);
person.bounceOff(house);
if (keyDown("space")) {
 personMovement();
germ1.velocityY=5;
germ2.velocityY=-5;
germ3.velocityX=7;
germ4.velocityX=-7;
germ5.velocityX=7;
germ6.velocityX=-7;
germ7.velocityX=7;
germ8.velocityY=2;
germ9.velocityY=-2;
germ10.velocityX=-5;
gameState="play";  
}
if (person.isTouching(germ1)||person.isTouching(germ2)||person.isTouching(germ3)||person.isTouching(germ4)||person.isTouching(germ5)||person.isTouching(germ6)||person.isTouching(germ7)||person.isTouching(germ8)||person.isTouching(germ9)||person.isTouching(germ10)) {
life=life-1; 
person.x=40;
person.y=325;
stopSound("assets/stranger-things-theme-song.mp3");
stopSound("assets/My-Audio1.mp3");
playSound("assets/gta-v-death-sound-effect-102.mp3");
playSound("assets/My-Audio1.mp3",true);
}
if (person.isTouching(shop)) {
 background("black");
  textSize(35);
  fill("White");
  text("You won",50,50);
  textSize(35);
  fill("White");
  text("Game credits",50,100);
  textSize(35);
  fill("White");
  text("Animation- Dev shah",50,150);
  textSize(35);
  fill("White");
  text("Sound- Dev shah",50,200);
  textSize(35);
  fill("White");
  text("Coding- Dev shah",50,300);
  textSize(15);
  fill("White");
  text("Thanks for playing please reload the site to play once again",0,350);
 wall1.destroy();
 wall2.destroy();
 wall3.destroy();
 wall4.destroy();
 wall5.destroy();
 house.destroy();
 germ1.destroy();
 germ2.destroy();
 germ3.destroy();
 germ4.destroy();
 germ5.destroy();
 germ6.destroy();
 germ7.destroy();
 germ8.destroy();
 germ9.destroy();
 germ10.destroy();
 mask.destroy();
}
if (person.isTouching(mask)) {
  life=life+1;
  mask.destroy();
  stopSound("assets/My-Audio1.mp3");
  stopSound("assets/stranger-things-theme-song.mp3");
  playSound( "assets/gta-san-andreas-mission-complete-sound-hq.mp3");
  playSound("assets/My-Audio1.mp3",true);
}

drawSprites();
  
}
function personMovement(){
if (keyDown("LEFT_ARROW")) {
person.x=person.x-4;  
  }
if (keyDown("RIGHT_ARROW")) {
person.x=person.x+4; 
}
if (keyDown(UP_ARROW)) {
person.y=person.y-4;  
}
if (keyDown("DOWN_ARROW")) {
person.y=person.y+4;  
}
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
