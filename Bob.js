class Bob{
    constructor(x,y,r) {


        var options = {
            isStatic:false,
            restitution:1.3,
            friction:0,
            density:0.5
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill("red");
        ellipse(0,0,this.r,this.r);
        pop();
      }
    }