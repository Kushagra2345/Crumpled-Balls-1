class Ground{

    constructor(x,y,width,height){

        this.x=x
        this.y=y
        this.width=width
        this.height=height
    
        var options={
            isStatic:true,
            friction:1,
            density:2.5
    
        }
    
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    
    
    
    
    
    }
    
    display(){
        push()
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }



}