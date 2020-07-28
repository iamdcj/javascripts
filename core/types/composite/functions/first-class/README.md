# First-class Functions

In JavaScript functions are first-class members, i.e. they can be; passed around as arguments to other functions/lexical environments, return from other functions, and can be assigned as a value to a varialble.

### Assigning a function to variable
This is the most common example of first class functions in a program - the function expression.

Any function where the line does not start with `function`, e.g. `var` or `const` is a function expression, for example;

```
const logAnotherThing = function(thing) {
  console.log(thing)
}
```

These functions do not have a function name, but instead use the binding identifier when calling them;

```
logAnotherThing('David')
```

### Functions as parameters
```
function functionA() {
  console.log("function A")
}

function functionB(funk) {
  console.log("function B")

  funk();
}

functionB(functionA);

// function B
// function A
```

### Returning functions from functions




We can see from above that functions can be successfully passed around to, and invoked within other lexical environments.
