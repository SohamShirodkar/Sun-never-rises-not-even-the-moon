const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }
   
    Engine.update(engine);

    
}

async function getBackgroundImg(){
    var response = await fetch("https://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=04&&hour<=07){
  
     bg ="sunrise3.png"
    }
    else if(hour>=07&&hour<=09){
    
        bg ="sunrise6.png"
      
        }
        else if(hour>=09&&hour<=13){
        
            bg="sunset12.png"
                    }
    backgroundImage= loadImage(bg)
 }
    


