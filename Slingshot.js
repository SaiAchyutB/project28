class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = pointB
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){

this.Sling.bodyA = null

    
    }

    display(){
        if( this.Sling.bodyA!=null) {
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
}