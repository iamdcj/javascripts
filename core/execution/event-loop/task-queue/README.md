# Task Queue

The task queue, is a queue of asynchronous callbacks which are passed to non-native APIs, e.g. timeouts, user events, and server requests.

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
