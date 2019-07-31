// Class constructors
//* Each time we initialise a new instance of a class
//* the constructor function is invoked on the class.
//* they construct the intial state of a class instance

// Log constructor call
class Test {
  constructor() {
    console.log('Oi Oi');   
  }
}
const Silly = new Test(); //{} Oi Oi


// Constructors are used to initialise
//* class properties when creating an instance
//* of a particular class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Steffie = new User("Steffie", 32);
console.log(Steffie.name, Steffie.age); //{} Steffie 32





