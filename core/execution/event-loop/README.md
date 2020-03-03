# Event Loop

The event loop is an tracking mechanism used to manage the execution order of JavaScript applications.

It's primary purpose is to ensure applications run as smooth as possible, avoiding any blocking operations by monitoring the following data structures;

- [**Call Stack**](call-stack), a.k.a execution stack - this tracks where we are in an application relative to the functions we call.
- [**Task Queue**](task-queue), also known as the 'callback queue' - this handles any asynchronous operations we declare in our code to prevent functions from blocking the call stack.

The event loop keeps track of the call stack and the queue, ensuring any potential blocking items, e.g. callback functions passed to from timeouts and data fetching operations, are shifted to the task queue, and only added back to the call stack when it is empty.

**The event loop prevents what is a single-threaded language from jamming-up the user interface**
