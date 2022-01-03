class Obstacle{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;

        let options = {
            isStatic: false,
            restitution: 1.2
        };

        this.body = Bodies.circle(x, y, r, options);

        World.add(world, this.body);
    }

    display(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,100,146);
        ellipse(pos.x,pos.y, this.r);
        pop();
    }
}