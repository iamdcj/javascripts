// EXAMPLE 1 - Simple inheritance
//* Define Super Class
class Human {
  speak(person) {
    console.log(`${person} is speaking`);
  }

  walk(person) {
    console.log(`${person} is walking`);
  }

}

//* Define child class
//* extend from Human
class Person extends Human {
  action(person) {
    //* We can now call any methods
    //* from the parent(human) class
    this.speak(person)
    this.walk(person)
  }
}

//* Create Person instance
const David = new Person();

//* Run Person method
David.action("David");


// EXAMPLE 2 - Further Inheritance
//* Define generic class
class Car {
  constructor({ make, model}) {
    this.make = make;
    this.model = model
  }

  drive() {
    return `The ${this.make} ${this.model} is a driving`;
  }
  
}

//* Define subclass
//* this will inherit from Car generic
class Porsche extends Car {
  constructor({ make, model, color }) {
    super({ make, model }); //* Call parent constructor
    this.color = color;
  }

}

const _911 = new Porsche({ make: "Porsche", model: 911, color: "White"});

//* The following will contain the make, model, and color
//* the make and model is a result of super calling the generic constructor
//* and passing down it's initiazation properties to the subclass
//* and the color comes from the subclass constructor
console.log(_911); //{} { make: 'Porsche', model: 911, color: 'White' }

//* We can also call the parent class' methods
console.log(_911.drive()); //{} The Porsche 911 is a driving