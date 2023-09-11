
// namespacing a new canvas

let canvasTwo;

var sketchOne = function(p){

    p.setup = function(){
        p.canvasTwo = createCanvas(400, 400);
        p.background(179, 255, 185);
        p.frameRate(1000)
        p.canvasTwo.parent("drawingCanvas")
    }

    p.draw = function(){
        p.noStroke()
        p.fill(30, 150, 50)
        p.ellipse(mouseX, mouseY, 5, 5)
    }

    
}