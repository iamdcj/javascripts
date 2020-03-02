# Task Queue

The task queue, a.k.a the 'callback queue' is a queue of functions which are passed to non-native APIs, e.g. timeouts, user events, and server requests, as callbacks.

### Determining the queue

The task queue will take care of web API callbacks which would otherwise cause stack blocking, for example;

The `setTimeout` is an API provided by the browser, which runs a callback after a certain (minimum)time has elapsed;

```
setTimeout(() => {
  console.log('LOG ME')
}, 5000)
```

The event loop will essentially grab the `setTimeout` from the [call stack](../call-stack), and take the callback function passed to the timeout, assigning a 5-second delay before adding it to the queue.

_It does this to prevent the stack from blocking whilst it waits for the timeout._

**5 seconds later**
The wait is up, and the callback function is ready to fire, however the function can't just be dumped into the call stack, that would throw execution out of whack. _Enter the task queue_.

```
// Task Queue
--------
callBack
--------
```

The browser will pass the callback to the task queue, not the call stack, allowing the [event loop](./) to do its thing; **pass things from the task queue to the call stack when the stack is clear.**

#### Selection Process

The example above demonstrates how certain operations are selected for the task queue; if a Web API accepts a callback, it will defer execution; **running when the call stack is clear**.

##### User Input

The event listener will be pushed into the task queue, and whenever the element is clicked it will be placed into the task queue; **running when the call stack is clear**.

```
_El.addEventListener('click', () => {
  console.log('CLICKED')
});

// CLICKED
```

##### Timeout

This is another example of a callback, however the delay is set zero, but that doesn't change anything in respect to execution - it is still passed over to the task queue; **running when the call stack is clear**.

```
setTimeout(() => {
  console.log('LOG ME')
}, 0)

console.log('LOG ME AFTER')

// LOG ME AFTER
// LOG ME
```

It is good to note that the stated timeout isn't a guaranteed time-to-execution, but a minimum time before the callback will be added to the task queue.

##### Data Fetching

If we run some data fetching operation, it will also be deferred, with the callback only being ran once the data has been fetched via the web API.

When the data is fetched, the callback will then be passed to the task queue; **running when the call stack is clear**.

```
$.get('some-url, callback)

```
