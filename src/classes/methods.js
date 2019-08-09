// Methods can be added to classes
//* in the following way:

class Car {
  //* Add method
  drive() {
    return 'VROOOM!';
  }

  stop() {
    return 'STOPPED!';
  }

  logStop() {
    console.log(`The car was ${this.drive()}, but then it ${this.stop()}`)
  }
}

const Porsche = new Car();
Porsche.logStop(); //{} The car was VROOOM!, but then it STOPPED!