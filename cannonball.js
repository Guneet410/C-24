class CannonBall {
constructor(x,y){
    var options = {
        restitution : 0.8,
        friction : 1,
        density : 1, 
    isStatic : true}

    this.body = Bodies.circle(x,y,40,options)
    World.add(world,this.body);
    this.r = 40;
    this.image  = loadImage("./assets/cannonball.png");
}
       display() {
        
    

           push()
           imageMode (CENTER)
           translate(this.body.position.x,this.body.position.y)
                rotate (this.body.angle);
           image (this.image,0,0,this.r,this.r)
             
           pop ();
       }

        shoot(){
            var velocity = p5.Vector.fromAngle (cannon.angle)
           // velocity.mult (20)
            Matter.Body.setStatic(this.body,false)
            Matter.Body.setVelocity(this.body, {x:velocity.x*20, y:velocity.y*20})
            
        }


}