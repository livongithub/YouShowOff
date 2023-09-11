


//fact list game

let xLoc = 200
let yLoc = 200
let xSpeed = 5
let ySpeed = 3

let greenCounter = 252;

let counterArray = 0 
let factsOnLiv = document.getElementById("factsOnLiv")

const factList = ["different facts about me!", 
"I am French Norwegian", 
"I have an older sister", 
"my favorite color is green", 
"I love gnocchis", 
"I speak three languages",
"I was born in London but lived in Paris most of my life",  
"I have been the same foot size since I was 9", 
"I have never had a pet", 
"I studied German for 8 years but can barely remember any of it", 
"I cut my own bangs when I was 5 and it looked horrible", 
"I was that one kid at school with an eye patch", 
"I figurskated before college", 
"I played the guitar", 
"I don't have a middle name", 
"I'm allergic to avocadoes", 
"I'm scared of pigeons"];

let canvas1;
let canvas2;

function setup() {

  canvas1 = createCanvas(400, 400);
  canvas1.parent("game-container")
  rectMode(CENTER)


}


function draw() {
  
    factsOnLiv.innerHTML = factList[counterArray]
  
 
    background(179, 255, 185, 50)
    xLoc += xSpeed
    yLoc += ySpeed
    
    // Updating the location of the ellipse every frame 
    
   
    
    noStroke()
    fill(3, greenCounter, 28)
    ellipse(xLoc, yLoc, 50)
    
    // if xLoc is greater than width, or if XLoc is smaller than 0, change the direction of the ellipse by multiplying by -1
    if(xLoc > width || xLoc < 0){
      xSpeed *= -1
    }
    
    if(yLoc < 0){
      ySpeed *= -1
    }
    
    if(yLoc > height){
      xLoc = 200
      yLoc = 200
      xSpeed = 5
      ySpeed = 3
      counterArray = 0
    }
  rect(mouseX, height-50, 100, 20)
    
    let arbitraryDistance = dist(20, 50, 380, 387)
    
    let collisionDistance = dist(xLoc, yLoc, mouseX, height-50)
    
    if(collisionDistance < 50 && yLoc < height-10){
      yLoc -= 10
  
      greenCounter = random(100, 255)
      
      ySpeed += random(0.2, 0,.9)
      xSpeed += random(0.2, 0,.9)
      
      ySpeed *= -1
      
      counterArray += 1
  
    }
  
    // console.log(greenCounter)
  
    if (counterArray > factList.length-1){
      factsOnLiv.innerHTML = "Now you know everything!"
  }
  
   
}




