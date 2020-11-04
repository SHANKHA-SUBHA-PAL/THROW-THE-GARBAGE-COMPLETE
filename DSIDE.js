class Dside{

    constructor(x,y,width,height){
    
    var options = {
    
    isStatic:true,
    density:1.3
    
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.height = height;
    this.width = width;
    this.image = loadImage("Image/dustbingreen.png");
    World.add(world,this.body);
    }
    display(){
    
    var pos = this.body.position;
   

    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("red"); 
   // rect(0,0,this.width,this.height); 
    pop()

    
    }

display2(){

    var pos = this.body.position;

    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("red"); 
   // rect(0,0,this.width,this.height); 
    imageMode(CENTER);
    image(this.image,0,0,180,200)
    pop()
    }

}

