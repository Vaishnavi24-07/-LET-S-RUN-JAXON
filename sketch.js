var  path , pathIng;
var runner , runnerIng;
var InvisibleGround1
var InvisibleGround2


function preload(){

    //loading image of path and animation of runner
    pathIng = loadImage("path.png");
    runnerIng = loadAnimation("Runner-1.png","Runner-2.png",);

}

function setup(){

    //creating canvas
    createCanvas(400,400);

    //creating bg
    background("black");

    //create a path sprite 
    path = createSprite(200,200);
    path.addImage(pathIng);
    path.scale = 1.3;
    path.velocityY = 3;

    //create a runner sprite
    runner= createSprite(70,350)
    runner.addAnimation("running" ,runnerIng);
    runner.scale = 0.06;

    //creating an invisible  right boundary
    InvisibleGround1 = createSprite(20,200,30,400)
    InvisibleGround1.visible = false;

    //creating an invisible  left boundary
    InvisibleGround2 = createSprite(385,200,30,400)
    InvisibleGround2.visible = false;
    }

function draw(){

    //set bg color 
    background(0);
        

    if (path.y > 400){
            path.y = path.height/2;
    }   

    //runner can move with the help of mouse to right and left
    runner.x = World.mouseX;
    
    if(runner.x < 20)
    {
    runner.x = 20;
    }
    
    if(runner.x > 350)
    {
    runner.x = 350;
    }

    //stopping runner to go out of canvas
    runner.collide(InvisibleGround1); 
    runner.collide(InvisibleGround2); 

drawSprites();
}
