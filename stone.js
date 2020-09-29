class Stone {
    constructor(x,y, width, height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("stone.png");
      //this.body = Bodies.circle(x,y,70,options);
      //this.diameter = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
      fill("grey");
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image, pos.x, pos.y, this.width, this.height);
      //ellipse(pos.x, pos.y, this.diameter);
    }
  };
