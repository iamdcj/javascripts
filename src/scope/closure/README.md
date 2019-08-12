# Closure
A closure is a function which can access its lexical scope when invoked outside of its lexical environment;
a function can retrieve bindings from its parent scope(s) despite being called away from its wrapping scope.

Closure is a result of two language features; __first-class functions__ and __lexical scoping__ - any language which supports these features will use closure in the application.

__1. First-class Functions__
In JavaScript functions are first-class members, i.e. they can be passed around as arguments to other functions/lexical environments.

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

We can see from above that functions can be successfully passed around to other lexical environments.

__2. Lexical Scoping__
The second part of closure is `Lexical Scope`; JavaScript has lexical scope, scopes are defined by how programmers structure the source code, and nesting of lexical environments(scopes) is common practice in JS applications;

```
// Global Scope (Global Lexical Environemnt)
const globalHi = "Global Hello"

function functionA() {
  // functionA Scope (Local Lexical Environemnt)
  const hello = "functionA says hello"

  console.log(globalHi);

  function functionB() {
    console.log(hello);
  }

  functionB();
}

functionA() 
// Global Hello
// functionA says hello
```

You can see above that nested lexical environments(scopes) can access their parents scopes right upto the global scope; `Lexical Scope`.


Closures 'close' over bindings, preserving access to these bindings whenever the 'closure' is executed outside of its original lexical environment.

#### Higher-Order Functions
These deserve their own overview page, but HOFs are functions which return other functions, exactly what we have below; these types of functions are the foundation of closures.

```
function outer(thing) {
  const a = “ OUTER”;
  return function inner() {
    console.log(thing, a);
  }
 }

const inner = outer(“I AM INSIDE");

inner();
// I AM INSIDE OUTER
```

### Why use closures?
Closures come into their own when you want to restrict the availability of features and/or information - let's say we have an API which does many things, but the user is only concerned with on aspect of the APIs functionality, we can leverage closure by only returning the function(s) which the end-user needs access, and we hide the rest of the data/functions within; the API can still access

#### Principle of Least Privilege
Closures allow programmers to restrict what functionality is available to users/other programmers; this provides a level of security which wouldn't be possible if everything was available/retured from a particular module or function.

We can create APIs which only expose what needs to be exposed thanks for lexical scoping and first-class functions.

##### Example 1 - A crude API.
The following example is a simple example of how closures can be used to expose certain functionality from a parent function:
```
function AnAPI(a) {

  function adder(a, b) {
    return `The result is: ${a + b}`;
  }

  return function result(b) {
    return  adder(a, b); // the a binding is closed over by the AnAPI function.
  }

}

const plusOne = AnAPI(1);

plusOne(2); "The result is: 3"
```

In the above example the user does not need to access the `adder` function, the only need to know about the result, thus only the result function is returned from the lexicel environment. The `a` parameter is passed and stored within `AnAPI`, and is used as an initial state binding which can be used whenever the user invokes the `plusOne` method.

##### Currying introduction
The above approach is an example of `currying`; you essentially set an initial argument value when you store the parent function, then when you invoked the return function you pass an argument which references the initial argument, providing an initial state which can be further updated.




---
[JavaScript Closures: Explanations and Open Source Examples - oneminutejs](https://medium.com/@oneminutejs/javascript-closures-explanations-and-open-source-examples-a3731848f658)