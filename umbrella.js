class Umbrella{
    constructor(x,y,r){
       var  options ={
            isStatic :true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        
        this.image = loadImage("man.png");
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        image(this.image,100,200,200,300);

    }
}