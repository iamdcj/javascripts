# Const

The `const` statement is used to declare constant bindings in a program.

Constant declarations must be initialized; you cannot simply declare a `const`, it must be assigned a value on creation.

`const` declarations are affected by the [`temporal dead zone`](../temporal-dead-zone)

## **Scope**

`const` declarations can either be scoped globally, or local to its wrapping function or block.

### **Global Scope**

Constants can be declared in the global lexical environment;

```
const Dave = "David";
```

However they do not become members of the `window` object;

```
console.log(window.Dave); // undefined
```

### **Function Scope**

Any `const` declared in a function body are scoped to that function's lexical environment, and its descendant lexical environments;

```
function test() {
  const foo = "bar"
  console.log(foo);

  function test2() {
    console.log(foo);
  }

  test2();
}
test()

// bar
// bar
```

### **Block Scope**

Any `const` declared in a block are scoped to that particular block, and any child scopes;

```
{
  const Dave = "David";
}

console.log(Dave) Uncaught ReferenceError: Dave is not defined
```

Unlike `var` declarations, which do leak outside of blocks, `const` declarations are bound to the wrapping function lexical environment, or if there is no wrapping function, the global lexical environment;

```
{
  var Dave = "David";
}

console.log(Dave) // David

function test() {
  {
    var foo = "bar";
  }
  console.log(foo) // bar
}
console.log(foo) // Uncaught ReferenceError: foo is not defined
```

This provides a convenient way to shield bindings from the global scope, preventing global object pollution and potential binding collisions.

## **Reassignment and Redeclaration**

Constants cannot be reassigned or redeclared.

### **Reassignment**

```
const name = "David";

name = "David Jones"; // Uncaught TypeError: Assignment to constant variable.
```

### **Redeclaration**

```
const name = "David";

const name = "David Jones"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

## **Mutations**

Constants cannot be reassigned or redeclared, however if they are initialized with a composite value, the contents of the composite, e.g. an array or object, can be mutated.

### **Objects**

The object can be modified in all the usual ways;

Modify property values

```
const testObj = {
  name: "David"
}

console.log(testObj.name) // David

testObj.name = "David Jones";

console.log(testObj.name) // David Jones
```

Add new members

```
testObj.age = 32;
console.log(testObj.age) // 32

```

Remove members

```

delete testObj.age;
console.log(testObj.age) // undefined

```

### **Arrays**

Arrays can be modified in all the usual ways;

```
const testArray = [1, 2, 3, 4]

console.log(testArray) // (4) [1, 2, 3, 4]

testArray.push(5);

console.log(testArray) // (5) [1, 2, 3, 4, 5]
```

---

##### References and Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const˛¸
