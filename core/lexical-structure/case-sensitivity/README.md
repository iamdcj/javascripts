# Case Sensitivity

JavaScript is a case-sensitive language; built-in keywords and identifiers; variable and function labels, must have a consistent capilization when they are referenced, else the application will throw `reference` errors.

### **Variables**

The following snippet contains two different variable declarations;

```
const davidJones = "David Jones";
const davidjones = "David Christian Jones";
```

Any RHS reference to either binding must use the correct casing for the identifier;

```
console.log(davidJones) // "David Jones"
console.log(davidjones) // "David Christian Jones"
```

If any attempt to use a different casing to the original identifer will result in a reference error will being thrown;

```
console.log(Davidjones) //  Uncaught ReferenceError: Davidjones is not defined
```

### **Functions**

The same applies to functions; the function identifier label must be reference with the original casing, e.g.

```
function LogName(name) {
  console.log(name);
}
```

If you use the wrong casing, you are referencing a function which does not exist in the current scope, or potentially the entire program, either way you get a reference error

```
logname("David")
// Uncaught ReferenceError: logname is not defined
```

### **Keywords**

When using a particular statement, e.g; `for`, `let`, `if` in your programs they need to be lowercase.

The following attempts at `for` loops would both throw errors;

```
For(let i = 0; i < 10; i++) {
  Console.log(i);
}

FOR(let i = 0; i < 10; i++) {
  console.LOG(i);
}
```

whereas the following would do exactly what it is intended to do;

```
for(let i = 0; i < 10; i++) {
  console.log(i);
}
```

**Keywords and statements must all be lowercase when referenced in programs.**
