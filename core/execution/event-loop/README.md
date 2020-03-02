# Event Loop

The event loop is concurrent tracking model used to manage the execution JavaScript applications. It's primary purpose is to ensure applications run as smooth as possible, avoiding any blocking operations by tracking the following data structures;

- [**Call Stack**](call-stack) tracks where we are in an application relative to the functions we call.
- [**Task Queue**](task-queue) handles any asynchronous operations we declare in our code to prevent functions from blocking the call stack.

The event loop keeps tracking of the above, ensuring items which may block are shifted to the task queue, and only added back to the call stack when it is empty.
