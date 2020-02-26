# Promise

A `Promise` is an object which represents the resolution of an asynchronous operation. **The result of a promise can either be successful or failed.** So, a promise will capture whether the async. operation was good, and return the result value, or if it was bad it will return why it failed.

The returned `Promise` object is attached with callback functions to run based on the result of the operation - take the following asynchronous functional call example;

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

## Why use `Promises`?

`Promise`s allow engineers to fire some asynchronous code, and handle the result of that code when it completes at some point in the future; `Promise`s don't immediately return a value, as per a regular event callback, but instead act as a bridge between a value, or the reason a value can't be returned.

## **The States of a `Promise`**

Every `Promise` has three states throughout its lifecycle;

- Pending
- Fulfilled
- Rejected

### **Pending**

The `pending` state is the default state of a promise, and only when a promise has been `fulfilled` or `rejected` will it come out of its `pending` state.

### **Fulfilled**

If the promise has finished-up with the asynchronous operation, and the result of the operation was successful, i.e. the operation returns a value, then the promise has been `fulfilled`.

### **Rejected**

If the promise has finished-up with the asynchronous operation, but this time the result of the operation was unsuccessful. i.e. it didn't return a value, but instead a reason as to why it failed, then the promise will be `rejected`.

## **The Fates of a `Promise`**

A promise has three states👆, but only the two fates;

- Resolved
- Unresolved

### Resolved

A resolved promise is any promise that isn't in the `pending` state, i.e. it has been `fulfilled` or `rejected`.

### Unresolved

A resolved promise is any promise that is still in the `pending` state.

---

##### Resources

- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
