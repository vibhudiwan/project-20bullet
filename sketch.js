var car,wall,speed,weight,deformation,thickness ; 

function setup() {
  createCanvas(800,400);
  car=createSprite(100,100, 40, 10);
  wall=createSprite(700,100,thickness,150);
  

}

function draw() {
  background(255,255,255); 
  text("PRESS SPACE TO TEST",400,200);
  text("PRESS r TO RETEST",200,100);

  
  speed=Math.round(random(40,120));
  weight=Math.round(random(400,1500)); 
  
  if(keyDown("space")){
    thickness=random(22,88);
    car.velocityX=speed;
    deformation=0.5*weight*speed*speed/22500;
  }
  if (keyDown("r")||keyDown("R")){
    car.x=100;
    wall.shapeColor=rgb(100,100,100);
    car.velocityX=0;
  }


    car.depth=car.depth+1;
    
  if (isTouching(car,wall))  {

    
    if (keyDown("space")){
      wall.shapeColor="yellow";
    }

    
    car.velocityX=car.velocityX-100;
    car.velocityX=0;
    console.log(deformation);

    if (deformation<101){
     wall.shapeColor="green";
     car.velocityX=0;
    
    }
    if (deformation<181 && deformation>101){
      wall.shapeColor="yellow";
      car.velocityX=0;
    }
    if (deformation>181){
      wall.shapeColor="red";
      car.velocityX=0;
    
     
    }
  
    
    car.x=660;
   
   
  }
    
    
    
  
  drawSprites();
}  


function isTouching(car,wall){
  if (wall.x - car.x < wall.width/2 + car.width/2 && car.x - wall.x < car.width/2 + wall.width/2 && wall.y - car.y < car.height/2 + wall.height/2 && car.y - wall.y < car.height/2 + wall.height/2) {
 
    return true;
}
else {
    return false;
} 
}

