# The States of a `Promise`

Every `Promise` will enter three states throughout its lifecycle; initially it will be `pending`, ultimately reaching the `fulfilled` or `rejected` state.

### **Pending**

This is the default state of a new promise, and only when a promise has been `fulfilled` or `rejected` will it come out of its `pending` state.

### **Fulfilled**

The promise enters the `fulfilled` when the promise has finished-up with the asynchronous operation successfully.

### **Rejected**

The promise enters the `rejected` state when it has wrapped-up, but the operation was unsuccessful. i.e. it didn't return a value, but instead a reason as to why it failed.

---

##### Resources

- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
