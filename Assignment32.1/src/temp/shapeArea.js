a=1;
b='Circle red 10'

class Shape{
    constructor(shape,color){
        this.shape=shape;
        this.color=color;
    }
}

class Circle extends Shape{
    constructor(shape,color,radius){
        super(shape,color)
        this.radius=parseInt(radius);
    }

    getArea(){
        return Math.PI*(this.radius**2);
    }
}


if(a===1){
    b=b.split(" ")
    let shape= new Circle(...b);
    
    console.log(shape.getArea())
}