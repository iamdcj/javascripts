# Hoisting

Hoisting is a conceptual thing which occurs during the compilation/creation phase of a javaScript program.

The compiler will analyze the left-hand side declarations, e.g. `var foo`, leaving the right-hand side initializers, i.e. the values, for the execution phase - the result of this initial pass of the source code is that the variables are shifted to the top of their respective lexical environment. 

**The bindings aren't physically moved by the engine, but stored in memory whenever a new [execution context](../../execution/execution-context/) is created.** - this is what is known as 'hoisting'.

**Breakdown**;

1. Compiler assess source code.
2. Discovers a new function; [Execution Context Creation Phase](../../execution/#creation-phase)
   1. Determines which declarations live in the lexical environment;
   2. Stores a reference to each variable declaration in the lexical environment('hoists');
      1. Variables(including function expressions) are initialised to `undefined`.
      2. Function Declarations are initialised with their actual value.

---

## Hoisting In Action

The following examples demonstrate how hoisting occurs with function declarations and variables, but not function expressions;

### **Variable Hoisting**

#### **Source**

The `name` declaration lives before the initialization in this snippet, leading some to think the log would return `undefined`;

```
name = "David"

var name;

console.log(name); // David
```

however, the `name` declaration is handled during the compile phase, and as a result is 'moved-up' to the top of the scope, above the value assignment(initialization)

#### **Compilation**

```
var name;
```

when it comes to execution the `name` binding has an initializer because assignments and execution code is left in the same spot is as authored;

#### **Execution**

```
name = "David"

console.log(name); // David
```

thus the log will print tehe initialized value because the declaration was 'hoisted' above the assignment before runtime.

---

### **Function Declaration Hoisting**

This example demonstrates hoisting using function declarations, AND how hoisting occurs per-scope;

#### **Source**

The function call for foo() lives above the actual function declaration.

```
foo();

function foo() {
        console.log( a );
        var a = 2;
}
```

#### **Compilation**

However at **Compilation** time the function declaration is hoisted to the top of the scope.
function foo

#### **Execution**

Now that the function declaration is above the function call, it can run the function.
foo() // undefined

The function does run, however hoisting occurs within the function itself; this results in the log returning `undefined` for the RHS reference to ‘a’.

```
function foo() {
  console.log( a ); // undefined
  var a = 2;
}
```

---

### **Function Expression Hoisting**

The following example demonstrates that hoisting is a declaration only construct;
function expressions do not get hoisted, that is the variable declaration will be handled, but handled like a regular variable.

#### **Source**

The function call for foo() lives above the actual function declaration;

```
foo();

var foo = function() {
  console.log( a );
  var a = 2;
}
```

#### **Compilation**

However at #### **Compilation** time foo is hoisted to the top of the scope;

```
var foo;
```

#### **Execution**

The foo variable is now above the function call;

```
foo() // TypeError: foo is not a function
```

In this case we get a TypeError, opposed to `undefined` as per the previous example; function expressions are not hoisted, so when `foo()` is called, it is attempting run what is an as of yet `undefined` binding

---

### **Functions are Top**

From the above it is clear that function and variable declarations are hoisted to the top of their respective scopes, however which are hoisted first(or to the top)?

Function declarations are king; they hoist before variance declarations

Function vs. Variable
This example consists of a function declaration labelled foo, and a regular variable declaration named foo;

#### **Source**

```
foo()

var foo = 1;

function foo() {
  console.log(2);
}
```

#### **Compilation**

The foo function declaration is moved to the top;

```
  function foo()
```

#### **Execution**

The function can be ran, because foo is not the variable declaration;

```
foo() // 2
```

---

### **Function Declarations vs. Function Expressions**

This example consists of a function declaration labelled foo, and a function expression named foo;

#### **Source**

```
foo();

function foo() {
  console.log(1);
}

foo = function() {
  console.log(2);
};
```

#### **Compilation**

The foo function declaration is moved to the top;

```
  function foo()
```

#### **Execution**

The function can be ran, because foo is not the function expression;

```
  foo() // 1
```

---

### **Function vs. Function**

This example consists of a function declaration labelled foo, and a function expression named foo;

#### **Source**

```
foo();

function foo() {
  console.log(1);
}

function foo() {
  console.log(3);
}
```

#### **Compilation**

The foo function declaration is moved to the top

```
function foo()
```

#### **Execution**

The function can be ran because it is a function, but the last declaration will override the initial ones

```
foo() // 3
```

The above are present to highlight the following; **_do not make duplicate declarations in the same lexical environment_**

#### `let` and `const`

The above demonstrates how variables declared using the `var` statement are hoisted to the top of their respective scope, allowing reference prior to initialisation, however `let` and `const` don't behave the same way...[read more](../../variables/temporal-dead-zone)
