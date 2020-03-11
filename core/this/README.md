# `this`

The `this` keyword is a pointer to an object, and its value is a reference to the current calling object, i.e. the object which calls the function.

`this` is known as the **context**.

The context(`this`) is defined when a function is called(see [execution contexts]('../../../execution/execution-context/')), and the a new execution context is generated;

### **Why use `this`?**

The `this` key comes into its own whenever we want to reuse functions in different parts of our applications; the `this` keyword allows us to apply the same behaviour when called against a different objects.

### **Determining `this`**

The object which `this` points to is determined by a number of different things;

- **How the function is called;** was it called with an **implicit** binding i.e. against an object `something.func()`, or was it **explicitly** bound using:`call`, `apply`, or `bind`.
- **The type of function used;** is it a regular function, a constructor function, or an arrow function.
- **The operating mode;** if the program or function is in `strict` mode.

#### Initial Value

Initially the `this` value is initialised with the value of `undefined`, unless you are working outside of `strict` mode, whereas it is then set to the `window` object. **Not ideal**.

## **Implicit Binding**

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

## **Expliciting Binding**

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

---

## Function Type

## Operating Mode

## TL;DR

- `this` is a refererence to the calling object ~ the object which calls the function
- it is referred to as the (calling)'context'
- it is defined during the execution phase
- anonymous functions will bind to the global object
- arrow functions will bind to the parent context
- the context can be set using the `apply`, `call` or `bind` methods

---

##### Resources

- [Tyler McGinnis](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)
- [this in depth](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)

```

```
