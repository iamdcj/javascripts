# Promise

A `Promise` is an object represents the result of an asynchronous operation. **The result of a promise can either be successful or failed.** I

_Promises allow engineers to fire some asynchronous code, and handle the result of that code when it completes at some point in the future._

The `Promise` object is attached with callback functions to run based on the result of the operation, for example;

##### Pseudo Promise

```
// Async function
const promise = someAsyncFunction(doThis);

// Promise object callbacks
// 1 for success, 1 for failure
promise.then(handleSuccessCallback, handleFailureCallback);

```

`Promise`s don't immediately return a value, a la a regular event callback, but instead act as a bridge between a value, or the reason a value can't be returned.

So, in plain ol' English; you ask for something, instead of receiving an immediate response, you're instead presented with a maybe(the `Promise`) - the answer could eventually be 'yes' or 'no', but you have to wait on something before you get the answer.

## **The States of a `Promise`**

Every `Promise` has three states throughout its lifecycle;

- Fulfilled
- Rejected
- Pending

### **Fulfilled**

If the promise has finished-up with the asynchronous operation, and the result of the operation was successful, then the promise has been `fulfilled`.

### **Rejected**

If the promise has finished-up with the asynchronous operation, but this time the result of the operation was unsuccessful, then the promise will be `rejected`.

### **Pending**

If a promise hasn't been `fulfilled` or `rejected` then it is still in its `pending` state.

## **The Fates of a `Promise`**

## A promise has three states👆

Resources

- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
