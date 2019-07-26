// Adding fields in Classes
class Human {

  // Add race field inside constructor
  // (must reference this keyword when declaring)
  constructor(race) {
    this.race = race;
  }

}

const Person = new Human("White");