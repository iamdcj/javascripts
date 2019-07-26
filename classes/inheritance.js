// Define Super Class
class Human {
  speak(person) {
    console.log(`${person} is speaking`);
  }

  walk(person) {
    console.log(`${person} is walking`);
  }

}

// Define child class
// extend from Human
class Person extends Human {
  action(person) {
    // We can now call any methods
    // from the parent(human) class
    this.speak(person)
    this.walk(person)
  }
}

// Create Person instance
const David = new Person();

// Run Person method
David.action("David");