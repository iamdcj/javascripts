# Resoluton Methods

When a promise is settled and `resolved`, we can start to work with the `Promise` object via a number of built-in methods;

### `then`

If a promise is `fulfilled` it will trigger the provided `then` method - this method returns a promise, allowing allows engineers to handle the result of a fulfilled promised.

`then` will allow engineers to handle success and failure cases by way of callbacks;

```
aPromise
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
aPromise
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

##### Returning another Promise

If you return another promise from the `then` method, any subsequent `then` methods will handle that promise;

```
aPromise
  .then(() => {
    const anotherPromise = new Promise((resolve, reject) => {
      resolve('David');
    })

    return anotherPromise;
  })
  .then(name => console.log(name))

// David
```

##### Returning a non-promise value

If a `then` method simply returns a non-promise value, it will treat as per a `Promise.resolve(value)`;

```
aPromise
  .then(() => "Nolé")
  .then(name => console.log(name))

// Nolé
```

### `catch`

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
```

### Finally
