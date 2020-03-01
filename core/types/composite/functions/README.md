# Functions

Functions are reusable pieces of executable code which perform a specific task in the application.

Functions can, and often do `return` a value once complete.

```
function returnFullName(givenName, familyName) {
  return `${givenName} ${familyName}`
}

const fullName = returnFullName("David", "Jones");
```

### `typeof` function

Functions are technically subtypes of objects, despite what `typeof` may return. Functions are callable objects, they can possess properties, and they have a length property.

### Syntax

JavaScript provides two distinct ways of writing functions; classic and [arrow](arrow).

Up until the release of ECMAScript 2015, there was only ever one function syntax; `function nameSpace() {}`, however we now have [arrow](arrow) functions at our disposal; `const thing = () => {}`

### Creating Functions

There are two ways of creating function; **declarations** and **experessions**.

### Declarations

A function declaration is any function which is declared using the `function` keyword, for example;

```
function logThing(thing) {
  console.log(thing)
}
```

If the start of the line is `function`, then you will be declaring a function.

#### Declaration Hoisting

Function declarations do [hoist](../../../scope/hoisting), that is they are essentially shifted to the top of their respective lexical environments during the initial pass by the engine.

```
sayHi('David')

function sayHi(name) {
  console.log(`Hi, ${name}`);
}

// Hi, David
```

### Expressions

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

#### Expression Hoisting

Function expressions do not [hoist](../../../scope/hoisting), that is they do not get shifted to the top of their respective lexical environment as per regular functions;

```
sayHi('David')

const sayHi = function(name) {
  console.log(`Hi, ${name}`);
}

// Uncaught TypeError: sayHi is not a function
```

#### [IIFE](IFFE)

An ['IIFE'](IFFE)(immediately-invoked function expression), i.e. a function which calls itself right away, for example;

```
(function() {
  console.log('RUN')
}())
```
