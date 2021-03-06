# Promise

A `Promise` is an object which represents the resolution of an asynchronous operation, i.e a promise can be considered a placeholder for the result of an async. operation.

##### Syntax

```
new Promise((resolve, reject) => {...body});
```

A promise will capture whether the async. operation was good, and return the result value if so, _or_ if it fails it will a reason for the failure.

### Why use `Promises`?

Promises allow engineers to fire some asynchronous code, and handle the result of that code when it completes at some point in the future. In many ways similar to classic 'callback' functions, but cleaner and often much easier to managed/understand, especially when dealing with asynchronous operations.

> A promise is similar to a phone call; you make the call, potentially continue with some other task whilst you wait to see if the call is answered, if they do you can have the conversation, if not the call ends.

So, we know that Promise's won't immediately return a value, but instead act as a bridge between a return value/the reason a value can't be returned.

The majority of `Promise` use cases will be related to fetching some data(usually `json`) from a server - it is these expensive and potentially time-consuming operations that promises are perfect for handling; you can do X, carry-on with Y, and when X is ready, handle the outcome.

### Creating Promises

A number of libraries/APIs utilise promises 'under-the-hood', especially ones dealing with data fetching .e.g `fetch`, however there are times when you may want to create a new promise in your application.

If you do need to create a promise for some asynchronous operation, this is how it's done;

#### Define a `new` Promise

A promise can be created using the `Promise` constructor; the promise provides the `resolve` and `reject` functions from the 'executor' function.

```
const asyncThing = new Promise((resolve, reject) => {
  ...
})
```

#### The 'Executor' function

It is within the executor function where you declare asynchronous operations, ultimately calling the `resolve` or `reject` methods when the operation succeeds or fails.

There are a few things to remember when working within the executor function body;

- The executor function runs immediately after the promise is created; **it is not asynchronous**.
- The callback functons(`resolve`, `reject`) **do not** return anything.
- If an error is thrown inside the executor, the promise is automatically `reject`ed.

#### `resolve` executor callback

The `resolve` method is called when the operation within the promise body is successful, passing some value as a paramter to the function.

#### `reject` executor callback

The `reject` method is called when the operation within the promise body is unsuccessful, i.e. it fails - with detail as to why it failed passed as an argument to the method.

### Handling Promises

Once we create a new promise, we are going to want to handle whatever is returned further down the line (the object). In order to do this successfully, it is good to know the lifecycle and the possible outcomes for every promise we create;

#### The [States](states) of a `Promise`

Every `Promise` has three [states](states) throughout its lifecycle; `pending`, `fulfilled`, and `rejected`.

#### The [Fates](fates) of a `Promise`

A promise has three states👆, but only the two [fates](fates); `resolved` and `unresolved`.

#### [Methods](methods)

Promises allow you to handle the result of a promise once it has resolved, i.e. the promise object, and engineers can apply methods which monitor a collection of promise instances, via a number of built-in [methods](methods).

---

##### Resources

- [Google Developers](https://developers.google.com/web/fundamentals/primers/promises)
- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
