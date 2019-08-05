# Closure
A closure is a function which can access its lexical scope when invoked outside of its lexical environment;
a function can retrieve bindings from its parent scope(s) despite being called away from its wrapping scope.

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

The second part of this is `Lexical Scope`; JavaScript has lexical scope, scopes are defined by how programmers structure the source code, and nesting of lexical environments(scopes) is common practice in JS applications;

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


---
[JavaScript Closures: Explanations and Open Source Examples - oneminutejs](https://medium.com/@oneminutejs/javascript-closures-explanations-and-open-source-examples-a3731848f658)