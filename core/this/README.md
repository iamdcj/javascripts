# `this`

The `this` keyword is a pointer to an object, and its value is a reference to the current calling object - this is known as the **context**.

So, the 'context' translates to the calling object of the function; the object which calls the function - the context(`this`) is defined when a function is called (see [execution contexts]('../../../execution/execution-context/'))

`this` is defined during the execution phase of a program.

### Global `this`

If `this` is referenced at the top-level of a JS application - global context, its value will always be equal to the global object;

#### Client-side

```
this === window

// true
```

#### Server-side (node)

```
this === global

// true
```

### Function context

The return value of `this` when referenced within a function call differs dependant on the following;

### Function type

#### Regular function (non-strict)

If `this` is referenced in a regular function call, not operating in `strict` mode, the value of this will be the global object;

```
function test() {
 console.log(this);
}

test();

// Window
```

#### Regular function (strict mode)

If `this` is referenced in a regular function call, operating in `strict` mode, the value of this will be `undefined`;

```
function test() {
 console.log(this);
}

test();

// undefined
```

It is usually always preferred to have `this` be initialised to `undefined` vs. the global object; throwing a reference error is better than unintentionally assigning properties to the global object.

In the following function the value of `this` is a reference to the global object

```
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
```

If you call the function, it will create two properties on the global object;

```
Person('David', 'Jones');

console.log(window.firstName); // David
console.log(window.lastName); // Jones
```

It is never a good idea to be playing around with the global object, and creating global variables.

`use strict`

If we operate in strict mode, the above will throw an error;

```
'use strict'

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person('David', 'Jones');

// Cannot set property 'firstName' of undefined
```

The error is letting us know we should be doing something differently

### Using a constructor

If we call the function with the `new` operator we have a constructor call, and the constructor will generate a context(`object`) to safely work with;

```
'use strict'

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const person = new Person('David', 'Jones');

console.log(person.firstName)

// "David"
```

#### Context generation via constructor

In the above example we know that a new context is generated, the following demonstrates how this happens in a little more detail;

```
function Person(first, last) {
  console.log(this);

  this.firstName = first;
  console.log(this);

  this.lastName = last;
  console.log(this);
}
```

The console prints the context generation, and shows the member generation in action;

```
Person {}
Person {firstName: "David"}
Person {firstName: "David", lastName: "Jones"}
```

The new context(object) gets linked to the `Person`'s prototype property (see [Prototypes]('../objects/../../../../objects/object-oriented-programming/inheritance/prototypes))

Despite the lack of an explicit `return` statement in the `Person` function, the new context is returned implicitly;

```
console.log(person)

// Person {firstName: "David", lastName: "Jones"}
```

### Method context

If `this` is referenced within an object method, the value is set to that of the calling object

```
const David = {
  surname: 'Jones',
  returnName() {
    console.log(`David ${this.surname}`);
  }
}

David.returnName();
// David Jones

The object `David` is the receiver of the `returnName()` method.

```

---

## TL;DR

- `this` is a refererence to the calling object ~ the object which calls the function
- it is referred to as the (calling)'context'
- it is defined during the execution phase
- anonymous functions will bind to the global object
- arrow functions will bind to the parent context
- the context can be set using the `apply`, `call` or `bind` methods
