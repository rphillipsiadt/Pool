class Table{
    constructor(obj){
        this.pos = createVector(obj.posX,obj.posY);
        this.width = obj.width;
        this.length = obj.length;
        this.colour = obj.colour ?? color(21,88,67);
        this.balls = []
        this.generateBalls()
    }

    render(){
        push();
        translate(this.pos.x,this.pos.y);
        rectMode(CORNERS);
        fill(this.colour);
        rect(0,0,this.width,this.length);
        pop();
    }

    generateBalls(){
        this.balls.push(new CueBall({radius:10,velX:0,velY:0,posX:120,posY:this.length/2}));
        this.balls.push(new BlackBall({radius:10,velX:0,velY:0,posX:this.width-150,posY:this.length/2}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150-(2*sqrt(300)),posY:this.length/2}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150+(2*sqrt(300)),posY:this.length/2}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150+(2*sqrt(300)),posY:this.length/2-40}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150+(2*sqrt(300)),posY:this.length/2+40}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150+sqrt(300),posY:this.length/2-10}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150,posY:this.length/2+20}));
        this.balls.push(new RedBall({radius:10,velX:0,velY:0,posX:this.width-150,posY:this.length/2-20}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150+(2*sqrt(300)),posY:this.length/2+20}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150+(2*sqrt(300)),posY:this.length/2-20}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150+sqrt(300),posY:this.length/2+10}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150+sqrt(300),posY:this.length/2+30}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150+sqrt(300),posY:this.length/2-30}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150-sqrt(300),posY:this.length/2+10}));
        this.balls.push(new YellowBall({radius:10,velX:0,velY:0,posX:this.width-150-sqrt(300),posY:this.length/2-10}));
        console.log(this.balls)
    }

    renderBalls(){
        push();
        translate(this.pos.x,this.pos.y)
        this.balls.forEach(ball => {
            ball.render();
            ball.move();
            ball.checkPos(this.width,this.length)
        });
    }
}