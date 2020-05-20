class Rect{
constructor(x,y,w,h){
    var options={
        isStatic :true,
        density:0.3
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w= w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world,this.body);
}
display(){
    push();
    fill("brown");
    strokeWeight(5);
    rect(this.x,this.y,this.w,this.h);
}
}