# Promise

A `Promise` is an object which represents the resolution of an asynchronous operation. **The result of a promise can either be successful or failed.** It can be though of as a placeholder for the result of an async. operation;

So, a promise will capture whether the async. operation was good, and return the result value if so, _or_ it will return the reason it failed.

```
const asyncPlaceholder = new Promise(...);
```

The returned `Promise` object is attached with callback functions to run based on the result of the operation, take the following asynchronous functional call example;

```
asyncPlaceholder.then(...success callback).catch(...fall callback)
```

##### Promise (Pseudo)

We create a promise using an async. function

```
// Async function call
const promise = someAsyncFunction(config);
```

The returned promise object will be handled with success and failure callbacks, which will run depending on the result of the promise;

```
// Promise object w/ callbacks
// 1 for success, 1 for failure

promise.then(handleSuccessCallback, handleFailureCallback);
```

### Why use `Promises`?

Promises allow engineers to fire some asynchronous code, and handle the result of that code when it completes at some point in the future. An easy to digest, real-world analogy is that of a door-bell; you ring the bell, but you need to wait to see if someone answers or not.

So, we know that Promise's won't immediately return a value, as per say a regular event callback, but instead act as a bridge between a value, or the reason a value can't be returned.

The majority of `Promise` use cases will be related to fetching some data(usually `json`) from a remote, for example;

##### Fetch data

Generate a promise using the `fetch` API;

```
const items = fetch('some-url.com/items');

console.log(items); // Promise : pending

```

**Promise Resolves**

Once the promise resolves, perform a callback on the promise object;

```
items.then(function(response){
  console.log(response)
})

// { ...someJson }

```

### The States of a `Promise`

Every `Promise` has three states throughout its lifecycle;

- **Pending**; is the default state of a new promise, and only when a promise has been `fulfilled` or `rejected` will it come out of its `pending` state.
- **Fulfilled**; when the promise has finished-up with the asynchronous operation successfully.
- **Rejected**; promise has wrapped-up, but the operation was unsuccessful. i.e. it didn't return a value, but instead a reason as to why it failed.

### The Fates of a `Promise`

A promise has three states👆, but only the two fates;

- **Resolved**; any promise that isn't in the `pending` state, i.e. it has been `fulfilled` or `rejected`.
- **Unresolved**; is any promise that is still in the `pending` state.

### Creating Promises

We saw in the `fetch` example that some libraries/APIs utilise promises 'under-the-hood', especially ones dealing with data fetching, however there are times when you may want to create a new promise in your application.

If you need to create a promise for some asynchronous operation, this is how it's done;

#### Define a `new` Promise

A promise can be created using the `Promise` constructor; the promise provides the `resolve` and `reject` functions from the 'executor' function.

```
const asyncThing = new Promise((resolve, reject) => {
  ...
})
```

Define the asynchronous operation inside the executor function body, calling the `resolve` and `reject` methods when the operation succeeds or fails.

#### `resolve` method

The `resolve` method is called when the operation within the promise body is successful, with some value usually passed in the as an argument to the method.

#### `reject` method

The `reject` method is called when the operation within the promise body is unsuccessful, i.e. it fails - with detail as to why it failed passed as an argument to the method.

### Handling States

Promises allow you to handle the result of some async. code via methods; `then`, `catch`, and `finally`.

#### `then`

If a promise is `fulfilled` it will trigger the provided `then` method - this method returns a promise, allowing allows engineers to handle the result of a fulfilled promised.

`then` will allow engineers to handle success and failure cases by way of callbacks;

```
.then(
  success => {
    ...success handling
  },
  failure => {
    ...failure handling
  }
)
```

The `then` method will also catch rejected promises return from earlier `then` method instances, for example;

```
responsePromise
  .then(error => {
    throw new Error("bollocks");
  })
  .then(
    () => {
      console.log("");
    },
    error => {
      console.warn(error.message);
    }
  );

// bollocks
```

👆The initial `then` method throws an error, and the chained `then` handles the rejection in the callback.

#### `catch`

If a promise is `rejected` it will trigger the provided `catch` callback - allow engineers to handle any errors. If there is no catch callback present, and something is amiss with the async. operation you will be present with the following error;

> `Uncaught (in promise) TypeError: [SOME EXCEPTION REASON]`

##### Catching chained promises

The `catch` method will capture on rejections in a promise chain, not just at the top level, for example;

```
somePromise
  .then(response => Promise.reject('inwalid jason').then(data => ...handle data))
```

The above promise chain consists of the initial request, then we reject the returned promise if something is wrong with the data. If we add a `catch` at the top-level, it will grab any promise rejections;

```
somePromise
  .then(...see above)
  .catch(e => console.error(e))
``

---

##### Resources

- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
```
