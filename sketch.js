let tables = [];

function setup(){
    createCanvas(1000,1000)
    tables.push(new Table({
        posX:50,
        posY:50,
        width:600,
        length:300,
        radius:10
    }))
    angleMode(DEGREES);
}

function draw(){
    background(200)
    // noLoop()
    tables[0].render();
    tables[0].renderBalls();
}
// Checks if the mouse clicked
function mousePressed(){
    tables[0].hitBall(mouseX,mouseY)
}