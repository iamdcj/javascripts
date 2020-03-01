//! ALL OF THE FOLLOWING WORK FINE WITH REGULAR FUNCTIONS !//

// ==== OBJECT METHODS

// Arrow function
const user = {
  name: "David Jones",
  age: 32,
  incrementAge: () => {
    this.age++;
  }
};

user.incrementAge();

// user.age === 32
//! DOES NOT UPDATE

// Regular Function
const user2 = {
  name: "David Jones",
  age: 32,
  incrementAge() {
    this.age++;
  }
};

user2.incrementAge();

// user.age === 33
// UPDATES

// === PROTOTYPE METHODS

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

const Xavi = new Player("Xavi Hernandez", "CM");

Player.prototype.printBio = () => {
  console.log(`${this.name} plays as a ${this.position}`);
};

Xavi.printBio();

//  undefined plays as a undefined
//! the contenxt(this) is bound to the global object

// === ARGUMENTS
const printPositions = () => {
  Array.from(arguments).forEach((runner, i) => {
    console.log(`${runner} came in at ${i + 1}`);
  });
};

printPositions("David", "Jack", "Patrick");
