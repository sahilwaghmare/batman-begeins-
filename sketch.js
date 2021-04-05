var canvas;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var umbrella;

var maxDrops = 100;

var drops = [];

var bg;

var thunder;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
   
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    bg = loadImage("RCqXNYb.jpg");
    
}

function setup(){
   canvas = createCanvas(500,550);
   engine = Engine.create();
   world = engine.world;
   
   umbrella = new Umbrella(250,440);

   if(frameCount%1===0){
    for(var i = 0;i<maxDrops;i++){
        drops.push(new Drop(random(0,500),random(0,300)));  
    }
}

}

function draw(){
    background(bg);
    Engine.update(engine);

        for(var i = 0;i<maxDrops;i++){
            drops[i].display();
            drops[i].update();    
        }
        
        umbrella.display();

    if(frameCount % 25 === 0){
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1:thunder = createSprite(380,70,5,5);
               thunder.addImage(thunder1);
               thunder.scale = 0.4;
               thunder.lifetime = 4;
        break;
        case 2:thunder = createSprite(70,50);
               thunder.addImage(thunder2);
               thunder.scale = 0.35;
               thunder.lifetime = 4;
        break;
        case 3:thunder = createSprite(210,70);
               thunder.addImage(thunder3);
               thunder.scale = 0.35;
               thunder.lifetime = 4;
        break;
        case 4:thunder = createSprite(290,30);
               thunder.addImage(thunder4);
               thunder.scale = 0.38;
               thunder.lifetime = 4;
        break;
        default:break;                            
    }
}

    drawSprites();
}   

