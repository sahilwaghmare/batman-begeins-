class Umbrella{
    constructor(x,y){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(this.x,this.y,250,250,options);
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 250;
        this.image = loadImage("Walking Frame/walking_1.png");

        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}