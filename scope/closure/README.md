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





---
[JavaScript Closures: Explanations and Open Source Examples - oneminutejs](https://medium.com/@oneminutejs/javascript-closures-explanations-and-open-source-examples-a3731848f658)