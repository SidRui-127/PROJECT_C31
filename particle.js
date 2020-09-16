class Particle {
    constructor(x, y, r){
        var options = {    
            isStatic:false,
            restitution:0.4,
            friction:0.4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r/2, options);
        World.add(world, this.body);
    }
    display () {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(random(0,255),random(0, 255),random(0, 255));
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}