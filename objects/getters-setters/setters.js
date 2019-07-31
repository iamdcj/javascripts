// Setters
// ---
// Set bind a property to a function
// allowing the setter to be called
// when setting a propery
const Person = {
  givenName: "",
  familyName: "",
  get fullName() {
    return `${givenName} ${familyName}`
  },
  set fullName(name) {
    const nameParts = name.split(' ');

    this.givenName = nameParts[0];
    this.familyName = nameParts[1];
  }
}

Person.fullName = 'Nole Jones';
console.log(Person.givenName);
console.log(Person.familyName);

