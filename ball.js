class Ball {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.9,
            'friction':0.5,
            'density':0.1,
            'isStatic' : false
    }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("paper.png");
        //this.scale = 2.0;
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ImageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}