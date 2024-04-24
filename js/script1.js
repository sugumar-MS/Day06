//github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }

    setColor(color) {
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        let area = (Math.PI * this.getRadius() ** 2).toFixed(2);
        return `"Area of circle is" ${area}`;
    }

    getCircumference() {
        let circum = (2 * Math.PI * this.getRadius()).toFixed(2);
        return `"Circumference of circle is" ${circum}`;
    }

    display() {
        let str = `[ radius : ${this.getRadius()} , color : ${this.getColor()}]`;
        return str;
    }
}

let circle1 = new Circle();
let circle2 = new Circle("red");
let circle3 = new Circle(3, "green");

circle1.setRadius(6);
circle1.setColor("white");

circle2.setRadius(9);

console.log(circle1.display());
console.log(circle2.display());
console.log(circle3.getArea());
console.log(circle3.getCircumference());