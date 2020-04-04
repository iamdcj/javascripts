# Resoluton Methods

Each promise instance comes with a number of members, these methods can be used to deal the the outcome of a settled promise, whether that be a failed outcome, or a successful one.

### `then`

If a promise has `resolved` it will trigger the provided `then` method(if attached) - this method returns a promise, allowing allows engineers to handle the result of a `fulfilled` or `rejected` promised.

`then` will allow engineers to handle success and failure cases by way of callbacks;

##### Syntax

```
aPromise
.then(
  onFulfilled => {
    ...success handling
  },
  onRejected => {
    ...failure handling
  }
)
```

It usually a better idea to use the `catch` method to handle rejections, opposed to the two-callback approach above 👆.

#### Rejections in a chain

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

If a promise is `rejected` it will trigger the provided `catch` callback - allowing engineers to handle any errors;

##### Syntax

```
someBadPromise
  .catch(e => console.error(e))
```

If there is no `catch` callback present, and something is amiss with the async. operation you will be presented with the following error;

```
someBadPromise
  .then(() => console.log('success'))
```

If we don't concern ourselves with concern with handling negative scenarios, and something _does_ go wrong, we get the following;

> `Uncaught (in promise) TypeError: [SOME EXCEPTION REASON]`

#### Catching chained promises

The `catch` method will capture on rejections in a promise chain, not just at the top level, for example;

```
somePromise
  .then(response => Promise.reject('inwalid jason').then(data => ...handle data))
```

The above promise chain consists of the initial request, then we reject the returned promise if something is wrong with the data. If we add a `catch` at the top-level, it will grab any promise `reject`ions;

```
somePromise
  .then(response => Promise.reject('inwalid jason').then(data => ...handle data))
  .catch(e => console.error(e))
```

This approach to dealing with chained or nested promises prevents us from having dangling promises, which aren't handled if they are `rejected`.

#### Catching thrown errors

If an error is thrown at some point in the promise chain, the promise will be `reject`ed; allowing our `catch` method to handle the propagated rejection.

```
fetch('/some-404')
  .then(response => {
    if(!response.ok) {
      throw Error('tits up')
    }
  })
  .catch(e => console.log(e.message))

// tits up
```

### `finally`

The `finally` method will fire whenever a promise has settled, i.e. when the promise has `fulfilled` or `rejected`. It allows us to run some 'clean-up' code, no matter what happens with promise.

##### Syntax

```
somePromise
  .finally(() => console.log('resolved'))

```

The `finally` method is often used to set a 'loading' state to `false`, for example:

```
let loading = true;

somePromise
  .then(doSuccess)
  .catch(doFailure)
  .finally(() => loading = false)

```

If we didn't utilise the `finally` method, we would have to set loading in the `then` and `catch` methods.
