class Ball {
    constructor(obj){
        this.radius = obj.radius;
        this.speed = obj.speed;
        this.angle = obj.angle;
        this.pos = createVector(obj.posX,obj.posY);
        this.acceleration = createVector(obj.accelX,obj.accelY);
    }

    render(){
        fill(this.colour);
        arc(this.pos.x,this.pos.y,this.radius*2,this.radius*2,0,0)
    }

    move(){
        this.pos.x+=this.speed*cos(this.angle);
        this.pos.y+=this.speed*sin(this.angle);

        // Friction 
        this.speed = this.speed*0.996;
        // this.vel = this.vel * 0.99

        // Stops the ball if there is below a certain speed
        if (this.speed < 0.02 && this.speed > -0.02) {
            this.speed = 0
        }
    }

    checkPos(w,h){
        // Restitution
        if (this.pos.x+this.speed*cos(this.angle)>w-this.radius){
            this.speed = this.speed*0.98
            map(this.angle,0,360,360,0)
        } else if (this.pos.x+this.speed*cos(this.angle)<this.radius){
            this.speed = this.speed*0.98
            map(this.angle,0,360,360,0)
        } else if (this.pos.y+this.speed*sin(this.angle)>h-this.radius) {
            this.speed = this.speed*0.98
            map(this.angle,0,360,360,0)
        } else if (this.pos.y+this.speed*sin(this.angle)<this.radius) {
            this.speed = this.speed*0.98
            map(this.angle,0,360,360,0)
        }
    }

    checkCollisions(balls){
        // console.log(this.vel, this.pos, this.radius)
        if(this.speed > 0) {
            balls.forEach(ball => {
                let dist = sqrt((this.pos.x-ball.pos.x)**2+(this.pos.y-ball.pos.y)**2);
                if (dist < this.radius*2) {
                    console.log("The balls collide")
                    this.speed = this.speed*-0.98
                }
            });
        }
    }
}