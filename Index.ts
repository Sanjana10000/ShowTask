interface config{
    radius?: number;
    color?: String;
    getRadius()?:number;
    setRadius(radius:number)?:void;
    getColor():String;
    setColor (color:String)?:void;
    getArea()?:number;
    getCircumference()?:number;

}
class Circle()
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

        }
        getColor(color:String){

        }
        setColor (color:String):void{

        }
        getArea():number{

        }
        getCircumference():number{

        }
}
let obj1:config= {
     
    radius : 6.5;
}
let obj2:config = {
    radius : 7.5;
    color: 'white';
}

let cir1=new Circle();
let cir2=new Circle(obj1);
let cir3=new Circle(obj2);
