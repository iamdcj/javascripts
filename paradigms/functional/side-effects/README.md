# Avoid Side-Effects

A side-effect is anything that we cannot safely predict;something else in a function which is not simply returning a value, i.e. another thing in the program is affected.

The following are all side-effects:

- **TIME-BASED DATA** - any data that can change based on a certain date/time.
- **PRINTING TO SCREEN** - any function which prints to the screen, e.g. logging to console.
- **NETWORK REQUESTS** - any calls to an API / remote service
- **STATE MUTATIONS** - mutating state which is used in our programs, e.g. modifying an object.
- **USER INPUT** - anything that is determine by a user action, e.g. form controls.

All of the above have the potential to return different results; they are not predictable.

### Why should we avoid side-effects?

As stated above, side-effects are not predictable; there is always a a chance that the function may return a different value, based on a side-effect being present in the function.

Our functions need to be pure, side-effects ensure that our functions are impure; **non-deterministic**.
