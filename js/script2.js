//Write a “person” class to hold all the details.

class Person {
    constructor(name, height, weight, age, color, qualification, city, state) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.color = color;
        this.qualification = qualification;
        this.city = city;
        this.state = state;
    }

    details() {
        console.log(`
        Name: ${this.name}
        Height: ${this.height} feet
        Weight: ${this.weight} kg
        Age: ${this.age}
        Color: ${this.color}
        Qualification: ${this.qualification}
        City: ${this.city}
        State: ${this.state}`);
    }
}

let Person1 = new Person("Sugumar", "5.9", "65", "25", "Asian", "B.E", "villupuram", "TamilNadu");
Person1.details();