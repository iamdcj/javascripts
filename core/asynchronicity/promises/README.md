# Promise

A `Promise` is an object which represents the resolution of an asynchronous operation. **The result of a promise can either be successful or failed.**

So, a promise will capture whether the async. operation was good, and return the result value, _or_ it will return the reason it failed.

The returned `Promise` object is attached with callback functions to run based on the result of the operation, take the following asynchronous functional call example;

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

Promises allow engineers to fire some asynchronous code, and handle the result of that code when it completes at some point in the future.

Promise's won't immediately return a value, as per a regular event callback, but instead act as a bridge between: a value, or the reason a value can't be returned.

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

- Pending
- Fulfilled
- Rejected

#### **Pending**

The `pending` state is the default state of a promise, and only when a promise has been `fulfilled` or `rejected` will it come out of its `pending` state.

#### **Fulfilled**

If the promise has finished-up with the asynchronous operation, and the result of the operation was successful, i.e. the operation returns a value, then the promise has been `fulfilled`.

#### **Rejected**

If the promise has finished-up with the asynchronous operation, but this time the result of the operation was unsuccessful. i.e. it didn't return a value, but instead a reason as to why it failed, then the promise will be `rejected`.

### The Fates of a `Promise`

A promise has three states👆, but only the two fates;

- Resolved
- Unresolved

#### Resolved

A resolved promise is any promise that isn't in the `pending` state, i.e. it has been `fulfilled` or `rejected`.

#### Unresolved

A resolved promise is any promise that is still in the `pending` state.

### Creating Promises

We saw in the `fetch` example that some libraries/APIs utilise promises, especially ones dealing with data fetching, however there are times when you may want to create a new promise in your application.

If you need to create a promise for some asynchronous operation, this is how it's done;

##### Define `new` Promise

A promise can be created using the Promise generator; the promise provides the `resolve` and `reject` functions from the executor function.

```
const asyncThing = new Promise((resolve, reject) => {})
```

Define the asynchronous operation inside the executor function body, calling the `resolve` and `reject` functions when the operation is successful or a failure;

---

##### Resources

- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)

```

```
