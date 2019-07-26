// Inheritance occurs when methods and properties are set on
// constructor functions; all new instances will inherit these 
// props and methods from the prototype object of the constructor


// CONSTRUCTOR
// each new instance of this function
// will construct a new Cat
// with a name and a breed
function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

// New instance of Cat
const Bianca = new Cat('Bianca', 'Persian');

// Methods and props can be added to the 
// prototype of a constructor
Cat.prototype.meow = function() {
  console.log(`Meowww meowww! My name is ${this.name}`);
}

Bianca.meow(); // Meowww meowww! My name is Bianca

// Protos. can be modified at any point
Cat.prototype.meow = function() {
  console.log(`Meowww meowww! My name is ${this.name}  😻 `);
}

Bianca.meow(); // Meowww meowww! My name is Bianca 😻 