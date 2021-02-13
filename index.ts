interface config{
    radius?: number;
    color?: String;


}
class Circle
{
    radius : number;
    color: String;

        Constructor (obj : config )
        {
            this.radius=obj.radius;
            this.color=obj.color;
        }

        getRadius():number{
            return this.radius ;

        }
        setRadius(radius:number):void{
            this.radius=radius;
        }
        getColor(color:String){
            return this.color;

        }
        setColor (color:String):void{
            this.color=color;

        }
        getArea():number{
            return 3.14*this.radius*this.radius;

        }
        getCircumference():number{
            return (2*3.14*this.radius);

        }
}
var obj1:config= {
     
    radius : 6.5,
    color: 'white'
}

var cir1=new Circle();
cir1.setRadius(1.0);
cir1.setColor('red');
console.log(cir1.getRadius(),cir1.getColor);



