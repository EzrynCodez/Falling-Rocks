class Ball{
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

    left(){
        Matter.Body.applyForce(this.body, this.body.position, {x: -0.02, y: 0});
    }

    right(){
        Matter.Body.applyForce(this.body, this.body.position, {x: 0.02, y: 0});
    }

    wind(){
        Matter.Body.applyForce(this.body, this.body.position, {x: -0.002, y: 0});
    }

    display(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        ellipse(pos.x,pos.y, this.r);
        pop();
    }
}