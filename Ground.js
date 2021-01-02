class Ground extends BaseClass{
    constructor(x,y,width,height) {

      super(x, y, width, height);
      Matter.Body.setStatic(this.body, true);

      this.image = loadImage("sprites/ground.png");
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };