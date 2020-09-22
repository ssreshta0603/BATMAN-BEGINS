  
class Drop {
    constructor(x, y) {
        var options={
         restitution: 0.1,
         friction: 0.001
       
      };
      this.body = Bodies.circle(x, y,4, options);
      this.y = y
 
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("blue");
      ellipse(pos.x, pos.y, 4);
    }
     update(){
       if(this.body.position.y>500){
          Matter.Body.setPosition(this.body,{x: random(0,400),y: random(0,400) });
        }
     }
   
  }
