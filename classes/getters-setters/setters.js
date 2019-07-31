//* Setters
//* ---
//* Set bind a property to a function
//* allowing the setter to be called
//* when setting a propery
class Person {
  constructor() {
    this.givenName = "";
    this.familyName = "";
  }

  get fullName() {
    return `${this.givenName} ${this.familyName}`
  }

  set fullName(name) {
    const nameParts = name.split(' ');

    this.givenName = nameParts[0];
    this.familyName = nameParts[1];
  }
}

//* new instance of David
const person = new Person();

//* Use setter to set fullName property
person.fullName = "David Jones";

//* retrieve fullName property via getter
console.log(person.fullName); //{} David Jones

