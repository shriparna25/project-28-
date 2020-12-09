class Stone{
  constructor(x,y,width,height)
}
     var options={
         isStatic:false,
         restituition:0,
         friction:1,
         density:1.2
     }
     this.body = Bodies.circle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image=loadImage("images/stone.png");
     World.add(world,this.body);
 
     display()
     {
     
     image(this.image,0,0,this.width,this.height);
     

     }