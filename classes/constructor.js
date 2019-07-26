// Class constructors
// Each time we initiaise a new instance of a class
// the constructor function is called on the class.
// they construct the intial state of a class instance

// Log constructor call
class Test {
  constructor() {
    console.log('OI OI');   
  }
}
const Silly = new Test(); // OI OI


// Constructors are used to initialise
// class properties when creating an instance
// of a particular class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Steffie = new User("Steffie", 32);
console.log(Steffie.name, Steffie.age); // Steffie 32




