
let creationsContainer = document.getElementById("creations-container")
// let illustrationsCircle = document.getElementById('illustrations')
// let sourceArray = ["img/alpha-goose.png","img/bauhaus.jpg", "img/elements.png", "img/eye-drawing.png", "img/freshman-type.png", "img/joomi.png", "img/meat.png", "img/nft-nyc.png"]
// let creationsCounter = 0;



// creationsContainer.addEventListener("click", ()=>{
//     creationsCounter++
//     if (creationsCounter > sourceArray.length-1){
//         creationsCounter = 0 
//     }

//     illustrationsCircle.src = sourceArray[creationsCounter]
// })

// console.log(creationsCounter)

//making the buttons change on click

//defining the buttons
let factsButton = document.getElementById('facts')
let picturesButton = document.getElementById('pictures')
let creationsButton = document.getElementById('creations')
let titleButton = document.getElementById('title-container')

//defining the containers of the different contents
let gameContainer = document.getElementById('game-container')
let pictureContainer = document.getElementById('image-container')
let handEmoji = document.getElementById('hand-emoji')

// //defining the booleans 
// let factBoolean = true;
// let picturesBoolean = true;
// let creationsBoolean = true;
// let titleBoolean = true;


factsButton.addEventListener("click", ()=>{
//changing the color of the button
    factsButton.style.backgroundColor = "black"
    factsButton.style.color = "white"
    factsButton.style.transition = "300ms"
        //make other buttons white
    picturesButton.style.backgroundColor = "white"
    picturesButton.style.color = "black"
    picturesButton.style.transition = "300ms"

    creationsButton.style.backgroundColor = "white"
    creationsButton.style.color = "black"
    creationsButton.style.transition = "300ms"

//display the selected content
    gameContainer.style.display = "flex"
        //hide other content 
    pictureContainer.style.display = "none"
    creationsContainer.style.display = "none"
    handEmoji.style.display = "none"
})

picturesButton.addEventListener("click", ()=>{
//changing the color of the button
    picturesButton.style.backgroundColor = "black"
    picturesButton.style.color = "white"
    picturesButton.style.transition = "300ms"
         //make other buttons white
    factsButton.style.backgroundColor = "white"
    factsButton.style.color = "black"
    factsButton.style.transition = "300ms"

    creationsButton.style.backgroundColor = "white"
    creationsButton.style.color = "black"
    creationsButton.style.transition = "300ms"

//display the selected content
    pictureContainer.style.display = "flex"
        //hide other content 
    gameContainer.style.display = "none"
    creationsContainer.style.display = "none"
    handEmoji.style.display = "none"
})

creationsButton.addEventListener("click", ()=>{
//changing the color of the button
    creationsButton.style.backgroundColor = "black"
    creationsButton.style.color = "white"
    creationsButton.style.transition = "300ms"
        //make other buttons white
    factsButton.style.backgroundColor = "white"
    factsButton.style.color = "black"
    factsButton.style.transition = "300ms"

    picturesButton.style.backgroundColor = "white"
    picturesButton.style.color = "black"
    picturesButton.style.transition = "300ms"

//display the selected content
    creationsContainer.style.display = "flex"
        //hide other content 
    gameContainer.style.display = "none"
    pictureContainer.style.display = "none"
    handEmoji.style.display = "none"
})

titleButton.addEventListener("click", ()=>{
    //display the selected content
    handEmoji.style.display = "block"
        //hide other content 
    gameContainer.style.display = "none"
    pictureContainer.style.display = "none"
    creationsContainer.style.display = "none"
    
    //reverting buttons to white
    factsButton.style.backgroundColor = "white"
    factsButton.style.color = "black"
    factsButton.style.transition = "300ms"

    picturesButton.style.backgroundColor = "white"
    picturesButton.style.color = "black"
    picturesButton.style.transition = "300ms"

    creationsButton.style.backgroundColor = "white"
    creationsButton.style.color = "black"
    creationsButton.style.transition = "300ms"
})


