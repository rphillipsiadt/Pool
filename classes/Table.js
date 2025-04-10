class Table{
    constructor(obj){
        this.pos = createVector(obj.posX,obj.posY);
        this.width = obj.width;
        this.length = obj.length;
        this.colour = obj.colour ?? color(21,88,67);
        this.radius = obj.radius;
        this.balls = []
        this.newArray;
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
        this.balls.push(new CueBall({radius:this.radius,speed:0,angle:0,posX:this.width/5,posY:this.length/2}));
        this.balls.push(new BlackBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4,posY:this.length/2}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4-(2*sqrt((2*this.radius)**2-this.radius**2)),posY:this.length/2}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+(2*sqrt((2*this.radius)**2-this.radius**2)),posY:this.length/2}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+(2*sqrt((2*this.radius)**2-this.radius**2)),posY:this.length/2-4*this.radius}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+(2*sqrt((2*this.radius)**2-this.radius**2)),posY:this.length/2+4*this.radius}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+sqrt((2*this.radius)**2-this.radius**2),posY:this.length/2-this.radius}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4,posY:this.length/2+2*this.radius}));
        this.balls.push(new RedBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4,posY:this.length/2-2*this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+(2*sqrt((2*this.radius)**2-this.radius**2)),posY:this.length/2+2*this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+(2*sqrt((2*this.radius)**2-this.radius**2)),posY:this.length/2-2*this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+sqrt((2*this.radius)**2-this.radius**2),posY:this.length/2+this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+sqrt((2*this.radius)**2-this.radius**2),posY:this.length/2+3*this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4+sqrt((2*this.radius)**2-this.radius**2),posY:this.length/2-3*this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4-sqrt((2*this.radius)**2-this.radius**2),posY:this.length/2+this.radius}));
        this.balls.push(new YellowBall({radius:this.radius,speed:0,angle:0,posX:this.width-this.width/4-sqrt((2*this.radius)**2-this.radius**2),posY:this.length/2-this.radius}));
        console.log(this.balls)
    }

    renderBalls(){
        push();
        translate(this.pos.x,this.pos.y)
        for (let i = 0;i<this.balls.length;i++){
            this.balls[i].render();
            this.balls[i].move();
            this.balls[i].checkPos(this.width,this.length)
            this.newArray = [...this.balls]
            this.newArray.splice(i,1)
            this.balls[i].checkCollisions(this.newArray)
        };
    }

    hitBall(mouseX,mouseY){
        this.balls[0].hitBall(mouseX,mouseY)
    }
}