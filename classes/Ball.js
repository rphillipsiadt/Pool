class Ball {
    constructor(obj){
        this.radius = obj.radius;
        this.vel = createVector(obj.velX,obj.velY);
        this.pos = createVector(obj.posX,obj.posY);
        this.acceleration = createVector(obj.accelX,obj.accelY);
    }

    render(){
        fill(255);
        arc(100,100,this.radius*2,this.radius*2,0,0)
    }

    move(){

    }
}