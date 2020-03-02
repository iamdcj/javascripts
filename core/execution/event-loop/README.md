# Event Loop

JavaScript is a single-threaded runtime, i.e. it has one call stack, permitting it to do _one thing at a time_.

### Call Stack

The call stack, a.k.a the execution stack, is a data structure with the purpose of **tracking where in a program we are**, that is what is currerntly executing at that time(see [execution contexts](./../execution-context)).

#### How it works

For each execution context we enter during the execution phase, we add an item to the stack, starting with our global execution context;

##### Stack Tracing

We have yet to call any functions, but the global execution context fires automatically when the program downloads;

```
GLOBAL()
```

Then for every function we invoke, a new item is added onto the stack;

```
function c() {
  return 'HELLO WORLD';
}

function b() {
  return c();
}

function a() {
  const message = b();
  console.log(message)
}

a()

// HELLO WORLD
```

So, lets update our stack based on the above 👆

We call `a` first, and `b` calls `c`;

```
GLOBAL()
a()
```

which then calls `b`,

```
GLOBAL()
a()
b()
```

and `b` calls `c`

```
GLOBAL()
a()
b()
c()
```

Now, every time we call a function we add it to the stack, but every time we `return`(or reach the end) from a function we remove it from the stack;

`c` returns a string,

- GLOBAL()
- a()
- b()

`b` returns a call to `c`,

- GLOBAL()
- a()

`a` doesn't return, but completes after the log statement.

- GLOBAL()

The program has no more functions to deal with, and it is done.

```
[ EMPTY ]
```

Stack Tracing is something which becomes apparent when an error is thrown in a application; it is this stack trace which gives some insight to the call stack data structure, for example;

```
function c() {
  throw new Error('here')
}

function b() {
  return c();
}

function a() {
  const message = b();
  console.log(message)
}

a()

```

The browser `log` will print the following:

```
Uncaught Error: here // exception
  at c (<anonymous>:2:9)  // enter c
  at b (<anonymous>:6:10) // enter b
  at a (<anonymous>:10:19) // enter a
  at <anonymous>:14:1 // Initial global call
```

The above is a stack trace, showing what was called, and place in the stack things went wrong.
