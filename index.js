var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.Constructor = function (obj) {
        this.radius = obj.radius;
        this.color = obj.color;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function (color) {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.getArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    Circle.prototype.getCircumference = function () {
        return (2 * 3.14 * this.radius);
    };
    return Circle;
}());
var obj1 = {
    radius: 6.5,
    color: 'white'
};
var cir1 = new Circle();
cir1.setRadius(1.0);
cir1.setColor('red');
console.log(cir1.getRadius(), cir1.getColor);
