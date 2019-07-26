// EXAMPLE 1 : Construtor Initialization
// Adding fields in Classes
class Human {
  // Add race field inside constructor
  // (must reference this keyword when declaring)
  constructor(race) {
    this.race = race;
  }

}

const Person = new Human("White");

// EXAMPLE 2 : Field Declarations w/o Constructor (stage 3)
class Dog {
  breed = "";

  setHeight(breed) {
    this.breed = breed;
  }  
}

