class CueBall extends Ball {
    constructor(obj){
        super(obj)
        
        this.colour = color(255)
    }

    hitBall(x,y){
        // Gives the cueball speed and velocity if the mouse was pressed and the cueball is not moving
        let angle = atan2(y-this.pos.y,x-this.pos.x)
        let dist = sqrt((x-this.pos.x)**2+(y-this.pos.y)**2)
        if (this.speed==0){
            this.speed=dist/30
            this.angle=angle
        }
    }
}