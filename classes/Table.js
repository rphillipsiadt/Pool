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
        this.balls.push(new Ball({radius:10}));
        console.log(this.balls)
    }

    renderBalls(){
        push();
        translate(this.pos.x,this.pos.y)
        this.balls.forEach(ball => ball.render());
    }
}