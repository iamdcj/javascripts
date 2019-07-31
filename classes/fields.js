// EXAMPLE 1 : Construtor Initialization
//* Adding fields in Classes
class Human {
  //* Add race field inside constructor
  //* (must reference this keyword when declaring)
  constructor(race) {
    this.race = race;
  }

}

const Person = new Human("White");

// EXAMPLE 2 : Field Declarations w/o Constructor (stage 3)
//* Field declarations make classes a little neater
//* especially if you are not initialising fields
//* when the constructor is called
class Dog {
  //* Initial State
  breed = "Unknown Breed";

  //* state can be set when necessary
  setHeight(breed) {
    this.breed = breed;
  }  

  logBreed() {
    console.log(this.breed);
  }
}

