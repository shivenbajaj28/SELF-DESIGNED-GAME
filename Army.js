class Army{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, 200, 100, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/ArmyMan.png");
        World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}