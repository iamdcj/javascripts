# Case Sensitivity

JavaScript is a case-sensitive language; keywords, variables and function labels must have a consistent capilization, else the application will throw `reference` errors.

### **Variables**

The following snippet contains two different variable declarations;

```
const davidJones = "David Jones";
const davidjones = "David Christian Jones";
```

Any RHS reference to either binding must use the correct casing;

```
console.log(davidJones) // "David Jones"
console.log(davidjones) // "David Christian Jones"
```

otherwise reference errors will be thrown;

```
console.log(Davidjones) //  Uncaught ReferenceError: Davidjones is not defined
```

### **Functions**

The same applies to functions; the function label must be reference with the correct casing

```
function LogName(name) {
  console.log(name);
}
```

otherwise you will be referencing a function which does not exists in the scope or program

```
logname("David")
// Uncaught ReferenceError: logname is not defined
```

### **Keywords**

When using a particular statemenet, e.g. `for`, `let`, `if`, in your programs they need to be lowercase.

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
