class Mango {
    constructor(x,y,) {
      var options = {
          isStatic: true,
          restitution :0,
          friction :1,
      }
      this.body = Bodies.circle(x,y,0,options);
      this.diameter = 30;
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("yellow");
      image(this.image, pos.x, pos.y, this.diameter, this.diameter);
      //ellipse(pos.x, pos.y, this.diameter);
    }
  };
