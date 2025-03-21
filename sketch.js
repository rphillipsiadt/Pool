let tables = [];

function setup(){
    createCanvas(1000,1000)
    tables.push(new Table({
        posX:50,
        posY:50,
        width:200,
        length:100,
}))
}

function draw(){
    background(0)
    tables[0].render();
}