class Ball
{
    constructor(x, y, radius) 
    {
      let options = {
       isStatic:false,
       restitution: 0.8
      };
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      rectMode(CENTER);
      noStroke();
      fill(148,127,146);
      rect(pos.x,pos.y, this.radius);
      pop();
    }
  }