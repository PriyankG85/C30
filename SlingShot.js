class SlingShot {
    constructor(bodyA, bodyB) {

        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    display() {
        var sp = this.Slingshot.bodyA.position;
        var ep = this.Slingshot.bodyB.position;
        strokeWeight(5);
        line(sp.x, sp.y, ep.x, ep.y);
    }
}