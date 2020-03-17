# `this`

The `this` keyword is a pointer to an object`*`, and its value references the current calling object(the object which calls the function), `this` is known as the **context**.

### **Why use `this`?**

The `this` key comes into its own whenever we want to reuse functions in different parts of our applications by providing.a shortcut to the object the function is 'attached to', thus providing a mechanism to reference the properties on the calling object, see [function mixin](#function-mixin). The ability to resuse functions across contexts is a powerful feature.

## Determining `this` 
The context is defined whenever a function is invoked(see [execution contexts]('../../../execution/execution-context/')), resulting in a new execution context being generated, setting the value of `this` based on a number of different factors;

- **How the function is called;** was it called with an **implicit** binding i.e. against an object `something.func()`, or was it **explicitly** bound using: `call`, `apply`, or `bind`.
- **The type of function used;** is it a regular function, a constructor function, or an arrow function?
- **The operating mode;** if the program or function is in `strict` mode.

### Initial `this`

Initially the value of `this` is initialised with the value of `undefined`, unless you are working outside of `strict` mode, where it is then set to the `window` object.

### **Implicit Binding**

If we call an object method, then we will usually be using an implicit binding, i.e. the function is bound to that object implicitly, opposed to using one of the `call`, `apply`, `bind` methods.

If function is called with something to the left of it, e.g. `someObject.myMethod()` then you're dealing with implicit binding.

_Checking if there is anything to the left of a function is a good place to start when dealing with `this`._

**Object Method**

```
const user = {
  name: "David",
  age: 32,
  logName() {
    console.log(this.name)
  }
}
```

The `logName` method references `this`, which points to the `user` object, and would be invoked thus;

```
user.logName();
// "David"
```

Essentiallty the same as using `console.log(user.name)`. **The value of this is set to the object it is assigned to.**

**Function Mixins**

The `this` binding starts to shine when you want to reuse object methods on different calling contexts, for example;

```
function logNameMixin(context) {
  context.logName = function() {
    console.log(this.name);
  }
}

const dad = {
  name: 'David'
}

const lad = {
  name: 'Nolé'
}

logNameMixin(dad)
logNameMixin(lad)

dad.logName() // David
lad.logName() // Nolé
```

We reuse the `logName` method on every object we pass to the mixin, setting the context in process.

**Re-enforcing 'to the left'**

A more complex example of implicit binding is that of nested objects and methods, for example;

```
const user = {
  name: 'David',
  logName() {
    console.log(this.name)
  },
  wife: {
    name: 'Stephanie',
    logName() {
      console.log(this.name)
    }
  }
}
```

The top-level `logName` method is bound to the `user` object;

```
user.logName() // David
```

However, the `logName` method within the `wife` object is bound to the `wife` object;

```
user.wife.logName() // Stephanie
```

**Whatever is directly to the left will be the implicitly bound calling context**

### **Expliciting Binding**

Explicit bindings are determined by the engineer when they want to assign a particular context to a function without passing an object as an argument.

**Explicit binding will assign a context to the right of a function call** via an argument to one of the methods.

There are a number of ways to do this, starting will the `call` method;

#### Call

The `call` method provides a means to explicitly setting a function's calling context via its initial argument;

```
const user = {
  username: "David"
}

function sayName() {
  console.log(this.username);
}
```

Note that the `sayName` function doesn't take any arguments, but references `this` in it's body - invoking the function with setting a context will likely result in undesired behaviour;

```
sayName(); // undefined
```

The `this` binding will point to the `window` object, which does not have a `username` property(unless defined) - `call` to the rescue;

```
sayName.call(user) // David
```

`call` is 'self-invoking', meaning it will fire the function it is applied to immediately, taking the desired context as an argument.

**Additional Arguments**

The `call` method expects a context object to be passed as an initial argument, but will also allow for additional arguments to be passed to the function it is applied to;

```
const user = {
  username: "David"
}

function sayName(age, hometown) {
  console.log(this.username);
  console.log(age);
  console.log(hometown);
}
```

We pass any additional arguments after the first context argument;

```
sayName.call(user, 32, 'Bolton') // David
```

The function is then invoked immediately;

```
// David
// 32
// Bolton
```

#### Apply

The `apply` method is pretty much the same as `call` 👆;

- Explicitly sets the context/value of `this`
- Context is passed as first argument
- Self-invoking

The main difference is how additiona arguments are passed to the function `apply` is applied to; **arguments are passed as an array**, opposed to a comma-separated list as per `call`.

```
const user = {
  username: "David"
}

function sayName(age, hometown) {
  console.log(this.username);
  console.log(age);
  console.log(hometown);
}
```

Pass array of arguments after initial context argument;

```
sayName.apply(user, [32, 'Bolton'])

// David
// 32
// Bolton
```

#### Bind

The `bind` method also allows you to explicitly set the context of a function, however this method is not self-invoking, instead it allows the engineer to store a context-defined function within a variable.

```
const user = {
  username: "David"
}

function sayName(age, hometown) {
  console.log(this.username);
  console.log(age);
  console.log(hometown);
}
```

Store bound function in a new variable, passing initial arguments during initialization;

```
const printInfo = sayName.bind(user, 32, 'Bolton');
```

Call the new context-bound function later;

```
printInfo();

// David
// 32
// Bolton
```

##### Passing Arguments Later

We can see from above that arguments can be passed during the initialization phase, i.e. we can set the values of the function arguments during the context binding, however it could be that we just want to bind the function to a context, and pass argumnets when the function is called some time in the future;

```
const user = {
  username: "David"
}

function sayName(age, hometown) {
  console.log(this.username);
  console.log(age);
  console.log(hometown);
}
```

Bind the context to the `sayName` function, without passing arguments;

```
const printInfo = sayName.bind(user);
```

Call the new context-bound function later, passing arguments at 'call-time';

```
printInfo(32, 'Boston');

// David
// 32
// Boston
```

---

### **Function Type**

There are two different sytnaxes for `function`s; the classic function declaration or express using the `function` statement, or the newer 'fat arrow' function - these both behave in similar ways, i.e. they run chunks of executable code, however the way they handle context/`this` differs.

#### **`function`**

The way regular `function`s handle context is most covered above; if a function isn't called against a method, or with one of the binding methods then its `this` will be bound to the global object `window` - however there are a still a couple more things to consider.

#### Constructors (`new`)

If a function is created with the `new` constructor keyword;

```
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const David = new Person('David', 32);
```

then a new context will be created and bound to that function;

```
David

// Person {name: "David", age: 32}

```

#### Nested `function`s

As above, when using the `function` statement to declare a function, the calling context will be that of the global object;

```
function test() {
  console.log(this);
}
```

And the same applies when functions are called within object methods;

```
const user = {
  name: "David",
  age: 32,
  logger() {
    console.log(this.name);

    function logAge() {
      console.log(this.age)
    }

    logAge()
  }
}

user.logger()
// David
// undefined
```

The `logger` method logs the `name` property from its implicitly bound context, but the nested `logAge` function is bound to the `window` object, which doesn't possess an `age` property.

```
const logAge = () => {
  console.log(this)
  console.log(this.age)
}

user.logger()
// David
// Window {...}
```

This 👆 behaviour will usually frustrate developers that work with the `this` binding, however arrow functions behave in a more expected fashion.

### **Arrow Function** (`() => {}`)

The way arrow functions deal with the `this` binding is much appreciated by most developers that work with the keyword - instead of always defaulting to the global object, it will inherit the context from its wrapping lexical environment.

If we take the example above, and modify the nested `logAge` function syntax to that of an arrow function;

```
const user = {
  name: "David",
  age: 32,
  logger() {
    console.log(this.name);

    const logAge = () => {
      console.log(this.age)
    }

    logAge()
  }
}
```

then we see the benefits of binding the `this` keyword to the lexical context

```
user.logger();

// David
// 32
```

👆`this` will point to the `user` object, which is its lexical context, ensuring it references properties of that context successfully;

```
// 32
```

**Arrow Functions bind `this` to their lexical context, resulting in any invocation staying true to its 'nearest' calling context**

### Operating Mode

The final thing which can affect the value of the `this` binding is the operating mode, i.e. is the program or function operating in the `strict` mode, or 'sloppy' mode.

#### `use strict`

If the operating mode is set to `strict`, and a reference is made to the `this` keyword which would usually be implicitly bound to the `window` object, it will throw;

```
'use strict'

window.name = "David"

function test() {
  console.log(this.name)
}

test()
// Uncaught TypeError: Cannot read property 'name' of undefined
```

**Strict mode prevents the `this` keyword being referenced whevever it is implicitly bound to the global context**

It is worth noting that explicitly setting the context to the `window` object is permitted, however this should only be done _if absolutely necessary_, for example;

```
'use strict'

window.name = "David"

function test() {
  console.log(this.name)
}

test.call(window)
// David
```

## TL;DR

- `this` is a refererence to the calling object ~ the object which calls the function
- it is referred to as the (calling)'context'
- it is defined during the execution phase
- anonymous regular `function`s will point to the global object, unless in `strict` mode
  - the context can be set using the `apply`, `call` or `bind` methods
- arrow functions will bind to the lexical context

---

##### Resources

- [Tyler McGinnis](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)
- [this in depth](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)

```

```

```

```
