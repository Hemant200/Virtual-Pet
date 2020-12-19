//Create variables here
var dog, happy_dog, dog_image
var database
var foodS, food_stock


function preload()
{
dog_image = loadImage("Dog.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,300)
  dog.addImage(dog_image)
  dog.scale = 0.1
 food_stock = database.ref('Food');
  food_stock.on("value",readStock)
  
}


function draw() {  
 background(46,139,87)

//  console.log(food_stock)
  if (keyWentDown(UP_ARROW))
  {
 writeStock(foodS)
  
  }
  //add styles here
  drawSprites();

}
function readStock(data)
{
 foodS = data.val() 
}
function writeStock(x)
{
  if (x<=0)
  {
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}