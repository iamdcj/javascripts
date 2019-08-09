//* Getters
//* ---
//* Get binds a property to a function
//* allowing the getter to be called
//* when retrieving a propery
class Person {
  constructor() {
    this.givenName = "David";
    this.familyName = "Jones";
  }

  get fullName() {
    return `${this.givenName} ${this.familyName}`
  }
}

//* new instance of David
const person = new Person();

//* retrieve fullName property via getter
console.log(person.fullName); //{} David Jones

