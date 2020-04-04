# Static Methods

A `Promise` class has a number of static methods, these methods can be used to handle the outcome of an individual promise instance, or a collection of promise instances.

### Reject and Resolve

### `Promise.all()`

The `all` method will capture a collection in another `Promise`, and return once all the promises in the collection of promises are settled.

### `Promise.any()`

### `Promise.race()`

The `race` method returns the result from the first promise from a collection of promises to `fulfill` or `reject`.

**Promise Creator**

```
const promiser = (id, delay) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay, id)
    }
  )
}
```

**Race Results**

```
Promise.race([promiser('a', 200), promiser('b', 300)])
  .then(value => console.log(value))
  .catch(e => console.log(e.message))

// a

Promise.race([promiser('a', 3000), promiser('b', 2999)])
  .then(value => console.log(value))
  .catch(e => console.log(e.message))

// b
```

#### Real World Example

The above examples aren't particularly useful, but there are certain cases when the `race` method will prove useful.

**Timeout Function**
The `race` method comes into its own if you need to apply a timeout to a new promise;

```
function timeout(timeout, promise) {
  let timer;

  const timeoutPromise = new Promise((_, reject) => {
    timer =  setTimeout(() => {
      reject(Error('TIMED OUT'))
    }, timeout)
  })

  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timer);
    console.log('CLEARED')
  })
}

timeout(250, promiser('a', 3000));
  .then(value => console.log(value))
  .catch(e => console.log(e.message))

// TIMED OUT

timeout(250, promiser('a', 100));
  .then(value => console.log(value))
  .catch(e => console.log(e.message))

// a
```
