class Ball {
    constructor(obj){
        this.radius = obj.radius;
        this.vel = createVector(obj.velX,obj.velY);
        this.pos = createVector(obj.posX,obj.posY);
        this.acceleration = createVector(obj.accelX,obj.accelY);
    }

    render(){
        fill(this.colour);
        arc(this.pos.x,this.pos.y,this.radius*2,this.radius*2,0,0)
    }

    move(){
        this.pos.x+=this.vel.x;
        this.pos.y+=this.vel.y;

        // Friction 
        this.vel.x = this.vel.x * 0.996
        this.vel.y = this.vel.y * 0.996
        // this.vel = this.vel * 0.99

        // Stops the ball if there is below a certain speed
        if (this.vel.y < 0.01 && this.vel.y > -0.01) {
            this.vel.y = 0;
        }
        if (this.vel.x < 0.01 && this.vel.x > -0.01) {
            this.vel.x = 0;
        }
    }

    checkPos(w,h){
        // Restitution
        if (this.pos.x+this.vel.x>w-this.radius || this.pos.x+this.vel.x<this.radius){
            this.vel.x = this.vel.x*-0.98
        }
        if (this.pos.y+this.vel.y>h-this.radius || this.pos.y+this.vel.y<this.radius){
            this.vel.y = this.vel.y*-0.98
        }
    }

    checkCollisions(balls){
        // console.log(this.vel, this.pos, this.radius)
        if(this.vel.x > 0 || this.vel.y > 0) {
            balls.forEach(ball => {
                let dist = sqrt((this.pos.x-ball.pos.x)**2+(this.pos.y-ball.pos.y)**2);
                if (dist < this.radius*2) {
                    console.log("The balls collide")
                    this.vel.x = this.vel.x*-0.98
                    this.vel.y = this.vel.y*-0.98
                }
                console.log(balls)
            });
        }
    }
}