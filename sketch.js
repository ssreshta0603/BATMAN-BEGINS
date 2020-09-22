const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var thunder1,thunder2,thunder3,thunder,thund,man;
var drops = [];
var maxDrops = 100;
var umbrella;
function preload(){
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");

}

function setup(){
   createCanvas(400,500);

  engine = Engine.create();
  world  = engine.world;
  umbrella = new Umbrella(200,300,80,50);

  if(frameCount%150===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),4,4));
     }
    }
  
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    var rand = Math.round(random(1,3));
    if(frameCount%100===0){
        thund = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            default : break;
        }
    }
  
    if(thund + 30 === frameCount && thunder){
        thunder.destroy();
    }


  console.log(rand);
for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
}   

