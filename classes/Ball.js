class Ball {
    constructor(obj){
        this.radius = obj.radius;
    }

    render(){
        circle(0,0,this.radius*2)
    }
}