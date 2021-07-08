var small_body_of_water,air_car,water_image,plane_image
function preload(){
  water_image= loadImage('sea.png')
  plane_image=loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
}

function setup(){
  createCanvas(400,400);
  small_body_of_water=createSprite(300,300,400,400)
  small_body_of_water.addImage(water_image)
  small_body_of_water.velocityX=-1.5
  air_car=createSprite(200,300,50,50)
  air_car.addAnimation('I like trains',plane_image)
}

function draw() {
//  background("blue");
  if(small_body_of_water.x<100){
    small_body_of_water.x=small_body_of_water.width/2
  }
}
