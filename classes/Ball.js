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
        // Create a circle
        arc(this.pos.x,this.pos.y,this.radius*2,this.radius*2,0,0)
    }

    move(){
        // Change pos x and pos y using speed and angle
        this.pos.x+=this.speed*cos(this.angle);
        this.pos.y+=this.speed*sin(this.angle);

        // Friction 
        this.speed = this.speed*0.99;
        // this.vel = this.vel * 0.99

        // Stops the ball if there is below a certain speed
        if (this.speed < 0.1 && this.speed > -0.1) {
            this.speed = 0
        }
    }

    checkPos(w,h){
        // Restitution
        if (this.pos.y+this.speed*sin(this.angle)>h-this.radius || this.pos.y+this.speed*sin(this.angle)<this.radius){
            this.speed = this.speed*0.98
            this.angle = map(this.angle, 0, 360, 360, 0)
        } else if (this.pos.x+this.speed*cos(this.angle)>w-this.radius || this.pos.x+this.speed*cos(this.angle)<this.radius) {
            if (this.angle <= 180) {
                this.speed = this.speed*0.98
                this.angle = map(this.angle, 0, 180, 180, 0)
            } else {
                this.speed = this.speed*0.98
                this.angle = map(this.angle, 180, 360, 360, 180)
            }
        }
    }

    checkCollisions(balls) {
        balls.forEach(ball => {
            // X and Y difference
            let distX = ball.pos.x - this.pos.x;
            let distY = ball.pos.y - this.pos.y;
            // Distance of the two balls
            let dist = sqrt(distX * distX + distY * distY);
            let minDist = this.radius * 2;
    
            // Checks if the ball is inside another ball
            if (dist < minDist) {
                // Creates a variable of half distance that the ball is inside another ball
                let overlap = (minDist - dist) / 2;
                // Creates a vector and scales the distance down to a value of maximum 1
                let distance = createVector(distX, distY).normalize();
                // Subtracts the overlap distance from each ball so they are not touching
                this.pos.sub(p5.Vector.mult(distance, overlap));
                ball.pos.add(p5.Vector.mult(distance, overlap));
                // VelNorm is a value that represents the velocity at the collision and vel is the velocity after
                let vel1norm = distance.dot(createVector(cos(radians(ball.angle)) * ball.speed, sin(radians(ball.angle)) * ball.speed));
                let vel2norm = distance.dot(createVector(cos(radians(this.angle)) * this.speed, sin(radians(this.angle)) * this.speed));
                let vel1 = p5.Vector.add(p5.Vector.mult(distance, vel1norm),p5.Vector.mult(createVector(-distance.y, distance.x), createVector(-distance.y, distance.x).dot(createVector(cos(radians(this.angle)) * this.speed, sin(radians(this.angle)) * this.speed)))).mult(0.98);
                let vel2 = p5.Vector.add(p5.Vector.mult(distance, vel2norm),p5.Vector.mult(createVector(-distance.y, distance.x), createVector(-distance.y, distance.x).dot(createVector(cos(radians(ball.angle)) * ball.speed, sin(radians(ball.angle)) * ball.speed)))).mult(0.98);
                // Adjusting both balls values
                this.speed = vel1.mag();
                this.angle = (degrees(vel1.heading()) + 360) % 360;
                ball.speed = vel2.mag();
                ball.angle = (degrees(vel2.heading()) + 360) % 360;
            }
        });
    } 
}