//circles

circleContainer = document.getElementById('circle')

for(i= 0; i < 150; i++){

    let ellipse = document.createElement("div")

    const maxHorizontalPosition = window.innerWidth/2 + 500
    const randomHorizontalPosition = Math.random() * maxHorizontalPosition

    const maxVerticalPosition = window.innerHeight 
    const randomVerticalPosition = -(Math.random() * 150)

    

    ellipse.style.width = '100px'
    ellipse.style.height = '100px'
    ellipse.style.backgroundColor = `rgb(30, 255, 30)`
    ellipse.style.borderRadius = '50%'
    ellipse.style.position = 'absolute'
    ellipse.style.animation = 'moveVertical 2s ease 1'
    ellipse.style.setProperty('--targetHeight', randomVerticalPosition + 'vh')
    ellipse.style.marginLeft = randomHorizontalPosition + 'px'
    ellipse.style.marginTop = randomVerticalPosition + 'px'
    // ellipse.style.animationDirection = 'alternate-reverse'
    ellipse.style.animationFillMode = 'forwards'

    circleContainer.style.marginLeft = "-70vw"
    circleContainer.style.marginBottom = "-100px"

    //styling the circle
    circleContainer.append(ellipse)
    // ellipse.style.width = Math.random*100 
    // ellipse.style.height = ellipse.style.width
    // ellipse.style.backgroundColor = `rgb(30, ${Math.random*})`

    ellipse.addEventListener('click', ()=>{
        ellipse.style.display = "none"
        ellipse.style.transition = "300ms"
    })
}


//circling through the image 

let photoClick = document.getElementById('photo')
let photoSourceArray = [
    "img/photo1.png",
    "img/photo2.png",
    "img/photo3.png",
    "img/photo4.png"
]
let photoCounter = 0

photoClick.addEventListener('click', ()=>{
    console.log('picture is clicked')
    photoCounter ++

    if(photoCounter > photoSourceArray.length - 1){
        photoCounter = 0
    }

    photoClick.src = photoSourceArray[photoCounter]

})

//drawing canvas code 

// cycling through the sketches
let canvas = document.getElementById('drawingCanvas')
const sketch = document.getElementById('sketch')
let changeButton = document.getElementById('changeDrawing')

let sketchArray = ['img/sketch1.png',
 'img/sketch2.png', 
 'img/sketch3.png', 
 'img/sketch4.png']

let sketchCounter = 0;

changeButton.addEventListener('click', ()=>{
    sketchCounter ++
    if(sketchCounter>sketchArray.length-1){
        sketchCounter = 0
    }
    sketch.src = sketchArray[sketchCounter]
})
console.log(sketchCounter)

// function setup(){
//     createCanvas(400, 400)
//     background(179, 255, 185)
//     canvas.parentElement('#drawingCanvas')
// }

// function draw(){
//     let greenRandom = random(150, 255)
//     fill(30, greenRandom, 50)
//     ellipse(mouseX, mouseY, 5, 5)
// }

// const canvas = document.getElementById('drawing-board');
// const toolbar = document.getElementById('toolbar');
// const ctx = canvas.getContext('2d');

// canvas.width = '400px'
// canvas.height = '400px'

// let isPainting = false
// let lineWidth = 5
// let startX;
// let startY

// toolbar.addEventListener('click', e =>{
//     if(e.target.id === 'clear'){
//         ctx.clearRect(0,0,canvas.width, canvas.height);
//     }
// })

// const paint = (e)=>{
//     if(!isPainting){
//         return;
//     }
//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = 'round'

//     ctxlineTo(e.clientX - canvasOffsetX, e.clientY);
//     ctx.stroke();
// }

// canvas.addEventListener('mousedown', (e)=>{
//     isPainting = true;
//     startX = e.clientX;
//     startY = e.clientY;
// })

// canvas.addEventListener('mouseup', e =>{
//     isPainting = false;
//     ctx.stroke();
//     ctx.beginPath();
// })

// canvas.add