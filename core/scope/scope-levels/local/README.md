# Local Scope

Any bindings which do not live in the global lexical environment belong to a local lexical environment and its descendant lexical environments.

There are two distinct types of local scope; **function scope**, and **block scope**.

### **[Function Scope](function)**

Any code that is wrapped in a function is part of that function’s scope.

```
(function() {
  const name = "David";
  console.log(name); // David
})()

console.log(name); // Uncaught ReferenceError: name is not defined
```

### **[Block Scope](block)**

`const` and `let` declarations create block scopes when declared inside a `{}` block.

```
{
  const name = "David";
  console.log(name); // David
}

console.log(name); // Uncaught ReferenceError: name is not defined
```
