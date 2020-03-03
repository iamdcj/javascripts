# Event Loop

The event loop is a concurrent tracking mechanism used to manage the execution order of JavaScript applications.

It's primary purpose is to ensure applications run as smooth as possible, avoiding any blocking operations by monitoring the following data structures;

- [**Call Stack**](call-stack), a.k.a execution stack - this tracks where we are in an application relative to the functions we call.
- [**Task Queue**](task-queue), also known as the 'callback queue' - this handles any asynchronous operations we declare in our code to prevent functions from blocking the call stack.

**The event loop prevents what is a single-threaded language from jamming-up the user interface**, allowing concurrency in our javaScript applications.
