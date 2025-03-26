class Ball {
    constructor(obj){
        this.radius = obj.radius;
        this.vel = createVector(obj.velX,obj.velY);
        this.pos = createVector(obj.posX,obj.posY);
        this.acceleration = createVector(obj.accelX,obj.accelY);
    }

    render(){
        fill(255);
        arc(this.pos.x,this.pos.y,this.radius*2,this.radius*2,0,0)
    }

    move(){
        console.log("t")
        this.pos.x+=this.vel.x;
        this.pos.y+=this.vel.y;
    }

    checkPos(w,h){
        if (this.pos.x>w){
            this.vel.x = this.vel.x*-1
        }
        if (this.pos.x<0){
            this.vel.x = this.vel.x*-1
        }
        if (this.pos.y>h){
            this.vel.y = this.vel.y*-1
        }
        if (this.pos.y<0){
            this.vel.y = this.vel.y*-1
        }
    }
}