class Paper{

constructor(x,y,radius){

    this.x=x
    this.y=y
    this.radius=2*radius

    var options={
        restitution:0.5,
        density:1.2,


    }

    this.body=Bodies.circle(x,y,radius,options)
    World.add(world,this.body)





}

display(){
    push()
    fill("purple")
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    circle(0,0,this.radius)
    pop()
}


}




