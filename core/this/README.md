# `this`

The `this` keyword is a pointer to an object, and its value is a reference to the current calling object, i.e. the object which calls the function.

`this` is known as the **context**.

The context(`this`) is defined when a function is called(see [execution contexts]('../../../execution/execution-context/'))

### **Why use `this`?**

The `this` key comes into its own whenever we want to reuse functions in different parts of our applications; the `this` keyword allows us to apply the same behaviour when called against a different objects.

### **Determining `this`**

The object which `this` points to is determined by a number of different things;

- **How the function is called;** was it called with an implicit binding, or an explicit binding;
- **Where the function was called;** was it called on an object method, or is was it a callback to some event/web API.
  - `call`, `apply`, or `bind`.
- **The type of function used;** is it a regular function, a constructor function, or an arrow function.
- **The operating mode;** if the program or function is in `strict` mode.

Any number of combinations of the above can affect the object assigned to `this`.

### **Implicit Binding**

If we call an object method, then we will usually be using an implicit binding, i.e. the function is bound to that object implicitly, opposed to using one of the `call`, `apply`, `bind` methods.

If function is called with something to the left of it, e.g. `someObject.myMethod()` then you're dealing with implicit binding.

The following example demonstrates how implicit bindings work;

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

Essentiallty the same as using `console.log(user.name)`.

---

### TL;DR

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
