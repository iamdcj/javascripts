// Adding fields in Classes


class Human {

  // Add race field inside constructor
  // (must reference this keyword when declaring)
  constructor(race) {
    this.race = race;
  }

  speak(person) {
    console.log(`${person} is speaking`);
  }

  walk(person) {
    console.log(`${person} is walking`);
  }

}

const Person = new Human("White");
console.log(Person.race)