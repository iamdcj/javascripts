# Execution Context

The execution context contains a number of objects which keep track of scope and the calling context(`this`), every time we step into a new `function`.

Each context goes through a two-phase process; the **creation phase** and the **execution phase**.

### Creation Phase

The creation of execution context is something which occurs during the compilation/interpret stage of a program's lifecycle - the engine will assess every lexical environment it enters when combing the source code, starting in the global lexical environment, and it will do the following things when creating an execution context;
