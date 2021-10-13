class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Человек: " + this.name + ". Возраст: " + this.age);
    }
}

var alex = new Person('Alex', 30, true);
var bob = new Person('Bob', 42, false);
 
alex.name = 'alex2';
alex.info();
bob.info();

// console.log(alex.name);
// console.log(bob.name);