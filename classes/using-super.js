// Define Super Class
class Human {
  constructor(race) {
    this.race = race;
  }

}

// Define child class
class Person extends Human {
  constructor(race, name) {
    super(race); // Call parent constructor, pass fields to parent

    this.name = name;
  }

}

// Create Person instance
const User = new Person("White", "Steffie");

// Run Person method
console.log(User.race, User.name);