//* EXAMPLE 1 - Basic Closure
function outer(thing) {
  const a = 'OUTER';
  return function inner() {
    console.log(thing, a);
  }
}

const inner = outer('I AM INSIDE');

inner(); // I AM INSIDE OUTER