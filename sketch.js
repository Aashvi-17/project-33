const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 

var plinkos = [];
var divisions=[]
var divisionHeight=300;

var particle=null;
var turn=0;
var score =0;
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20);
  fill("white");
  text("Score :"+score,20,30);
 text("500 ",30,530);
 text("300 ",100,530);
 text("200 ",180,530);
 text("100 ",260,530);
 text("50 ",340,530);
 
 text("50 ",420,530);
 text("100 ",500,530);
 text("200 ",580,530);
 text("300 ",660,530);
 text("500 ",740,530);
  Engine.update(engine);
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
 ground.display();  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   
     
   }
   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760 )
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 

                 if ( turn>= 5)
                  gameState ="end";                          
             }
             else  if (particle.body.position.x > 301 && particle.body.position.x < 600 ) 
             {
                 score=score+100;      
                 particle=null;
                

                 if ( turn>= 5)
                  gameState ="end";                          
             }
             else  if (particle.body.position.x > 601 && particle.body.position.x < 900 ) 
             {
                 score=score+200;      
                 particle=null;
                

                 if ( turn>= 5)
                  gameState ="end";                          
             }
             

            }
          }
           // console.log(score);
          
          
            
}
function mousePressed()
{
  if(gameState!=="end")
  {
    turn++;
    particle=new Particle(mouseX, 10, 10, 10); 
  }
}
