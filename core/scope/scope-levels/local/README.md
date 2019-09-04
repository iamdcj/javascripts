# Local Scope

Any bindings which do not live in the global lexical environment belong to a local lexical environment, and can only be accessed within that local lexical environment and it's descendant scopes.

There are two distinct types of local scope in JavaScript; **function scope** and **block scope**.

### **[Function Scope](function)**

Any bindings that are wrapped in a function are part of that particular function's lexical environment, and can only be accessed within local lexical environment and any descendant lexical environments.

```
(function() {
  const name = "David";
  console.log(name); // David
})()

console.log(name); // Uncaught ReferenceError: name is not defined
```

### **[Block Scope](block)**

Any `const` and `let` declarations wrapped in a block are part of that particular block's lexical environment, and can only be accessed within local lexical environment and any descendant lexical environments.

```
{
  const name = "David";
  console.log(name); // David
}

console.log(name); // Uncaught ReferenceError: name is not defined
```
